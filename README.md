# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

1. Create file .env from file .env_dev. Change config mysql in file .env
2. Install library
> npm i -g @adonisjs/cli

> npm install

## Create database
mysql -uroot -p -h127.0.0.1

CREATE DATABASE adonis CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

## Migrations and Seeds
> adonis migration:run

> adonis seed

## Run application
> adonis serve --dev
