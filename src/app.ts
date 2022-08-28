import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import coffeeRoutes from './routes/coffeeRoutes';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/coffee', coffeeRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});


app.listen(3000);