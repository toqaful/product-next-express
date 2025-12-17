require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ProductController = require('./controllers/ProductController');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/products', ProductController.create);
app.get('/products', ProductController.findAll);
app.get('/products/:id', ProductController.findOne);
app.put('/products/:id', ProductController.update);
app.delete('/products/:id', ProductController.remove);

app.get('/health', (_, res) => {
  res.json({
    status: 'success',
    message: 'API is healthy',
    data: null
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`API running on http://localhost:${PORT}`)
);
