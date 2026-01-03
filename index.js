const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

//mpl704mv
//TzuxpOjQGMTCS8QI
//hello

app.use(express.json());
app.use(cors());

async function main() {
    await mongoose.connect(process.env.RECIPES_API_KEY);

    app.get('/', (req, res) => {
        res.send('Veggify Recipe App Server is Running')
    })
}

main().then(() => console.log('mongodb connected succeffuly!')).catch(err => console.log(err));

// routes
const ItemRoutes = require('./src/routes/itemRoute');
const CategoryRoutes = require('./src/routes/categoryRoute');

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

export default app;