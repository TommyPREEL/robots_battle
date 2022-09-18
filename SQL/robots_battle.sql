-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 18 sep. 2022 à 21:33
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
(9, 1, 'test bad robot', 1, 0, 100, 30, 0, 0, 0, '/robots/robot_2.png'),
(9, 2, 'test strength', 1, 0, 100, 30, 20, 0, 0, '/robots/robot_1.png'),
(9, 3, 'test armor', 1, 0, 100, 30, 0, 20, 0, '/robots/robot_3.png'),
(9, 4, 'test agility', 1, 0, 100, 30, 0, 0, 80, '/robots/robot_4.png'),
(9, 5, 'test money', 1, 0, 10000, 30, 0, 0, 0, '/robots/robot_3.png'),
(9, 6, 'test all strong', 1, 0, 100, 30, 20, 20, 80, '/robots/robot_5.png');

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
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `shops`
--

INSERT INTO `shops` (`id_shops`, `name`, `id_users`, `id_robots`, `img`) VALUES
(37, 'The Fireball', 9, 1, '/shops/the_fireball.png'),
(38, 'The Equinox', 9, 1, '/shops/the_equinox.jpg'),
(39, 'Runes and Rods', 9, 1, '/shops/runes_and_rods.jpeg'),
(40, 'The Fireball', 9, 2, '/shops/the_fireball.png'),
(41, 'The Equinox', 9, 2, '/shops/the_equinox.jpg'),
(42, 'Runes and Rods', 9, 2, '/shops/runes_and_rods.jpeg'),
(43, 'The Fireball', 9, 3, '/shops/the_fireball.png'),
(44, 'The Equinox', 9, 3, '/shops/the_equinox.jpg'),
(45, 'Runes and Rods', 9, 3, '/shops/runes_and_rods.jpeg'),
(46, 'The Fireball', 9, 4, '/shops/the_fireball.png'),
(47, 'The Equinox', 9, 4, '/shops/the_equinox.jpg'),
(48, 'Runes and Rods', 9, 4, '/shops/runes_and_rods.jpeg'),
(49, 'The Fireball', 9, 5, '/shops/the_fireball.png'),
(50, 'The Equinox', 9, 5, '/shops/the_equinox.jpg'),
(51, 'Runes and Rods', 9, 5, '/shops/runes_and_rods.jpeg'),
(52, 'The Fireball', 9, 6, '/shops/the_fireball.png'),
(53, 'The Equinox', 9, 6, '/shops/the_equinox.jpg'),
(54, 'Runes and Rods', 9, 6, '/shops/runes_and_rods.jpeg');

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
(37, 1),
(37, 2),
(37, 3),
(37, 4),
(37, 5),
(37, 7),
(40, 1),
(40, 2),
(40, 3),
(40, 4),
(40, 5),
(40, 7),
(43, 1),
(43, 2),
(43, 3),
(43, 4),
(43, 5),
(43, 7),
(46, 1),
(46, 2),
(46, 3),
(46, 4),
(46, 5),
(46, 7),
(49, 1),
(49, 2),
(49, 3),
(49, 4),
(49, 5),
(49, 7),
(52, 1),
(52, 2),
(52, 3),
(52, 4),
(52, 5),
(52, 7);

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
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_users`, `email`, `password`) VALUES
(9, 'test@gmail.com', 'test');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
