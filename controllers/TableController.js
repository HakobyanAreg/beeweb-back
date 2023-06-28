import TableModel from '../models/Table.js'

export const getTableData = async (req, res) => {
    try {
        const tables = await TableModel.find({})

        const data = []

        tables.map(table => {
            const filteredData = {
                id: table._id,
                name: table.name,
                description: table.description,
                date:  new Date(table.date).toLocaleString(undefined, {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                }),
                status: table.status
            };
            data.push(filteredData)
        })

        return res.send(data)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something was wrong!'
        })
    }
}

export const setTableData = async (req, res) => {
    try {
        const tableDoc = new TableModel({
            name: req.body.name,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status,
        })

        const table = await tableDoc.save()

        const data = {
            id: table._id,
            name: table.name,
            description: table.description,
            date:  new Date(table.date).toLocaleString(undefined, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            status: table.status
        };

        return res.send(data)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something was wrong!'
        })
    }
}

export const setTableSpecificData = async (req, res) => {
    const { body } = req;

    try {

        const filter = { _id: body._id };
        const update = { $set: { [body.updatedKey]: body.updatedValue } };
        await TableModel.updateOne(filter, update);

        return res.send({
            message: 'OK'
        });

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something was wrong!'
        })
    }
}
