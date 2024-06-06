const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user'); // Adjust the path according to your project structure

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your_jwt_secret_key'; // Use an environment variable in production

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hotel-admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Hotel schema and model
const hotelSchema = new mongoose.Schema({
    name: String,
    location: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// User login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database by username
        const user = await User.findOne({ username });

        // If user is not found or password does not match, return error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        // Send the token and user data in the response
        res.json({ token, username: user.username, role: user.role });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// User signup
app.post('/signup', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Check if user already exists in the database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: '1h' });

        // Send the token in the response
        res.status(201).json({ token });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to authenticate requests using JWT
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

// Routes

// Get all hotels (protected)
app.get('/hotels', authenticate, async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hotels' });
    }
});

// Add a new hotel (protected, admin only)
app.post('/hotels', authenticate, isAdmin, async (req, res) => {
    const { name, location } = req.body;
    if (name && location) {
        try {
            const newHotel = new Hotel({ name, location });
            await newHotel.save();
            res.status(201).json(newHotel);
        } catch (error) {
            res.status(500).json({ message: 'Error adding hotel' });
        }
    } else {
        res.status(400).json({ message: 'Invalid data' });
    }
});

// Add this route to fetch user profile data
app.get('/profile', authenticate, async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ username: user.username, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile data' });
    }
});

// Remove a hotel (protected, admin only)
app.delete('/hotels/:id', authenticate, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error removing hotel' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
