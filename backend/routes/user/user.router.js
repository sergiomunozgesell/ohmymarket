import UserControll from "../../controll/user/user.controll.js";
import express from "express";

class UserRouter{

    constructor(){
        this.router = express.Router();
        this.routes = this.setRoutes()
    }

    setRoutes(){
        this.router.get('/user', (req,res)=>{
            res.status(200).send({message:"Bienvenido a user router"});
        });
        this.router.get('/users', UserControll.getUsers);

        this.router.post('/user/register',UserControll.register);
        this.router.post('/user/login', UserControll.login);
    }


    getRoutes(){
        return this.router;
    }

}

export default new UserRouter().getRoutes();