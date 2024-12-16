/* Replace with your SQL commands */
DELETE FROM skills
WHERE user_id IN (
  SELECT id FROM users WHERE role = 'mentor'
);
