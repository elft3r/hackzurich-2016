# HackZurich 2016

# cheat sheet
## S3
We can use S3 to upload the jars, to run the spark jobs
* aws s3 cp ***jar file*** s3://team42jars --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers

## SPARK
* dcos spark run --submit-args="--supervise --class ***class*** https://s3-us-west-2.amazonaws.com/team42jars/***JARS***"

## Test for incoming data
1. ssh-into-dcos-master.sh
2. docker run -it mesosphere/kafka-client
3. ./kafka-console-consumer.sh --zookeeper master.mesos:2181/dcos-service-kafka --topic sensor-reading

## Send data to the AKKA
* curl --data '"{"z" : -0.1, "x" : -0.2, "y" : 0.1, "date" : "2016-09-03T08:40:17.552+02:00", "type" : "Gyro"}"' --request POST --basic --user hackzurich http://ec2-52-36-234-204.us-west-2.compute.amazonaws.com:8083/sensorReading/curl
