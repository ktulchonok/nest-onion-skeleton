# Nest Skeleton

## Description

Skeleton based on Nest and Onion architecture

## Running the app

```bash
# development
$ docker-compose up -d
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Structure

### Domain Layer

Contains the core business logic and entities. It's the most central part of the architecture and should be independent of other layers.

### Infrastructure Layer

Implements the interfaces defined in the domain layer, particularly for data access. This layer interacts with databases, external services, etc.

### Application Layer

Contains services that implement business rules and logic. It acts as a bridge between the presentation and domain layers, using domain entities and infrastructure implementations.

### Presentation Layer

Includes controllers and is responsible for handling user interface and network communication. It should only interact with the application layer.

![layers communication](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*uYepHgvnS58MBccKgfK1SA.png)

## TODO

- Docker compose test env
- Unit tests
- Integration tests
- Implement Mongodb in infrastructure layer
- Implement Sequelize in infrastructure layer
- Create Mock data
- Create seeder script
