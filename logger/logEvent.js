const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;
const { format } = require('date-fns');
const { v4:uuid } = require('uuid');

const logEvent = async (msg) => {
    const date = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const logItem = `${date}\t${uuid()}\t${msg}\n`;

    try{
        if(!fs.existsSync(path.join(__dirname, 'log'))) {
            await fsPromises.mkdir(path.join(__dirname, 'log'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'log', 'logRecord.txt'), logItem);
    } catch(err) {
        console.error(err);
    }
    
}

module.exports = logEvent;



