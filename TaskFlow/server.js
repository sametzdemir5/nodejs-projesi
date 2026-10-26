const express = require('express');
const taskRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

// JSON formatındaki istekleri işlemek için (Veri yönetimi ve JSON işlemleri)
app.use(express.json());

// Zorunlu Aşama 3: Temel Middleware - Logger
app.use(logger);

// Routing yapısı
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
