const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/tasks.json');

// Yardımcı Fonksiyonlar (JSON okuma/yazma)
const readData = () => {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data || '[]');
    } catch (error) {
        return [];
    }
};

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
};

// 1. Görev Ekleme
exports.createTask = (req, res) => {
    const tasks = readData();
    const newTask = {
        id: Date.now().toString(),
        title: req.body.title || 'İsimsiz Görev',
        description: req.body.description || '',
        assignee: req.body.assignee || 'Atanmadı',
        status: req.body.status || 'beklemede',
        priority: req.body.priority || 'orta',
        createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    writeData(tasks);
    res.status(201).json(newTask);
};

// 2. Görev Listeleme
exports.getTasks = (req, res) => {
    const tasks = readData();
    res.status(200).json(tasks);
};

// 3. Görev Detayı
exports.getTaskById = (req, res) => {
    const tasks = readData();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    res.status(200).json(task);
};

// 4. Görev Güncelleme
exports.updateTask = (req, res) => {
    const tasks = readData();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    tasks[index] = { ...tasks[index], ...req.body };
    writeData(tasks);
    res.status(200).json(tasks[index]);
};

// 5. Görev Silme
exports.deleteTask = (req, res) => {
    let tasks = readData();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    tasks.splice(index, 1);
    writeData(tasks);
    res.status(200).json({ message: 'Görev başarıyla silindi' });
};
