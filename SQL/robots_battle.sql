-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 18 sep. 2022 à 21:20
-- Version du serveur : 5.7.36
-- Version de PHP : 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `robots_battle`
--

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id_items` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `modStr` int(11) DEFAULT NULL,
  `modArm` int(11) DEFAULT NULL,
  `modAgi` int(11) DEFAULT NULL,
  `modHP` int(11) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_items`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `items`
--

INSERT INTO `items` (`id_items`, `name`, `type`, `modStr`, `modArm`, `modAgi`, `modHP`, `img`, `price`) VALUES
(1, 'Axe', 'weapon', 4, 0, -1, 0, '/items/axe.png', 40),
(2, 'Sword', 'weapon', 3, 0, 0, 0, '/items/sword.png', 30),
(3, 'Iron Shield', 'shield', 0, 3, -1, 5, '/items/iron_shield.png', 50),
(4, 'Wooden Shield', 'shield', 0, 1, 0, 5, '/items/wooden_shield.png', 20),
(5, 'Mage Tunic', 'wear', 1, 2, 3, 10, '/items/mage_tunic.png', 100),
(7, 'Knight Armor', 'wear', 0, 4, -2, 15, '/items/knight_armor.png', 100);

-- --------------------------------------------------------

--
-- Structure de la table `robots`
--

