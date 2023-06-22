-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Menu_name_key`(`name`),
    UNIQUE INDEX `Menu_link_key`(`link`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
