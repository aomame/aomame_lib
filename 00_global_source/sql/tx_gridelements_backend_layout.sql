-- phpMyAdmin SQL Dump
-- version 3.4.10.2
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Dec 10, 2012 at 12:58 PM
-- Server version: 5.0.95
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `t3_business_base`
--

-- --------------------------------------------------------

--
-- Table structure for table `tx_gridelements_backend_layout`
--

CREATE TABLE IF NOT EXISTS `tx_gridelements_backend_layout` (
  `uid` int(11) NOT NULL auto_increment,
  `pid` int(11) NOT NULL default '0',
  `tstamp` int(11) NOT NULL default '0',
  `crdate` int(11) NOT NULL default '0',
  `cruser_id` int(11) NOT NULL default '0',
  `t3ver_oid` int(11) NOT NULL default '0',
  `t3ver_id` int(11) NOT NULL default '0',
  `t3ver_wsid` int(11) NOT NULL default '0',
  `t3ver_label` varchar(30) NOT NULL default '',
  `t3ver_state` tinyint(4) NOT NULL default '0',
  `t3ver_stage` int(11) NOT NULL default '0',
  `t3ver_count` int(11) NOT NULL default '0',
  `t3ver_tstamp` int(11) NOT NULL default '0',
  `t3ver_move_id` int(11) NOT NULL default '0',
  `t3_origuid` int(11) NOT NULL default '0',
  `sorting` int(10) NOT NULL default '0',
  `deleted` tinyint(4) NOT NULL default '0',
  `hidden` tinyint(4) NOT NULL default '0',
  `title` varchar(255) NOT NULL default '',
  `frame` int(11) NOT NULL default '0',
  `description` text,
  `top_level_layout` tinyint(4) NOT NULL default '0',
  `config` text,
  `pi_flexform_ds` mediumtext,
  `icon` text,
  PRIMARY KEY  (`uid`),
  KEY `parent` (`pid`),
  KEY `t3ver_oid` (`t3ver_oid`,`t3ver_wsid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `tx_gridelements_backend_layout`
--

INSERT INTO `tx_gridelements_backend_layout` (`uid`, `pid`, `tstamp`, `crdate`, `cruser_id`, `t3ver_oid`, `t3ver_id`, `t3ver_wsid`, `t3ver_label`, `t3ver_state`, `t3ver_stage`, `t3ver_count`, `t3ver_tstamp`, `t3ver_move_id`, `t3_origuid`, `sorting`, `deleted`, `hidden`, `title`, `frame`, `description`, `top_level_layout`, `config`, `pi_flexform_ds`, `icon`) VALUES
(1, 1, 1334515899, 1334514730, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 256, 0, 0, 'Slicky 5', 0, 'Slick.js Layout for 5 entrys', 0, 'backend_layout {\r\n	colCount = 5\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Slick 1\r\n					colPos = 11\r\n				}\r\n				2 {\r\n					name = Slick 2\r\n					colPos = 12\r\n				}\r\n				3 {\r\n					name = Slick 3\r\n					colPos = 13\r\n				}\r\n				4 {\r\n					name = Slick 4\r\n					colPos = 14\r\n				}\r\n				5 {\r\n					name = Slick 5\r\n					colPos = 15\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', ''),
(2, 1, 1334516596, 1334516556, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 1, 128, 0, 0, 'Slicky 2', 0, 'Slick.js Layout for 2 entrys', 0, 'backend_layout {\r\n	colCount = 2\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Slick 1\r\n					colPos = 11\r\n				}\r\n				2 {\r\n					name = Slick 2\r\n					colPos = 12\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', ''),
(3, 1, 1334516750, 1334516602, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 1, 192, 0, 0, 'Slicky 3', 0, 'Slick.js Layout for 3 entrys', 0, 'backend_layout {\r\n	colCount = 3\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Slick 1\r\n					colPos = 11\r\n				}\r\n				2 {\r\n					name = Slick 2\r\n					colPos = 12\r\n				}\r\n				3 {\r\n					name = Slick 3\r\n					colPos = 13\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', ''),
(4, 1, 1334516803, 1334516757, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 1, 224, 0, 0, 'Slicky 4', 0, 'Slick.js Layout for 4 entrys', 0, 'backend_layout {\r\n	colCount = 4\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Slick 1\r\n					colPos = 11\r\n				}\r\n				2 {\r\n					name = Slick 2\r\n					colPos = 12\r\n				}\r\n				3 {\r\n					name = Slick 3\r\n					colPos = 13\r\n				}\r\n				4 {\r\n					name = Slick 4\r\n					colPos = 14\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', ''),
(5, 1, 1334516887, 1334516887, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 64, 0, 0, 'Footer 5', 0, 'Footer with 5 cols', 0, 'backend_layout {\r\n	colCount = 5\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Footer col 1\r\n					colPos = 1\r\n				}\r\n				2 {\r\n					name = Footer col 2\r\n					colPos = 2\r\n				}\r\n				3 {\r\n					name = Footer col 3\r\n					colPos = 3\r\n				}\r\n				4 {\r\n					name = Footer col 4\r\n					colPos = 4\r\n				}\r\n				5 {\r\n					name = Footer col 5\r\n					colPos = 5\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', ''),
(6, 1, 1339524052, 1339504489, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 32, 0, 0, 'Double Promotion Boxes', 3, 'Two col content with box layout as background', 0, 'backend_layout {\r\n	colCount = 2\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Left Promotion Box\r\n					colPos = 1\r\n				}\r\n				2 {\r\n					name = Right Promotion Box\r\n					colPos = 2\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', ''),
(7, 1, 1339618983, 1339618006, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 16, 0, 0, 'Tripple Promotion Boxes', 3, '3 Promotion Boxes', 0, 'backend_layout {\r\n	colCount = 3\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Left Box\r\n					colPos = 1\r\n				}\r\n				2 {\r\n					name = Middle Box\r\n					colPos = 2\r\n				}\r\n				3 {\r\n					name = Right Box\r\n					colPos = 3\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
