.PHONY: all clean help start

all: start

node_modules:
	npm install

start: node_modules
	npm run start:dev

clean:
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
