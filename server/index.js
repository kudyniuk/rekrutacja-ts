import express, { json } from 'express';

const app = express();
const port = 3000;

app.use(json()); // Middleware to parse JSON bodies

let posts = [
    { id: 1, author: "Jan Kowalski", title: "Sun is sunny and sunny", content: "The sun shines brightly, making the day warm and cheerful.", date: "2024-02-20T10:00:00.000Z" },
    { id: 2, author: "Anna Nowak", title: "The Beauty of the Night Sky", content: "Stars twinkle in the vast night sky, a mesmerizing view for all.", date: "2024-02-18T21:30:00.000Z" },
    { id: 3, author: "Michael Smith", title: "A Walk in the Forest", content: "The fresh scent of pine and the sound of birds create a peaceful atmosphere.", date: "2024-02-15T14:15:00.000Z" },
    { id: 4, author: "Emily Johnson", title: "Ocean Waves and Serenity", content: "Listening to the waves crashing on the shore brings a sense of calm.", date: "2024-02-10T08:45:00.000Z" },
    { id: 5, author: "David Brown", title: "The Joy of Reading", content: "Getting lost in a good book is one of the greatest pleasures in life.", date: "2024-02-05T16:20:00.000Z" }
]; // In-memory storage for posts

// GET all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// POST a new post
app.post('/posts', (req, res) => {
    const { title, content, author = "Unknown", date = new Date().toISOString()  } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    const newPost = { id: posts.length + 1, title, content, author, date };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// DELETE a post by ID
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.json({ message: 'Post deleted' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
