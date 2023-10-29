const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: 'postgresql://postgres:root@localhost:5432/blogplatform',
});

pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database successfully!');
    })
    .catch((error) => {
        console.error('Error connecting to PostgreSQL database:', error);
    });

app.get('/blogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs');
    const blogs = result.rows;
    // pool.release();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/blog', (req, res) => {
    const { title, content } = req.body;

    pool.query(
        "INSERT INTO blogs (title, content) VALUES ($1, $2) RETURNING *",
        [title, content],
        (error, results) => {
            if (error) {
                console.error("Error inserting data:", error);
                res.status(500).json({ error: "Internal Server Error" });
            } else {
                const newUser = results.rows[0];
                res.status(201).json(newUser);
            }
        }
    );
});

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html');
})


app.post('/blogs/:blogId/comments', (req, res) => {
    const { blogId } = req.params; 
    const { content } = req.body; 

    const newComment = {
        blog_id: blogId,
        content: content,
    };

    pool.query('INSERT INTO comments (blog_id, content) VALUES ($1, $2) RETURNING *', [newComment.blog_id, newComment.content], (error, results) => {
        if (error) {
            console.error('Error inserting comment:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const insertedComment = results.rows[0];
            res.status(201).json(insertedComment);
        }
    });
});

app.get('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    pool.query('SELECT * FROM comments WHERE blog_id = $1', [blogId], (error, results) => {
        if (error) {
            console.error('Error fetching comments:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const comments = results.rows;
            res.json(comments);
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
