const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Recipe App Server is Running')
})

// main().then(() => console.log('mongodb connected succeffuly!')).catch(err => console.log(err));

// routes
const ItemRoutes = require('./src/routes/itemRoute');
const CategoryRoutes = require('./src/routes/categoryRoute');

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

