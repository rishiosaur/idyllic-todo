# ✅ Todo-Idyllic

An example web service implemented in [the Idyllic Language](https://github.com/rishiosaur/idyllic).

This repository holds a simple TODO REST API, and uses the compiler and web server included with the Idyllic repository.

## Routes

- GET / & GET /todos
  - Returns an array of all TODOs in the database.
- POST /complete/{id}
  - Toggles completion of a TODO
- POST /todos
  - Adds a todo to the database.

## Setup

This repository's pretty small (to be fair, so is the Idyllic runtime), so setup is just a few commands:

```bash
$ git clone https://github.com/rishiosaur/idyllic-todo.git
$ cd idyllic-todo
$ yarn
$ yarn run start
```
