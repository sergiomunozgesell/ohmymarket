import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class DB {


    static async connectDB(){

        try {

            const connection = await mongoose.connect(process.env.URI);
            if(!connection){
                throw new Error('Error con establecer conexión a la base de datos...');
            }

            
            
            return connection;
            
            
        } catch (error) {
            throw error;
        }


    }


}


export default DB ;