require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const staticProjects = [
    {
        title: 'Real-Time Chat Application',
        description: 'A real-time messaging platform for multiple concurrent users with sub-100ms message delivery, JWT-secured routes, and optimized MongoDB schemas.',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
        category: 'fullstack',
        emoji: '💬',
        bg: 'linear-gradient(135deg,#0d2137,#1a3a5c)',
        githubUrl: 'https://github.com/ItsGBishal',
        liveUrl: 'https://render.com'
    },
    {
        title: 'Note Taking Application',
        description: 'A full-stack CRUD note management system with a responsive React frontend and Node.js/Express backend with protected routes for authenticated users.',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        category: 'fullstack',
        emoji: '📝',
        bg: 'linear-gradient(135deg,#0d2137,#1a2d1a)',
        githubUrl: 'https://github.com/ItsGBishal',
        liveUrl: 'https://vercel.com'
    },
    {
        title: 'E-Commerce UI (Amazon Clone)',
        description: 'A full e-commerce product listing and cart interface using vanilla JavaScript DOM manipulation — no frameworks. Includes dynamic cart state and real-time pricing.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'frontend',
        emoji: '🛒',
        bg: 'linear-gradient(135deg,#2d1a0d,#3d2a0d)',
        githubUrl: 'https://github.com/ItsGBishal',
        liveUrl: null
    }
];

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('MongoDB connected. Seeding database...');
    await Project.deleteMany({});
    const projects = await Project.insertMany(staticProjects);
    console.log(`${projects.length} projects seeded!`);
    mongoose.connection.close();
})
.catch(err => console.error(err));
