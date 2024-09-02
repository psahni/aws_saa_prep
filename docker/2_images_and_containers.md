* FROM - image name

```dockerfile
docker build -t image_name -f dockerfile2 .
```

* Start Nginx image

```dockerfile
  docker run -d -p 9090:80 --name nginx_container nginx
```


### COPY instruction

* Copy the files from local to directory in image

### ADD

* Add allows you to download the files

```dockerfile
  ADD https://github.com/full_url.zip /var/www/html/code.zip
  RUN cd /var/www/html/ && unzip code.zip && mv /var/www/html/your_dir/* /var/www/html/
```

### ENV

```
ENV YOUR_ENV this_is_the_value
```
use it like $YOUR_ENV

### WORKDIR
Where are you running your commands?

so instead of changing directory, you can declare WORKDIR

`WORKDIR /var/www/html`


### LABEL
```
LABEL maintainer=ps
LABEL vendor=company
```
Label is basically some metadata that you want to add to your images. To organize



### Interactive input

`docker exec -it container_name bash`

If you have defined the WORKDIR, then you will directly land into directory

### Delete file from docker image

* You need to create a user
```
RUN useradd application && chown application:application /var/www/html -R
USER application # Switch User

RUN rm -rf code.zip
```

Switch back to root user, when you need to start or pass a CMD

### Check logs of docker container

```
docker logs container_name
```

### Using ARGS

`ARG user=application`

```
USER $user
chown $user:$user /var/www/html -R
```

you have to pass `build-args user=ps` while building image

```dockerfile
docker build -t image_tag:v1 -f Dockerfile --build-arg user=ps .
```

### CMD

* It allows container to be alive
* Process should be running in the foreground mode
* Don't start the process the in background mode

`docker ps --no-trunc` To see the exited process

CMD can be easily `overridden` by docker run command arguments.
ENTRYPOINT is not overridden; instead, docker run arguments are appended to it.
When both are used, CMD provides default arguments to ENTRYPOINT.



```dockerfile
FROM ubuntu
CMD ["echo", "Hello World"]
```

Can be overridden: docker run image_name echo "Something else"


```dockerfile
FROM ubuntu
ENTRYPOINT ["echo", "Hello World"]
```

`docker run image_name "How are you?"` will output "Hello World How are you?"`

```dockerfile
FROM ubuntu
ENTRYPOINT ["echo", "Hello"]
CMD ["World"]
```


`docker run image_name Universe` will output "Hello Universe"`

### Check the size of files

`$ du -shc *`

### Context

The files you copy should be in the same context as dockerfile

Instead of . you can specify the directory, which contains the dockerfile as well other context files

### Best Practices

* One service per container
* Build context should be small
* Be mindful, what you install
* Less layers

Use RUN like this to have save layers, multiple RUN statements will have multiple layers

RUN \
  echo "1" >> /file_path && \
  echo "2" >> /file_path && \
  echo "3" >> /file_path &&

### Dangling images

* When you don't specify any tag in docker build -t command, then it will be by default :latest
* When you create next image with same name, then prev image will be dangling (<none>)
* So, it's good to give version
* Remove dangling images
  `$ docker rmi $(docker images -f dangling=true -q)`

*  docker rmi <image_id>

### Multistage Build

* We can reduce the size of the image
* If you specify more than FROM instructions, then the last one is going to be final
* You can start from some heavy image, install some packages to build and compile
* Then you can you a ligheter image, and copy the output from the previous state to new stage

Example:-

```dockerfile
FROM maven:3.6-alpine as builder
COPY app-maven /app
WORKDIR /app
RUN mvn package

FROM openjdk:8-alpine
COPY --from=builder  /app/target/my-app-1.0-SNAPSHOT.jar /app.jar
CMD java -jar /app.jar
```

* There is maven sample application on github
* pom.xml - depedencies to build the app
* 