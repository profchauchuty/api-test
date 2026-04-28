import express from 'express'
const app = express()
const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]
  res.json(usuarios)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})