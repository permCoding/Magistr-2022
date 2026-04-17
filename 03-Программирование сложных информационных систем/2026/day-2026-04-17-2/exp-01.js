const express = require('express');  // npm i express

const app = express();

app.listen(3000);

/*    http://localhost:3000/

http://tasks.1gb.ru:42089/104

https://www.chitai-gorod.ru/catalog/books/dlya-2-klassa-111107

- создаёт и запускает HTTP-сервер 
- включает прослушивание входящих соединений по указанному порту

- app.listen(3000) заменяет примерно это:
const http = require('http');
const server = http.createServer(app);
server.listen(3000);



запустить из терминала   =>   остановка Ctrl+C

такое приложение ничего не показывает, но запущено

если непонятно как запустили из VS Code
и непонятно как остановить
то есть при запуске программы говорит, что процесс уже запущен:
  Error: listen EADDRINUSE: address already in use :::3000
то в Windows можно запустить диспетчер задач Ctrl+Shift+Esc
и там снять задачу Node.js

ИЛИ

из PowerShell терминала запрос - узнать идентификатор процесса (PID):
    netstat -ano | findstr :3000
и принудительно его завершить:
    taskkill /PID 5488 /F
*/