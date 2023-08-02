use unsplash;

INSERT INTO `people` (`id`, `username`, `password`, `profileImg`, `state`) VALUES
('12d1ad57-eba4-438a-8b8d-f09d426cad6b', 'Leonidas', 'gerald', 'http://localhost:3001/uploads/1690212426189.jpg', 1),
('562e0583-ea6f-4b7d-8e94-68a0b22d88d5', 'GaiaDeOro', '12314', 'http://localhost:3001/uploads/1690212362088.jpg', 1),
('86bf0198-48f2-4ca3-8e6d-1f2f04aaa296', 'Francisco', 'gerald', 'http://localhost:3001/uploads/1689963824442.png', 1),
('87de5957-f4a6-41ee-8d81-a339d3e728d3', 'xShipp0', 'gerald', 'http://localhost:3001/uploads/1689986143633.png', 1),
('c949fdcc-90db-4335-bbb7-84dd53da56e1', 'morenofran21', 'gerald', 'http://localhost:3001/uploads/default.png', 1);


INSERT INTO `picks` (`id`, `path`, `state`, `createdAt`, `PersonId`) VALUES
(3, 'http://localhost:3001/uploads/1689793866674.jpg', 1, '2023-07-19 19:11:06', 'c949fdcc-90db-4335-bbb7-84dd53da56e1'),
(4, 'http://localhost:3001/uploads/1689867100066.jpg', 1, '2023-07-20 15:31:40', '87de5957-f4a6-41ee-8d81-a339d3e728d3'),
(5, 'http://localhost:3001/uploads/1689867112174.jpg', 1, '2023-07-20 15:31:52', '87de5957-f4a6-41ee-8d81-a339d3e728d3'),
(6, 'http://localhost:3001/uploads/1689867119170.jpg', 1, '2023-07-20 15:31:59', '87de5957-f4a6-41ee-8d81-a339d3e728d3'),
(7, 'http://localhost:3001/uploads/1689867130486.jpg', 1, '2023-07-20 15:32:10', '87de5957-f4a6-41ee-8d81-a339d3e728d3'),
(8, 'http://localhost:3001/uploads/1689881969780.jpg', 1, '2023-07-20 19:39:29', 'c949fdcc-90db-4335-bbb7-84dd53da56e1'),
(9, 'http://localhost:3001/uploads/1689985735142.jpg', 1, '2023-07-22 00:28:55', '86bf0198-48f2-4ca3-8e6d-1f2f04aaa296'),
(10, 'http://localhost:3001/uploads/1689985749675.jpg', 1, '2023-07-22 00:29:09', '86bf0198-48f2-4ca3-8e6d-1f2f04aaa296'),
(11, 'http://localhost:3001/uploads/1690212683955.jpg', 1, '2023-07-24 15:31:24', '12d1ad57-eba4-438a-8b8d-f09d426cad6b'),
(12, 'http://localhost:3001/uploads/1690212936348.jpg', 1, '2023-07-24 15:35:36', '12d1ad57-eba4-438a-8b8d-f09d426cad6b'),
(13, 'http://localhost:3001/uploads/1690213282890.jpg', 1, '2023-07-24 15:41:23', '87de5957-f4a6-41ee-8d81-a339d3e728d3'),
(14, 'http://localhost:3001/uploads/1690213365168.jpg', 1, '2023-07-24 15:42:45', '87de5957-f4a6-41ee-8d81-a339d3e728d3'),
(15, 'http://localhost:3001/uploads/1690213504853.jpg', 1, '2023-07-24 15:45:04', '87de5957-f4a6-41ee-8d81-a339d3e728d3');
