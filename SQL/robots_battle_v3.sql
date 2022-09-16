-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 16 sep. 2022 à 16:55
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
(1, 'Axe', 'weapon', 4, 0, -1, 0, '/axe.png', 40),
(2, 'Sword', 'weapon', 3, 0, 0, 0, '/sword.png', 30),
(3, 'Iron Shield', 'shield', 0, 3, -1, 5, '/iron_shield.png', 50),
(4, 'Wooden Shield', 'shield', 0, 1, 0, 5, '/wooden_shield.png', 20),
(5, 'Mage Tunic', 'wear', 1, 2, 3, 10, '/mage_tunic.png', 100),
(7, 'Knight Armor', 'wear', 0, 4, -2, 15, '/knight_armor.png', 100);

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
  PRIMARY KEY (`id_users`,`id_robots`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


--
-- Structure de la table `robots_items`
--

DROP TABLE IF EXISTS `robots_items`;
CREATE TABLE IF NOT EXISTS `robots_items` (
  `id_users` int(11) NOT NULL,
  `id_robots` int(11) NOT NULL,
  `id_items` int(11) NOT NULL,
  `id_shops` int(11) NOT NULL,
  `isEquipped` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_users`,`id_robots`,`id_items`,`id_shops`),
  KEY `id_2` (`id_items`),
  KEY `id_shops` (`id_shops`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Structure de la table `shops`
--

DROP TABLE IF EXISTS `shops`;
CREATE TABLE IF NOT EXISTS `shops` (
  `id_shops` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_shops`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

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
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
