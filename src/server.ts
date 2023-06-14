import express, {Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.set('view engine', mustache());
server.set('views', express.static(path.join(__dirname, 'dist')));
server.engine('mustache', mustache());

server.use(express.urlencoded({extended:true}));

server.use('/', (res: Response) => {
    res.status(404).send('Página não encontrada!');
})

server.listen(process.env.PORT);