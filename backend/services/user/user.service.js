import User from "../../schema/user/user.schema.js";



class UserService {


    static async createUser(data) {

        try {
            const user = await User.create(data);

            if (!user) {
                throw new Error("Error con la creación del registro.");

            }

            return user;

        } catch (error) {

            throw error;


        }

    }

    static async getUsers() {
        try {

            const users = await User.find({},'username');

            if (!users) {
                throw new Error("Error con la obtención de los registros");
            }

            return users
        } catch (error) {

            throw error;


        }
    }


    static async logUser(username,password){

        try {
            const userlog = await User.findOne({username,password});

            return userlog;
        } catch (error) {
            
            throw error;
        }


    }

}

export default UserService;