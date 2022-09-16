-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 10 sep. 2022 à 09:00
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
-- Déchargement des données de la table `robots`
--

INSERT INTO `robots` (`id_users`, `id_robots`, `nickname`, `level`, `experience`, `money`, `hp`, `strength`, `armor`, `agility`) VALUES
(0, 1, 'rob', 1, 1050, 105, 30, 5, 3, 2),
(3, 1, 'robocop', 3, 250, 387, 50, 10, 3, 5),
(19, 2, 'azerty', 1, 100, 105, 30, 10, 10, 10),
(5, 17, 'robottt', 1, 150, 100, 30, 5, 3, 2),
(19, 1, 'robot de test nul', 1, 0, 90, 30, 0, 0, 0),
(5, 10, 'ppppppppppppppppppp', 1, 2800, 150, 45, 9, 6, 5),
(5, 11, 'opkjpkjioojoijjnio', 1, 250, 82, 30, 5, 2, 3),
(8, 1, '12354598', 1, 0, 90, 30, 0, 0, 0),
(9, 1, 'muliililylyil', 1, 0, 72, 30, 3, 0, 0),
(5, 12, 'test du r ob o  t ', 1, 0, 100, 30, 4, 3, 3),
(10, 1, 'supercheat', 1, 100, 99, 30, 5, 2, 3),
(10, 2, 'broken', 1, 50, 103, 30, 10, 0, 0),
(5, 13, 'n', 1, 0, 100, 30, 0, 0, 4),
(15, 1, 'momomo', 1, 0, 64, 30, 5, 0, 0),
(5, 14, 'qqw', 1, 0, 100, 30, 0, 0, 0),
(5, 15, 'poml', 1, 0, 100, 30, 0, 0, 0),
(5, 16, 'ujikiol', 1, 50, 90, 30, 5, 4, 1),
(18, 1, 'rpZ', 1, 100, 108, 30, 4, 3, 3),
(20, 1, '123456', 1, 50, 107, 30, 10, 0, 0),
(5, 18, 'force', 1, 100, 110, 30, 10, 0, 0),
(5, 19, 'teteteteete', 1, 100, 118, 30, 10, 0, 0);

-- --------------------------------------------------------

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

--
-- Déchargement des données de la table `robots_items`
--

INSERT INTO `robots_items` (`id_users`, `id_robots`, `id_items`, `id_shops`, `isEquipped`) VALUES
(5, 10, 1, 0, 1),
(5, 10, 4, 0, 1),
(5, 10, 5, 0, 1);

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

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_users`, `email`, `password`) VALUES
(1, 'a@a.a', '12345'),
(2, 'gr', 'y'),
(3, 'test', '123'),
(4, 'ta', 'tat'),
(5, 'a', 'a'),
(6, 'b', 'b'),
(7, 't', 't'),
(8, '123', '123'),
(9, 'ppp', '111'),
(10, 'blabla', 'blabla'),
(11, 'tete', 'tete'),
(12, 'aa', 'aa'),
(13, '8', '8'),
(14, 'at', 'at'),
(15, 'momo', 'momo'),
(16, 'testencore', 'testencore'),
(17, 're', 're'),
(18, 'maxime@maxime.fr', 'maxime'),
(19, 'testtesttest', 'test'),
(20, '123456', '123456'),
(21, 'julien', 'juju');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
