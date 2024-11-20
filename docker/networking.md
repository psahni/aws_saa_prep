
```
docker network connect my-app-network postgres12
```

```Dockerfile
docker run --name simplebank 
--network my-app-network -p 8080:8080
-e MODE=release 
-e DB_SOURCE="postgresql://root:secret@postgres12:5432/simple_bank?sslmode=disable" 
simplebank:latest
```



```
 docker network inspect my-app-network
```


https://www.udemy.com/course/docker-from-zero-to-hero/learn/lecture/15482080#overview