DROP TABLE IF EXISTS `robots`;
CREATE TABLE IF NOT EXISTS `robots` (
  `id_users` int(11) NOT NULL,
  `id_robots` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `hp` int(11) DEFAULT NULL,
  `strength` int(11) DEFAULT NULL,
  `armor` int(11) DEFAULT NULL,
  `agility` int(11) DEFAULT NULL,
  `img` varchar(200) NOT NULL,
  PRIMARY KEY (`id_users`,`id_robots`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `robots`
--

INSERT INTO `robots` (`id_users`, `id_robots`, `nickname`, `level`, `experience`, `money`, `hp`, `strength`, `armor`, `agility`, `img`) VALUES
(1, 1, 'robot a', 1, 1750, 332, 30, 10, 0, 0, ''),
(2, 1, 'robot z', 1, 250, 53, 30, 5, 4, 1, ''),
(1, 2, 'test shop', 1, 450, 3078, 30, 8, 1, 1, ''),
(3, 1, 'a', 1, 3350, 81, 30, 4, 5, 1, ''),
(1, 3, 'test create', 1, 100, 7, 35, 4, 1, -1, ''),
(2, 2, 'test img', 1, 150, 368, 45, 8, 6, -1, '/robots/robot_3.png'),
(1, 4, 'blop', 1, 0, 90, 30, 10, 0, 0, '/robots/robot_3.png'),
(1, 5, 'ttttest', 1, 400, 31, 35, 14, 3, -2, '/robots/robot_5.png'),
(4, 1, 'test robot zzz', 1, 150, 19, 35, 13, 3, -1, '/robots/robot_5.png'),
(5, 1, 'test @', 1, 100, 77, 30, 10, 0, 0, '/robots/robot_3.png'),
(6, 1, 'Cloclo', 3, 700, 331, 30, 5, 3, 3, '/robots/robot_2.png'),
(7, 1, 'MegaMelo', 1, 500, 109, 30, 5, 5, 0, '/robots/robot_1.png'),
(7, 2, '132456654849', 1, 50, 107, 30, 10, 0, 0, '/robots/robot_4.png'),
(8, 1, 'Nicolas', 1, 5650, 100, 30, 5, 4, 1, '/robots/robot_5.png');

-- --------------------------------------------------------

--
-- Structure de la table `robots_items`
--

DROP TABLE IF EXISTS `robots_items`;
CREATE TABLE IF NOT EXISTS `robots_items` (
  `id_users` int(11) NOT NULL,
  `id_robots` int(11) NOT NULL,
  `id_items` int(11) NOT NULL,
  `isEquipped` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_users`,`id_robots`,`id_items`),
  KEY `id_items` (`id_items`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `robots_items`
--

INSERT INTO `robots_items` (`id_users`, `id_robots`, `id_items`, `isEquipped`) VALUES
(1, 2, 1, 0),
(1, 2, 3, 0),
(1, 2, 4, 0),
(1, 2, 2, 0),
(1, 3, 1, 1),
(1, 3, 4, 1),
(1, 3, 2, 0),
(2, 2, 7, 1),
(2, 2, 1, 1),
(2, 2, 2, 0),
(1, 5, 3, 1),
(1, 5, 1, 1),
(4, 1, 1, 1),
(4, 1, 3, 1),
(6, 1, 3, 0),
(6, 1, 4, 0),
(6, 1, 7, 0),
(6, 1, 5, 0),
(6, 1, 2, 0),
(6, 1, 1, 0),
(5, 1, 3, 0),
(8, 1, 3, 0),
(8, 1, 1, 0),
(8, 1, 2, 0),
(8, 1, 4, 0),
(8, 1, 5, 0),
(8, 1, 7, 0);

-- --------------------------------------------------------

--
-- Structure de la table `shops`
--

DROP TABLE IF EXISTS `shops`;
CREATE TABLE IF NOT EXISTS `shops` (
  `id_shops` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_users` int(11) NOT NULL,
  `id_robots` int(11) NOT NULL,
  `img` varchar(200) NOT NULL,
  PRIMARY KEY (`id_shops`),
  KEY `id_users` (`id_users`,`id_robots`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `shops`
--

INSERT INTO `shops` (`id_shops`, `name`, `id_users`, `id_robots`, `img`) VALUES
(1, 'The Fireball', 1, 2, '/shops/the_fireball.png'),
(2, 'The Equinox', 1, 2, '/shops/the_equinox.jpg'),
(3, 'Runes and Rods', 1, 2, '/shops/runes_and_rods.jpeg'),
(4, 'The Fireball', 1, 3, '/shops/the_fireball.png'),
(5, 'The Equinox', 1, 3, '/shops/the_equinox.jpg'),
(6, 'Runes and Rods', 1, 3, '/shops/runes_and_rods.jpeg'),
(7, 'The Fireball', 2, 2, '/shops/the_fireball.png'),
(8, 'The Equinox', 2, 2, '/shops/the_equinox.jpg'),
(9, 'Runes and Rods', 2, 2, '/shops/runes_and_rods.jpeg'),
(10, 'The Fireball', 2, 2, '/shops/the_fireball.png'),
(11, 'The Equinox', 2, 2, '/shops/the_equinox.jpg'),
(12, 'Runes and Rods', 2, 2, '/shops/runes_and_rods.jpeg'),
(13, 'The Fireball', 1, 4, '/shops/the_fireball.png'),
(14, 'The Equinox', 1, 4, '/shops/the_equinox.jpg'),
(15, 'Runes and Rods', 1, 4, '/shops/runes_and_rods.jpeg'),
(16, 'The Fireball', 1, 5, '/shops/the_fireball.png'),
(17, 'The Equinox', 1, 5, '/shops/the_equinox.jpg'),
(18, 'Runes and Rods', 1, 5, '/shops/runes_and_rods.jpeg'),
(19, 'The Fireball', 4, 1, '/shops/the_fireball.png'),
(20, 'The Equinox', 4, 1, '/shops/the_equinox.jpg'),
(21, 'Runes and Rods', 4, 1, '/shops/runes_and_rods.jpeg'),
(22, 'The Fireball', 5, 1, '/shops/the_fireball.png'),
(23, 'The Equinox', 5, 1, '/shops/the_equinox.jpg'),
(24, 'Runes and Rods', 5, 1, '/shops/runes_and_rods.jpeg'),
(25, 'The Fireball', 6, 1, '/shops/the_fireball.png'),
(26, 'The Equinox', 6, 1, '/shops/the_equinox.jpg'),
(27, 'Runes and Rods', 6, 1, '/shops/runes_and_rods.jpeg'),
(28, 'The Fireball', 7, 1, '/shops/the_fireball.png'),
(29, 'The Equinox', 7, 1, '/shops/the_equinox.jpg'),
(30, 'Runes and Rods', 7, 1, '/shops/runes_and_rods.jpeg'),
(31, 'The Fireball', 7, 2, '/shops/the_fireball.png'),
(32, 'The Equinox', 7, 2, '/shops/the_equinox.jpg'),
(33, 'Runes and Rods', 7, 2, '/shops/runes_and_rods.jpeg'),
(34, 'The Fireball', 8, 1, '/shops/the_fireball.png'),
(35, 'The Equinox', 8, 1, '/shops/the_equinox.jpg'),
(36, 'Runes and Rods', 8, 1, '/shops/runes_and_rods.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `shops_items`
--

DROP TABLE IF EXISTS `shops_items`;
CREATE TABLE IF NOT EXISTS `shops_items` (
  `id_shops` int(11) NOT NULL,
  `id_items` int(11) NOT NULL,
  PRIMARY KEY (`id_shops`,`id_items`),
  KEY `id_items` (`id_items`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `shops_items`
--

INSERT INTO `shops_items` (`id_shops`, `id_items`) VALUES
(1, 1),
(4, 3),
(4, 5),
(4, 7),
(7, 3),
(7, 4),
(7, 5),
(13, 1),
(13, 2),
(13, 3),
(13, 4),
(13, 5),
(13, 7),
(16, 2),
(16, 4),
(16, 5),
(16, 7),
(19, 2),
(19, 4),
(19, 5),
(19, 7),
(22, 1),
(22, 2),
(22, 4),
(22, 5),
(22, 7),
(28, 1),
(28, 2),
(28, 3),
(28, 4),
(28, 5),
(28, 7),
(31, 1),
(31, 2),
(31, 3),
(31, 4),
(31, 5),
(31, 7);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_users` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_users`, `email`, `password`) VALUES
(1, 'a', 'a'),
(2, 'z', 'z'),
(3, 'p', 'p'),
(4, 'zzz', 'zzz'),
(5, 'test@gmail.com', 'aze'),
(6, 'blueberry@mail.com', '123456'),
(7, 'mega@gmail.com', '12345'),
(8, 'nicolas@gmail.com', 'test');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
