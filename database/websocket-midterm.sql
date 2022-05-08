-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2022 at 03:44 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websocket-midterm`
--
CREATE DATABASE IF NOT EXISTS `websocket-midterm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `websocket-midterm`;

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$juTZdCXGGLUEgCbu1zPH7OCgqH241FbX8GAWTmA89/FqILsoChHZa'),
(2, 'dang', 'dang@mail.com', '$2b$10$JQmPVAsIXGU.L5HJglNfvOXxxwtsQ9aoZcyCg25gzWuN2KLqIfeNS'),
(3, 'dang', 'dang@mail.com', '$2b$10$dyw7lcvgJlaY7hB0UdJiJ.5lXEukeL23mTxBePKdlkBD11esixAUq'),
(4, 'dang123', 'dang123@mail.com', '$2b$10$PMCCImsku885LGbG5OLk5eaG7ONFlsb0qm8C96Pn6XTAcPt3obODW');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `idroom` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slogan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`idroom`, `name`, `slogan`) VALUES
(1, 'Code together', 'Cùng nhau code nhé'),
(2, 'Hội đọc sách', 'Cùng nhau đọc sách nhé'),
(3, 'Anh em chạy deadline', 'Cùng nhau chạy deadline nhé'),
(4, 'Hội giải trí', 'Cùng nhau giải trí');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`idroom`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `idroom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
