const fs = require('fs');
const csv = require('csvsync'); // npm install csvsync
const router = require('express').Router();

const getModel = () => {
    const opts = {
        skipHeader: false,
        // headerKeys: ['column1', 'column2'],
        returnObject: true,
        delimiter: ',',
        trim: true
    };
    try {
        const csvData = fs.readFileSync(global.filename, 'utf8');
        const jsonArray = csv.parse(csvData, opts);
        return jsonArray;
    } catch (error) {
        return undefined;
    }
}

// тут путь уже относительный - "/getUsers"
router.get('/', (req, res) => {
    let result = getModel();
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;