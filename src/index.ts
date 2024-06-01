
import DBconnection from './configs/Database';
import { PORT } from './configs';
import express, { Application, NextFunction, Request, Response } from 'express';
 import farmerRoutes from "./routes/farmer"
 import orderRoutes from "./routes/order"
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";


export const app = express();

DBconnection();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api/V1', farmerRoutes);
app.use('/api/V1', orderRoutes);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req: Request, res: Response) => {
    res.send({ message: "welcome to Agro stuff  " })
});


export const server = app.listen(PORT, () => { 
    console.log(`App is Listening on port ${PORT}`);
});



