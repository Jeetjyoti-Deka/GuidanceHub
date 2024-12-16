/* Replace with your SQL commands */
DELETE FROM users
WHERE role = 'mentor'
  AND username IN (
    'John Doe', 'Jane Smith', 'Robert Brown', 
    'Emily Davis', 'Michael Johnson', 
    'Linda Martinez', 'James Wilson', 
    'Patricia Taylor', 'David Anderson', 
    'Barbara Thomas'
  );
