
 в linux можно просто запускать так:  
 time node app.js  

```js

const startTime = performance.now();

test()

const endTime = performance.now();
const duration = endTime - startTime;
console.log(`Время выполнения: ${duration} миллисекунд`);

```

```js
console.time('letTest');
for (let j = 0; j < 10000; j++) { 
    let variableVar = i;
}
console.timeEnd('letTest');
```

