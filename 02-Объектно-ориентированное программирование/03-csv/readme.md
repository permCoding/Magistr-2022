# lodash

Обрабатываем табличную информацию из файлов csv  

**SELECT**  
**INSERT**  
**UPDATE**  
**DELETE**  

[Используем зависимости](./package.json)  

Документация:  
[lodash](https://lodash.com/docs/4.17.15)  
[fast-csv](https://c2fo.github.io/fast-csv/docs/introduction/example)  

Методы:  
fs.readFileSync()  
csvjson.toObject()  
_(array).maxBy()  
_.clone()  
_.cloneDeep()  
_.findIndex()  
_.pullAt()  
_.remove()  

```js
// select - как:
    return _(array)
        .filter()
        .map()
        .orderBy()
        .value();

// insert - как:
    _(array).maxBy() // по id
    array.push(obj) // с этим id

// update - как:
    _.findIndex(array) // найти
    array[index] // поменять

// delete one
    index = _.findIndex(array)
    obj = _.pullAt(arr, index)
// delete all
    new_arr = _.remove(arr)

```

