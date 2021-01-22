all: clean build

build:
	npm run build

clean:
	rm -rf ./dist/*

gateway:
	docker build -t cozygalvinism/webircgateway:latest -f webircgateway.Dockerfile .