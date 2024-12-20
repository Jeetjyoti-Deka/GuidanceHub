const pool = require("../db/connection");

const getSkillsByUserId = async (req, res) => {
  let client;
  try {
    const user = req.user;
    client = await pool.connect();
    const query = `SELECT * FROM skills WHERE user_id=$1`;
    const result = await client.query(query, [user.id]);
    // console.log(result.rows);
    res.status(200).json({ skills: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  } finally {
    client.release();
  }
};

const createSkill = async (req, res) => {
  // TODO: when creating skills makes changes like lowercase, trim etc
  let client;
  try {
    const user = req.user;
    let { name } = req.body;
    name = name.toLowerCase().trim();
    client = await pool.connect();
    const query = `INSERT INTO skills (name, user_id) VALUES ($1, $2) RETURNING *`;
    const result = await client.query(query, [name, user.id]);
    // console.log(result.rows);
    res.status(201).json({ message: "Skill created", skill: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

const deleteSkillById = async (req, res) => {
  let client;
  try {
    const { skillId } = req.params;
    client = await pool.connect();
    const query = `DELETE FROM skills WHERE id=$1`;
    await client.query(query, [skillId]);
    res.status(200).json({ message: "Skill deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  } finally {
    client.release();
  }
};

module.exports = {
  getSkillsByUserId,
  createSkill,
  deleteSkillById,
};
