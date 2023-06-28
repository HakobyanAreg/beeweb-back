import express from 'express';
import mongoose from "mongoose";
import {getTableData, setTableData, setTableSpecificData} from './controllers/TableController.js';

mongoose.connect('mongodb+srv://root:root@cluster0.crz2jsy.mongodb.net/beeweb?retryWrites=true&w=majority').then(() => console.log('DB OK')).catch((e) => console.log(e));

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.header({
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        "Content-Type": "application/json"
    });
    next();
});

app.get('/getTableData', getTableData);
app.post('/setTableData', setTableData);
app.post('/updateTableData', setTableSpecificData);

app.listen(3001, (err) => {

    if(err) {
        console.log(err)
    }

    console.log('server OK')
})
