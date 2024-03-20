import express from 'express'
import { connectMongoDB } from './db';

const app = express()
const port = 8080

app.get('/', (req,res) => {
    res.send("Hello World")
})


connectMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
