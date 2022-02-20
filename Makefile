.PHONY: all build clean configure help lint lint-fix start stop test

all: build

build: node_modules configure
	npm run build

clean:
	rm -rf .env
	rm -rf node_modules

configure:
ifeq (,$(wildcard ./.env))
	cp .env.template .env
endif

lint: node_modules
	npm run lint

lint-fix: node_modules
	npm run lint-fix

node_modules:
	npm install

start: node_modules configure
	docker-compose up -d
	npm run start:dev

stop:
	docker-compose stop

test: node_modules
	npm run test:cov

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make build"
	@echo "  Build NestJS application"
	@echo ""
	@echo "  $$ make configure"
	@echo "  Configure application"
	@echo ""
	@echo "  $$ make lint"
	@echo "  Lint code style"
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
