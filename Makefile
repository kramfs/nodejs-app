.PHONY: all build run clean

all: build run

build:
	build/build.sh

run:
	build/run.sh

clean:
	@echo = "Wrapping up, cleaning files..."
	docker-compose down && docker volume rm nodejs-app_mysql-data