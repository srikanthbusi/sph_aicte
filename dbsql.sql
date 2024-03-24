-- Table for user profiles
CREATE TABLE user_profiles (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    role VARCHAR(100),
    preferences TEXT
);

-- Table for progress
CREATE TABLE progress (
    progress_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    course_name VARCHAR(255),
    progress_percent DECIMAL(5, 2),
    FOREIGN KEY (user_id) REFERENCES user_profiles(user_id)
);

-- Sample data insertion for user_profiles table
INSERT INTO user_profiles (name, role, preferences) VALUES
('John Doe', 'Student', 'Preference 1'),
('Jane Smith', 'Teacher', 'Preference 2'),
('Bob Johnson', 'Administrator', 'Preference 3');

-- Sample data insertion for progress table
INSERT INTO progress (user_id, course_name, progress_percent) VALUES
(1, 'Course 1', 75.00),
(1, 'Course 2', 90.50),
(1, 'Course 3', 60.25),
(2, 'Course 1', 100.00),
(2, 'Course 2', 80.75),
(3, 'Course 1', 50.00);
