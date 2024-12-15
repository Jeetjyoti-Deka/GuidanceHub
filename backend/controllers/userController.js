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
};
