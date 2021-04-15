-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Waktu pembuatan: 15 Apr 2021 pada 17.53
-- Versi server: 8.0.23
-- Versi PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sbit-test`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Parent`
--

CREATE TABLE `Parent` (
  `ID` int NOT NULL,
  `UserName` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `Parent`
--

INSERT INTO `Parent` (`ID`, `UserName`) VALUES
(1, 'Ali'),
(2, 'Budi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `USER`
--

CREATE TABLE `USER` (
  `ID` int NOT NULL,
  `UserName` varchar(60) NOT NULL,
  `Parent` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `USER`
--

INSERT INTO `USER` (`ID`, `UserName`, `Parent`) VALUES
(1, 'Ali', 2),
(2, 'Budi', 0),
(3, 'Cecep', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Parent`
--
ALTER TABLE `Parent`
  ADD PRIMARY KEY (`ID`);

--
-- Indeks untuk tabel `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Parent` (`Parent`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `Parent`
--
ALTER TABLE `Parent`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `USER`
--
ALTER TABLE `USER`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
