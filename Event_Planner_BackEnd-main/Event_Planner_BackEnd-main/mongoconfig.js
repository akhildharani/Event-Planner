const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'eventplanner';

const client = new MongoClient(url);

client.connect(function (err) {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }
  console.log('Connected successfully to the database');
});
