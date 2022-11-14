### register

Post
Endpoint : user/regiseter

```
BODY
    {
        "name": "name",
        "email": "email",
        "role" : "normal/admin",
        "password": "password"
    }
```

### login

Post
Endpoint : user/login

```
BODY
    {
        "email": "email",
        "password": "password"
    }
```

### getAllUser

Get
Endpoint : user/

### addTodo

Post
Endpoint : todo/

```
BODY
    {
        "title": "title",
        "isDone": false,
        "desc": "Description"
    }
```

### deleteTodo

Delete
Endpoint : todo/:title

### deleteAllTodo

Delete
Endpoing : todo/
