import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pet from './controller/petController.js'

const server = express();

server.use(cors());
server.use(express.json());
server.use(pet);



server.listen(process.env.PORT, () => console.log(`Api conectada na porta ${process.env.PORT}`));