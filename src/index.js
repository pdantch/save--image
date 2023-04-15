const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(cors());

// adiciona users para teste
app.post('/users', async (req, res) => {
  const newUser = await prisma.user.create({
    data: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    },
  });
  res.json(newUser);
});

// retorna users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// remover users
app.delete('/users', async (req, res) => {
  const users = await prisma.user.deleteMany();
  res.json(users);
});

// Configuração do multer para salvar as imagens no diretório "uploads"
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Rota para receber a imagem e salvar no banco de dados
app.post('/users/:id/image', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { buffer } = req.file;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { image: buffer },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar o usuário.');
  }
});

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));