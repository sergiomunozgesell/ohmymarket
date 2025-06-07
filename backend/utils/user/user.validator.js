import User from "../../schema/user/user.schema.js";

class UserValidator {


    static async dataExist(data) {
        try {

            const isExist = await User.findOne(data);
            if (isExist) {
                const [key, value] = Object.entries(data)[0];
                throw new Error(`El ${key}: ${value}, ya se encuentra en uso`);
            }


        } catch (error) {
            throw error;
        }
    }




}


export default UserValidator;