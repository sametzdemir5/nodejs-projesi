# TASKFLOW - Görev ve Proje Yönetim Sistemi API

## Proje Tanıtımı (Amaç ve Senaryo)
Bu proje, Node.js ile Backend Programlama eğitimi kapsamında geliştirilmiş bir REST API projesidir. Bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip etmesini sağlayan "Görev ve Proje Yönetim Sistemi" altyapısını sunar. Sistem tamamen REST API mantığında çalışmaktadır ve görev oluşturma, atama, durum takibi ile öncelik yönetimi işlemlerini destekler.

## Proje Özellikleri 
Bu projede sadece eğitimin 5 günlük zorunlu kapsamındaki özellikler yer almaktadır:
- Node.js ve Express.js ile backend altyapısı.
- JSON dosyası (`data/tasks.json`) üzerinde veri yönetimi.
- Temel CRUD işlemleri (Görev Ekleme, Listeleme, Detay, Güncelleme, Silme).
- Sadece `Logger` içeren temel Middleware yapısı (Bütün istekleri konsola yazar).



## Kurulum Notu

### Gereksinimler
- Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olmalıdır.

### Kurulum Adımları
1. Bu proje klasörünü bilgisayarınıza indirin veya zip'ten çıkartın.
2. Terminal (veya Komut İstemcisi) açarak proje klasörünün ana dizinine gidin.
3. Gerekli paketleri kurmak için aşağıdaki komutu çalıştırın:
   ```bash
   npm install
   ```
4. Sunucuyu başlatmak için aşağıdaki komutu çalıştırın:
   ```bash
   npm start
   ```
5. Konsolda `Sunucu http://localhost:3000 adresinde çalışıyor...` mesajını göreceksiniz.

### Test Süreci (Postman)
Sunucu çalıştıktan sonra Postman uygulamasını açarak aşağıdaki uç noktaları (endpoint'leri) test edebilirsiniz:
- **POST** `http://localhost:3000/api/tasks` (Yeni Görev Ekleme - Body kısmına JSON formatında veri girin)
- **GET** `http://localhost:3000/api/tasks` (Tüm Görevleri Listeleme)
- **GET** `http://localhost:3000/api/tasks/:id` (Belirli Bir Görevi Getirme)
- **PUT** `http://localhost:3000/api/tasks/:id` (Görev Güncelleme)
- **DELETE** `http://localhost:3000/api/tasks/:id` (Görev Silme)
