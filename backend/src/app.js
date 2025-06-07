import express from 'express';
import dotenv from "dotenv"
import DB from '../config/db.config.js';
import UserRouter from '../routes/user/user.router.js';
import cookieParser from 'cookie-parser';


class App {
    constructor() {
        this.app = express();
        this.setConfig();
        this.setMiddlewares();
        this.setRoutes();
    }


    async setConfig() {
        dotenv.config();
        await DB.connectDB();
    }

    setMiddlewares() {
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    setRoutes() {
        this.app.use('/api', UserRouter);
        this.app.get('/', (req, res) => {
            res.send('Ruta test!!');
        });

        
        
        
    }

    initApp() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port http://localhost:${process.env.PORT}`);
        })
    }



}


export default App;