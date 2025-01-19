const mongoose = require("mongoose");

// Replace <password> with the actual password and ensure the URL is correct
const mongoURL = 'mongodb+srv://shwethaka:admin@cluster0.b0gua4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    tls: true // Ensure TLS/SSL is enabled
});

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('MongoDB connection failed:', err);
});

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

module.exports = mongoose;