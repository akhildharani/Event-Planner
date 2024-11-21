// server.js

const express = require('express');
const axios = require('axios');
const app = express();
const {MongoClient}=require('mongodb')
const cors =require('cors');

// MongoDB connection setup
const mongoClient = new MongoClient("mongodb+srv://akhildharani7:dharani123@project0.erhiq6v.mongodb.net/");
app.use(cors());
app.use(express.json());
 // Express route to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    // Connect to MongoDB
    const client = await mongoClient.connect();
    const collection = client.db('Project0').collection('EventPlanner'); // Replace with your collection name

    // Fetch data from MongoDB
    const data = await collection.find({}).toArray()

    // Close MongoDB connection
    res.json(data);
  
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 

app.post('/api/interested', async (req, res) => {
  try {
    // Assuming you are using a database like MongoDB or Firebase Firestore
    // You can store the user's details in your database here

    // Extract the user's username, mobile number, and orgname from the request body
    const { username, mobileno, orgname } = req.body;

    // Connect to MongoDB
    const client = await mongoClient.connect();
    const collection = client.db('event').collection('venuedetails');

    // Find the organizer based on the orgname
    const organizer = await collection.findOne({ org_name: orgname });

    if (organizer) {
      // Add the interested user's details to the organizer's interestedUsers array
      organizer.interestedUsers.push({ username, mobileno });
      // Update the organizer document in the database
      await collection.updateOne({ org_name: orgname }, { $set: organizer });
      // Send a response back to the client
      res.json({ message: 'User details saved successfully' });
    } else {
      res.status(404).json({ message: 'Organizer not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});