import { cookieOptions, cookieUserName, session, tokenOptions} from "../../config/const.config.js";
import UserService from "../../services/user/user.service.js";
import UserValidator from "../../utils/user/user.validator.js";
import Validator from "../../utils/validate.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

class UserControll {


    static async getUsers(req,res){


        try {
            
            const users = await UserService.getUsers();

            res.status(200).send({message:`Usuarios encontrados: ${users}`});


        } catch (error) {
            
            res.status(400).send({message:error.message});
        }


    }


    static async register(req,res){
        
        try {
            
            const {username,password, email} = req.body;

            Validator.validateFields(["username","password","email"], req.body);
            await UserValidator.dataExist({username});
            await UserValidator.dataExist({email});


            const register = await UserService.createUser({username,password,email});
            if(!register){
                throw new Error("Error con la creación del usuario...");
                
            }

            res.status(200).send({message:"Usuario creado con éxito",user:register});

        } catch (error) {
            res.status(400).send({message:error.message});
        }
    } 


    static async login(req,res){

        try {

            const {username,password} = req.body;
            Validator.validateFields(session,req.body);
            const userlog = await UserService.logUser(username,password);

            if(!userlog){
                throw new Error("Error con el ingreso de sesión del usuario");
                
            }

            const token =  jwt.sign(
                {id:userlog._id,username:userlog.username},
                process.env.SECRET_KEY,
                tokenOptions
            )

            res.cookie(cookieUserName, token, cookieOptions)
            
            res.status(200).send({message:`Usuario intentando logeo:${req.body["username"]} campos a validar: ${session[0]}`});

        } catch (error) {
            res.status(400).send({message:error.message})
        }

    }



}


export default UserControll;