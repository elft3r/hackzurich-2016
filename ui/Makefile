all: build

build:
	docker build --rm -t monitor .

run: build
	docker run -p 8080:8080 -v $(PWD)/config:/go/config -v $(PWD)/client:/go/client monitor

node:
		docker run -it -v $(PWD):/usr/src node /bin/bash -c "cd /usr/src; npm run build;"
