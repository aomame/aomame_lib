-- phpMyAdmin SQL Dump
-- version 3.4.10.2
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Dec 10, 2012 at 12:54 PM
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
-- Table structure for table `backend_layout`
--

CREATE TABLE IF NOT EXISTS `backend_layout` (
  `uid` int(11) NOT NULL auto_increment,
  `pid` int(11) NOT NULL default '0',
  `t3ver_oid` int(11) NOT NULL default '0',
  `t3ver_id` int(11) NOT NULL default '0',
  `t3ver_wsid` int(11) NOT NULL default '0',
  `t3ver_label` varchar(255) default '',
  `t3ver_state` tinyint(4) NOT NULL default '0',
  `t3ver_stage` int(11) NOT NULL default '0',
  `t3ver_count` int(11) NOT NULL default '0',
  `t3ver_tstamp` int(11) NOT NULL default '0',
  `t3ver_move_id` int(11) NOT NULL default '0',
  `t3_origuid` int(11) NOT NULL default '0',
  `tstamp` int(11) unsigned NOT NULL default '0',
  `crdate` int(11) unsigned NOT NULL default '0',
  `cruser_id` int(11) unsigned NOT NULL default '0',
  `hidden` tinyint(4) unsigned NOT NULL default '0',
  `deleted` tinyint(4) NOT NULL default '0',
  `sorting` int(11) unsigned NOT NULL default '0',
  `title` varchar(255) default '',
  `description` text NOT NULL,
  `config` text NOT NULL,
  `icon` text NOT NULL,
  PRIMARY KEY  (`uid`),
  KEY `parent` (`pid`),
  KEY `t3ver_oid` (`t3ver_oid`,`t3ver_wsid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `backend_layout`
--

INSERT INTO `backend_layout` (`uid`, `pid`, `t3ver_oid`, `t3ver_id`, `t3ver_wsid`, `t3ver_label`, `t3ver_state`, `t3ver_stage`, `t3ver_count`, `t3ver_tstamp`, `t3ver_move_id`, `t3_origuid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `deleted`, `sorting`, `title`, `description`, `config`, `icon`) VALUES
(1, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341141435, 1341088162, 1, 0, 0, 256, 'Single Col Grid', '', 'backend_layout {\r\n	colCount = 1\r\n	rowCount = 2\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Header\r\n					colPos = 1\r\n				}\r\n			}\r\n		}\r\n		2 {\r\n			columns {\r\n				1 {\r\n					name = Content\r\n					colPos = 2\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(2, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341156700, 1341088221, 1, 0, 0, 1000000000, 'Double Col Grid', '', 'backend_layout {\r\n	colCount = 2\r\n	rowCount = 2\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Header\r\n					colspan = 2\r\n					colPos = 1\r\n				}\r\n			}\r\n		}\r\n		2 {\r\n			columns {\r\n				1 {\r\n					name = Left Col\r\n					colPos = 0\r\n				}\r\n				2 {\r\n					name = Right Col\r\n					colPos = 3\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(3, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341156723, 1341088265, 1, 0, 0, 1000000000, 'Tripple Col Grid', '', 'backend_layout {\r\n	colCount = 3\r\n	rowCount = 2\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Header\r\n					colspan = 3\r\n					colPos = 1\r\n				}\r\n			}\r\n		}\r\n		2 {\r\n			columns {\r\n				1 {\r\n					name = Left Col\r\n					colPos = 0\r\n				}\r\n				2 {\r\n					name = Middle Col\r\n					colPos = 2\r\n				}\r\n				3 {\r\n					name = Right Col\r\n					colPos = 3\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(4, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341165181, 1341156445, 1, 0, 0, 128, 'Single Col with Nav', '', 'backend_layout {\r\n	colCount = 1\r\n	rowCount = 2\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Header\r\n					colPos = 1\r\n				}\r\n			}\r\n		}\r\n		2 {\r\n			columns {\r\n				1 {\r\n					name = Content\r\n					colPos = 2\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(5, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341165147, 1341156562, 1, 0, 0, 64, 'Double Col with Nav', '', 'backend_layout {\r\n	colCount = 2\r\n	rowCount = 2\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Header\r\n					colspan = 2\r\n					colPos = 1\r\n				}\r\n			}\r\n		}\r\n		2 {\r\n			columns {\r\n				1 {\r\n					name = Left\r\n					colPos = 0\r\n				}\r\n				2 {\r\n					name = Right\r\n					colPos = 3\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(6, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341489281, 1341487248, 1, 0, 0, 32, 'Without Header', '', 'backend_layout {\r\n	colCount = 1\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Content\r\n					colPos = 2\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(7, 127, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1341489488, 1341487264, 1, 0, 0, 16, 'Without Header, with Nav', '', 'backend_layout {\r\n	colCount = 1\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Content\r\n					colPos = 2\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
