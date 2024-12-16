const pool = require("../db/connection");

const getUser = async (req, res) => {
  let client;
  const user = req.user;
  try {
    client = await pool.connect();
    const query = `SELECT * FROM users WHERE id=$1;`;
    const result = await client.query(query, [user.id]);
    // console.log(result.rows);
    res.status(200).json({ message: "User Found", user: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

const getMatchedMentors = async (req, res) => {
  let client;
  try {
    client = await pool.connect();
    const user = req.user;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const offset = (page - 1) * limit || 0;
    const query = `SELECT mentors.id, mentors.username, mentors.role, mentors.image, mentors.email, 
                    COUNT(*) AS overlap_count
                    FROM users AS mentors
                    JOIN skills AS mentor_skills ON mentors.id = mentor_skills.user_id
                    JOIN skills AS mentee_skills ON mentee_skills.name = mentor_skills.name
                    WHERE mentors.role = 'mentor' AND mentee_skills.user_id = $1
                    GROUP BY mentors.id, mentors.username, mentors.role, mentors.image, mentors.email
                    ORDER BY overlap_count DESC
                    LIMIT $2 OFFSET $3;
                    `;
    const result = await client.query(query, [user.id, limit, offset]);
    // console.log(result.rows);
    res.status(200).json({ message: "Mentors Found", mentors: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};
` `;

const setUserRole = async (req, res) => {
  let client;
  const user = req.user;
  const { role } = req.body;
  try {
    client = await pool.connect();
    const query = `UPDATE users SET role=$1 WHERE id=$2 RETURNING *;`;
    const result = await client.query(query, [role, user.id]);
    // console.log(result.rows);
    res.status(200).json({ message: "Role set", user: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

module.exports = {
  setUserRole,
  getUser,
  getMatchedMentors,
};
