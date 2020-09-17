CREATE DATABASE IF NOT EXISTS dbuserdata;

GRANT ALL PRIVILEGES ON *.* TO nodejs;

flush privileges;

USE dbuserdata;

CREATE TABLE IF NOT EXISTS user (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

INSERT INTO user (id, username, name, lastname) VALUES
(1, 'gringos', 'Gringo', 'Star'),
(2, 'michaelw', 'Michael', 'West'),
(3, 'jamesc', 'James', 'Cameron'),
(4, 'juand', 'Juan', 'DeLaCruz');