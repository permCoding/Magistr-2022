## Node.js  

https://nodejs.org/  
https://nodejs.org/dist/v24.14.1/node-v24.14.1-x64.msi  


```bash
npm i express  
npm i ejs  
```

---  

- для добавления нового пользователя через Thunder Client:  

```json
{ 
    "id": 1002,
    "name": "White Rabbit"
}
```

- можно все виды запросов проверять через терминал через команду curl:  

```bash
curl -X GET http://localhost:3000/users 

curl -X POST http://localhost:3000/users/addUser \
  -H "Content-Type: application/json" \
  -d '{ 
    "id": 1002,
    "name": "White Rabbit"
}'

curl -X POST http://localhost:3000/users/addUser \
  -H "Content-Type: application/json" \
  -d '{ "id": 1002, "name": "White Rabbit" }'

curl -X GET http://localhost:3000/users/2

curl -X PUT http://localhost:3000/users/updateUser/2 \
  -H "Content-Type: application/json" \
  -d '{"id":3,"name":"Millie"}'

curl -X PATCH http://localhost:3000/users/updateUser/2 \
  -H "Content-Type: application/json" \
  -d '{"name":"Millie"}'

curl -X DELETE http://localhost:3000/users/updateUser/2 
*/
```

---  
