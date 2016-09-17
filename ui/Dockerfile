FROM golang:alpine

MAINTAINER Jochen Zehnder <Jochen.Zehnder@gmail.com>

ADD src /go/src/github.com/elft3r/hack/zurich

RUN cd /go/src \
	&& go install github.com/elft3r/hack/zurich/

ENTRYPOINT ["bin/zurich"]
