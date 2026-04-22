import express from 'express'; 
import { readFileSync } from 'fs'; 
import { fileURLToPath } from 'url'; 
import { dirname, join } from 'path'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 
const HOST = '127.0.0.1', PORT = 3000;  // localhost
const log = console.log; 

const app = express(); 

const getStatements = () => { 
	try { 
		const filePath = join(__dirname, 'json', 'statements.json'); 
		const data = readFileSync(filePath, 'utf-8'); 
		if (!data) throw new Error("Файл пуст"); 
		const json = JSON.parse(data); 
		return json.stats 
	} catch (err) { 
		log("Ошибка чтения файла:", err.message); 
		return []; // 
	} 
}; 

// Задание 1 и 3 
app.get('/', (req, res) => { 
	const statements = getStatements(); 
	const randomIndex = Math.floor(Math.random() * statements.length);
	res.send(statements[randomIndex]); 
}); 

// Задание 2: http://localhost:3000/1 
app.get('/:id', (req, res) => { 
	const statements = getStatements(); 
	const id = parseInt(req.params.id); 
	if (!isNaN(id) && statements[id]) { 
		res.send(statements[id]); 
	} else { 
		res.status(404).send('Сообщение не найдено или индекс не указан');
	} 
}); 

app.listen(PORT, HOST, () => log(`сервер: http://${HOST}:${PORT}/`));

/*
два типа модулей:
- js - CommonJS - require/export
- mjs - ECMAScript - import/export

запускать как mjs
node app.mjs

или изменить в package.json на "type": "module"

если использовать подключение через require()
то в package.json на "type": "commonjs"
*/