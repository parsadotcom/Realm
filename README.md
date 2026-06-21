# Realm

A simple SaaS!

Realm is a starter SaaS application implemented in JavaScript. This README provides an overview, setup instructions, environment examples, development and deployment guidance, and contribution notes to help you get started quickly.

## Table of contents
- [Features](#features)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Getting started](#getting-started)
  - [Clone](#clone)
  - [Install dependencies](#install-dependencies)
  - [Environment variables](#environment-variables)
  - [Run (development)](#run-development)
  - [Build and run (production)](#build-and-run-production)
- [Database & migrations](#database--migrations)
- [Testing](#testing)


## Features
- User authentication (signup/login)
- Subscription / billing hooks (placeholder for Stripe/webhooks)
- Role-based access (admin, user)
- Basic dashboard and API endpoints
- Extensible folder structure for models, controllers, and routes


## Tech stack
- JavaScript (Node.js)
- Express 
- Database: MongoDB 
- Authentication: JWT

## Requirements
- Node.js v24.13.1
- npm or yarn
- Git
- MongoDB

## Getting started

### Clone
git clone https://github.com/parsadotcom/Realm.git
cd Realm

### Install dependencies
Using npm:
npm install

Or using yarn:
yarn install

### Environment variables
Create a `.env` file at the project root. See example below (`.env.example`) for typical keys. Adjust names to the implementation used by this project.

### Run (development)
npm run dev

or

yarn dev

This should start the development server with hot reload (if configured).

### Build and run (production)
npm run build
npm start

## Testing
Run tests:

npm test

or

yarn test

