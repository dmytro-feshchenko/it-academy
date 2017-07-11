# Online service with courses and lessons

## Components:
- REST API - Java (Spring)
- Database - PostgreSQL
- Client - React, Redux
- Authorization - JWT
- Backend Testing - JUnit 4
- JavaScript Testing - Jest + Enzyme

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

#### Test:
You can run Jest testing ```npm run test```.

### Modules:
- [ ] Multiple languages support


## Features:
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


## Resources:
- Spring: https://spring.io/
- Jest: https://facebook.github.io/jest/
- Redux: http://redux.js.org/