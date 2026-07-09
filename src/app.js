const express= require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running...' });
});
app.use('/api/plant', require('./routes/plant.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
module.exports = app;