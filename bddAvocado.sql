-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 07 avr. 2022 à 10:56
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `avocado`
--

-- --------------------------------------------------------

--
-- Structure de la table `av_case`
--

CREATE TABLE `av_case` (
  `case_id` int(11) NOT NULL,
  `case_description` text NOT NULL,
  `case_createdAt` date NOT NULL,
  `case_status` tinyint(1) NOT NULL DEFAULT 0,
  `case_end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `av_case`
--

INSERT INTO `av_case` (`case_id`, `case_description`, `case_createdAt`, `case_status`, `case_end_date`) VALUES
(1, 'Extorsion de fonds', '2022-03-18', 0, NULL),
(2, 'Litige entre voisin', '2022-03-18', 0, NULL),
(3, 'Délit routier', '2022-03-18', 0, NULL),
(4, 'Viol sur octagénère', '0000-00-00', 0, NULL),
(5, 'Divorce', '2022-03-18', 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `av_client`
--

CREATE TABLE `av_client` (
  `client_id` int(11) NOT NULL,
  `client_first_name` varchar(255) NOT NULL,
  `client_last_name` varchar(255) NOT NULL,
  `client_adress` varchar(255) NOT NULL,
  `client_birthday` date DEFAULT NULL,
  `client_createdAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `av_client`
--

INSERT INTO `av_client` (`client_id`, `client_first_name`, `client_last_name`, `client_adress`, `client_birthday`, `client_createdAt`) VALUES
(1, 'Robert', 'Dupont', '16 rue du chat qui miaule', '2015-04-16', '2022-03-18'),
(2, 'Victor', 'Landry', '19 rue de Paris', '2005-05-05', '2022-03-18'),
(3, 'Marguerite', 'Garnier', '3 impasse des Migeons', '1978-08-17', '2022-03-18'),
(4, 'Léane', 'Dupont', '19 rue des peupliers', '1964-03-07', '2022-03-18'),
(5, 'Martin', 'Blais', '123 rue du Général Leclerc', '1995-12-12', '2022-03-18'),
(6, 'Gertrude', 'De La Panaque', '14 avenue des bourges', '1940-01-01', '2022-03-18');

-- --------------------------------------------------------

--
-- Structure de la table `av_event`
--

CREATE TABLE `av_event` (
  `event_id` int(11) NOT NULL,
  `event_description` text NOT NULL,
  `event_date` date NOT NULL,
  `event_duration` int(11) NOT NULL,
  `event_id_case` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `av_event`
--

INSERT INTO `av_event` (`event_id`, `event_description`, `event_date`, `event_duration`, `event_id_case`) VALUES
(1, 'Ouverture du dossier', '2022-03-18', 1, 3),
(2, 'Rdv initial client', '2022-03-18', 1, 2),
(3, 'Médiation', '2022-03-01', 8, 2),
(4, 'Recherche et rédaction de la conclusion', '2022-03-18', 21, 2),
(5, 'Réception de la conclusion adverse', '2022-03-18', 30, 1),
(6, 'Rédaction de courrier juridique et validation client', '2022-03-18', 8, 2),
(7, 'Réunion avec partie adverse pour arrangement à l\'amiable', '2022-03-18', 12, 2),
(8, '1ère plaidoirie au tribunal', '2022-03-18', 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `av_link_case_client`
--

CREATE TABLE `av_link_case_client` (
  `link_id_client` int(11) NOT NULL,
  `link_id_case` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `av_link_case_client`
--

INSERT INTO `av_link_case_client` (`link_id_client`, `link_id_case`) VALUES
(1, 5),
(2, 1),
(2, 2),
(2, 5),
(3, 3),
(4, 5),
(5, 2),
(6, 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `av_case`
--
ALTER TABLE `av_case`
  ADD PRIMARY KEY (`case_id`);

--
-- Index pour la table `av_client`
--
ALTER TABLE `av_client`
  ADD PRIMARY KEY (`client_id`);

--
-- Index pour la table `av_event`
--
ALTER TABLE `av_event`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `FK_event_case` (`event_id_case`);

--
-- Index pour la table `av_link_case_client`
--
ALTER TABLE `av_link_case_client`
  ADD PRIMARY KEY (`link_id_client`,`link_id_case`),
  ADD KEY `FK_case_client_case` (`link_id_case`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `av_case`
--
ALTER TABLE `av_case`
  MODIFY `case_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `av_client`
--
ALTER TABLE `av_client`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `av_event`
--
ALTER TABLE `av_event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `av_event`
--
ALTER TABLE `av_event`
  ADD CONSTRAINT `FK_event_case` FOREIGN KEY (`event_id_case`) REFERENCES `av_case` (`case_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `av_link_case_client`
--
ALTER TABLE `av_link_case_client`
  ADD CONSTRAINT `FK_case_client_case` FOREIGN KEY (`link_id_case`) REFERENCES `av_case` (`case_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
