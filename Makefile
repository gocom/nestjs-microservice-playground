.PHONY: all clean configure help start

all: start

configure:
ifeq (,$(wildcard ./.env))
    cp .env.template .env
endif

node_modules:
	npm install

start: node_modules configure
	docker-compose up -d
	npm run start:dev

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
	@echo "  $$ make start"
	@echo "  Start development server"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Delete installed Node modules"
