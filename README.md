### register

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

Endpoint : user/login

```
BODY
    {
        "email": "email",
        "password": "password"
    }
```

### addTodo

Endpoint : todo/

```
BODY
    {
        "title": "title",
        "isDone": false,
        "desc": "Description"
    }
```
