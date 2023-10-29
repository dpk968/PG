const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recipebook',
  password: 'root',
  port: 5432, 
});


pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database successfully!');
    })
    .catch((error) => {
        console.error('Error connecting to PostgreSQL database', error);
    });
    

    app.get('/',(req,res) =>{
      res.sendFile(__dirname + '/index.html');
  })

app.get('/recipes', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT r.id, r.title, r.ingredients, r.steps, r.image_url, COALESCE(AVG(rt.rating), 0) AS average_rating FROM recipes r LEFT JOIN ratings rt ON r.id = rt.recipe_id GROUP BY r.id ORDER BY average_rating DESC;');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM recipes WHERE id = $1', [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/rating/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM ratings WHERE recipe_id = $1', [id]);
    if (rows.length === 0) {
      res.status(444).json({ error: 'Recipe not found' });
    } else {
      res.json(rows);
    }
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/recipes', async (req, res) => {
  const { title, ingredients, steps, image_url } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO recipes (title, ingredients, steps, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, ingredients, steps, image_url]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/r',async (req,res) => {
  try {
    const { rows } = await pool.query('SELECT r.id, r.title, r.ingredients, r.steps, r.image_url, COALESCE(AVG(rt.rating), 0) AS average_rating FROM recipes r LEFT JOIN ratings rt ON r.id = rt.recipe_id GROUP BY r.id ORDER BY average_rating DESC;');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, ingredients, steps, image_url } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE recipes SET title = $1, ingredients = $2, steps = $3, image_url = $4 WHERE id = $5 RETURNING *',
      [title, ingredients, steps, image_url, id]
    );
    if (rows.length === 0) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/recipes/:id/rate', async (req, res) => {
  const { id } = req.params;
  const { name,rating } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO ratings (recipe_id, user_id, rating) VALUES ($1, $2, $3) RETURNING *',
      [id, name, rating]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error rating recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
