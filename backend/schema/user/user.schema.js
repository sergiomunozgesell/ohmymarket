import mongoose, { mongo } from "mongoose";

class UserSchema {

    constructor(){
        this.schema = this.setSchema();
    }


    setSchema(){
        const schema = new mongoose.Schema({
            username:{
                type:String,
                required:true,
                unique:true,
                trim:true
            },
            password:{
                type:String,
                required:true,
                trim:true,
                minlength:8
            },
            email:{
                type:String,
                required:true,
                unique:true
            },
            firstname:{
                type:String,
                default:""
            },
            secondname:{
                type:String,
                default:""
            }

        })

        return schema;
    }


    getModel(){
        const User = mongoose.model("User",this.schema,"users");
        return User;
    }

}



export default new UserSchema().getModel();

