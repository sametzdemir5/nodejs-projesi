// Tüm API isteklerinin (method, endpoint, zaman damgası) konsola kayıt altına alınmasını sağlayan temel middleware
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] METHOD: ${req.method} | ENDPOINT: ${req.originalUrl}`);
    next();
};

module.exports = logger;
