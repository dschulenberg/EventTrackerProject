-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema budgeterdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `budgeterdb` ;

-- -----------------------------------------------------
-- Schema budgeterdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `budgeterdb` DEFAULT CHARACTER SET utf8 ;
USE `budgeterdb` ;

-- -----------------------------------------------------
-- Table `budget`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `budget` ;

CREATE TABLE IF NOT EXISTS `budget` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `amount` INT NOT NULL,
  `date` DATE NULL,
  `variance` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS budgeteruser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'budgeteruser'@'localhost' IDENTIFIED BY 'budgeteruser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'budgeteruser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `budget`
-- -----------------------------------------------------
START TRANSACTION;
USE `budgeterdb`;
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (1, 'Netflix Subscription', 'Monthly', 15, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (2, 'Spotify Subscription', 'Monthly', 10, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (3, 'Hulu Subscription', 'Monthly', 15, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (4, 'Car Insurance', 'Monthly', 89, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (5, 'Renters Insurance', 'Semi-Annual', 125, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (6, 'Apartment Rent', 'Monthly', 1250, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (7, 'Apartment Utilities', 'Monthly', 200, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (8, 'Cell Phone', 'Monthly', 100, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (9, 'Parking Spot', 'Monthly', 250, '2022-10-18', 0);
INSERT INTO `budget` (`id`, `category`, `description`, `amount`, `date`, `variance`) VALUES (10, 'Paycheck', 'Bi-Monthly', 1800, '2022-10-18', 1);

COMMIT;

