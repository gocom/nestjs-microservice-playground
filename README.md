NestJS API test
=====

Personal [NestJS](https://nestjs.com/) API playground and test. Using this
to try out, learn and evaluate NestJS for microservice development.

Install
-----

After cloning the repository:

```shell
$ make start
```

The above will install dependencies using npm and launch the development
server.

Swagger
-----

After launching the service, graphical Swagger interface can be found at:

[http://localhost:3000/](http://localhost:3000/)

Development
-----

For available commands, run:

```shell
$ make help
```

Roadmap
-----

Things I would like to do:

1. Use ORM to save entities, and to figure out how performant things can be
   made when ORM is involved.
2. Implement repository and command design patterns in the code base to
   make code less script-like and more extendable.
3. Wrap it in containers so that node doesn't have to be installed in the
   host machine. Check how performant, for instance, Docker and NestJS are
   in different operating systems.
4. Wrap setup and daily running in Makefiles, or other scripts, so that
   daily usage doesn't require extra steps.
5. Implement authentication functions using both normal tokens and JWT.
6. Try-out production-ready containers that could be made scale up to
   thousands of request a second.
7. Write unit tests, and setup CI.

Also:

1. Evaluate NestJS updatability and future development stability.
2. Check which node versions it actually supports, and whether different
   node versions affect the packages it would install.
3. Check dependency tree and look how many security holes used packages
   have had in the past, and could create a version hell.
