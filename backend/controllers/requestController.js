const pool = require("../db/connection");

const createRequest = async (req, res) => {
  const user = req.user;

  const { mentorId } = req.body;
  if (!mentorId) {
    return res.status(400).json({ message: "Mentor id missing" });
  }
  let client;
  try {
    client = await pool.connect();
    const query_1 = `SELECT * FROM users WHERE id=$1`;
    const result_1 = await client.query(query_1, [user.id]);
    const sender = result_1.rows[0];
    const query_2 = `SELECT * FROM users WHERE id=$1`;
    const result_2 = await client.query(query_2, [mentorId]);
    const receiver = result_2.rows[0];
    if (
      !sender ||
      !receiver ||
      sender.role !== "mentee" ||
      receiver.role !== "mentor"
    ) {
      return res.json(400).json({ message: "Incorrect Information." });
    }

    const query_3 = `INSERT INTO requests (sender_id, receiver_id) VALUES ($1, $2) RETURNING *;`;
    const result_3 = await client.query(query_3, [sender.id, receiver.id]);
    const newRequest = result_3.rows[0];

    return res.status(200).json({ message: "success", request: newRequest });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

const getSingleRequest = async (req, res) => {
  const user = req.user;

  const { mentorId } = req.query;
  if (!mentorId) {
    return res.status(400).json({ message: "Mentor id missing" });
  }

  let client;
  try {
    client = await pool.connect();
    const query = `SELECT * FROM requests WHERE sender_id=$1 AND receiver_id=$2;`;
    const result = await client.query(query, [user.id, mentorId]);
    if (result.rowCount > 0) {
      return res
        .status(200)
        .json({ message: "Request Found", request: result.rows[0] });
    } else {
      return res.status(200).json({ message: "Request not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

const getMenteeRequests = async (req, res) => {
  const user = req.user;

  let client;
  try {
    client = await pool.connect();
    const query = `SELECT mentors.id, mentors.username, mentors.role, mentors.image, mentors.email, requests.status AS request_status, requests.id AS request_id
                    FROM users AS mentors
                    JOIN requests ON mentors.id = requests.receiver_id
                    WHERE requests.sender_id = $1
                    AND mentors.role = 'mentor';`;
    const result = await client.query(query, [user.id]);
    if (result.rowCount > 0) {
      return res
        .status(200)
        .json({ message: "Requests Found", requests: result.rows });
    } else {
      return res
        .status(200)
        .json({ message: "Requests not found", requests: result.rows });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

// this can only be done by a mentee
const deleteConnectionRequest = async (req, res) => {
  const user = req.user;
  const { mentorId } = req.query;
  if (!mentorId) {
    return res.status(400).json({ message: "Mentor id missing" });
  }
  let client;
  try {
    client = await pool.connect();
    const query = `DELETE FROM requests WHERE sender_id=$1 AND receiver_id=$2;`;
    const result = await client.query(query, [user.id, mentorId]);
    return res.status(200).json({ message: "Request deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

module.exports = {
  createRequest,
  getSingleRequest,
  getMenteeRequests,
  deleteConnectionRequest,
};
