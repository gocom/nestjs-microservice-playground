.PHONY: all build clean configure help lint-fix start stop test

all: start

build:
	npm run build

lint-fix:
	npm run format
	npm run lint

configure:
ifeq (,$(wildcard ./.env))
    cp .env.template .env
endif

node_modules:
	npm install

start: node_modules configure
	docker-compose up -d
	npm run start:dev

stop:
	docker-compose stop

test:
	npm run test:cov

clean:
	rm -rf .env
	rm -rf node_modules

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make all"
	@echo "  Build and start development server"
	@echo ""
	@echo "  $$ make build"
	@echo "  Build NestJS application"
	@echo ""
	@echo "  $$ make lint-fix"
	@echo "  Lint and fix code style"
	@echo ""
	@echo "  $$ make start"
	@echo "  Start development server"
	@echo ""
	@echo "  $$ make stop"
	@echo "  Stop development server"
	@echo ""
	@echo "  $$ make test"
	@echo "  Run unit tests"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Delete installed Node modules"
