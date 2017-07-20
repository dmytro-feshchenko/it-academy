# Maestro | Online service with courses and lessons
[![Code Climate](https://codeclimate.com/github/technoboom/it-academy/badges/gpa.svg)](https://codeclimate.com/github/technoboom/it-academy)

## Motivation:
I've started to develop this project to implement fast and flexible
solution for sharing knowledge and experience between people.

## Implemented features:
-[x] Spring Backend (with API)
-[x] React + Redux Frontend
-[x] React Hot Reload (using webpack-dev-server)
-[x] Spring Hot Reload (using spring-boot-devtools)
-[x] PostgreSQL database
-[x] Jest + Enzyme (Unit + Snapshot testing)

## Getting started
#### Clone the project:
Clone the repository
```
git clone https://github.com/technoboom/it-academy
```
#### Build and run:
Open your terminal and type:
```
./mvnw spring-boot:run
```
Than you can navigate to the page <a href="http://localhost:8080/api">http://localhost:8080/api</a> to see all
available methods and links.

#### Hot reload:
To enabled hot reload you should run the backend `./mvnw spring-boot:run`
and run webpack-dev-server with `npm run start`

#### Project structure:
```
project
│   .mvn - maven specific properties
│   node - local copies of node and yarn
│   node_modules
│   target
└───frontend
│   │   __test__ - jest tests
│   │   config - wepback, karma configs
│   │   dist - compiled bundles
│   └───src
│       │   components
│       │   reducers
│       │   ...
│
└───src.main.java.com.technoboom
    │
    │   controllers
```

#### Test and coverage:
You can run Jest testing ```npm run test```.

Command `npm run test:coverage` outputs the code coverage
and produces `./coverage` directory with json and html reports

### Modules:
- [ ] Multiple languages support


## What we are going to build:
- [ ] Authorization
- [ ] Managing courses (CRUD) from user's account
- [ ] Managing lesson to the courses
- [ ] Commenting system for the courses and lessons
- [ ] Private messages between tutors and students
- [ ] Passing courses
- [ ] Quizzes
- [ ] Automated tasks for different languages
- [ ] Certificates
- [ ] Forum

## Components:
- REST API - Java (Spring)
- Database - PostgreSQL
- Client - React, Redux
- Authorization - JWT
- Backend Testing - JUnit 4
- JavaScript Testing - Jest + Enzyme
- Webpack 2

## Resources:
- Spring: https://spring.io/
- Jest: https://facebook.github.io/jest/
- Redux: http://redux.js.org/