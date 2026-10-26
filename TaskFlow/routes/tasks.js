const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// CRUD İşlemleri için Route Tanımlamaları
router.post('/', taskController.createTask);       // Yeni görev oluşturma
router.get('/', taskController.getTasks);          // Tüm görevleri listeleme
router.get('/:id', taskController.getTaskById);    // Belirli bir görevi görüntüleme
router.put('/:id', taskController.updateTask);     // Görev bilgilerini güncelleme
router.delete('/:id', taskController.deleteTask);  // Görev silme

module.exports = router;
