const { ParserTiobe } = require("./classParser")
const log = console.log

const parser = new ParserTiobe()
parser
    .arrTiobe
    .sort((a,b) => a.lang>b.lang? +1: -1)
    .slice(0,10)
    .forEach(elm => log(JSON.stringify(elm, ["lang","rat"], 2)))
