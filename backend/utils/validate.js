





class Validator{



    static validateFields(fields,body){

        try {
            const missingField = fields.filter(element => !Object.hasOwn(body,element) ||
                body[element] === undefined ||
                body[element] === null ||
                (typeof body[element] === "string" && body[element].trim() === ""));
            if(missingField.length > 0){
                throw new Error(`Faltan los siguientes valores del req.body o el campo esta vacio: ${missingField.join(', ')}`);
                
            }

        } catch (error) {
            throw error;   
        }        
    }


}


export default Validator;