-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecommerceapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerceapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerceapp` DEFAULT CHARACTER SET utf8 ;
USE `ecommerceapp` ;

-- -----------------------------------------------------
-- Table `ecommerceapp`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerceapp`.`product_category` (
  `id` BIGINT(20) NOT NULL,
  `category_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerceapp`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerceapp`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `unit_price` DECIMAL(13,2) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `active` BIT(1) NOT NULL,
  `units_in_stock` INT(11) NOT NULL,
  `date_created` DATETIME(6) NOT NULL,
  `last_updated` DATETIME(6) NOT NULL,
  `product_category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_product_category_idx` (`product_category_id` ASC),
  CONSTRAINT `fk_product_product_category`
    FOREIGN KEY (`product_category_id`)
    REFERENCES `ecommerceapp`.`product_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


