all: clean build

build:
	npm run build --production

clean:
	rm -rf ./dist/*