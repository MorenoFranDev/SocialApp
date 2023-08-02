import Person from "../models/person.models"

const autenticate = async (authorization)=>{
    
    if (authorization == undefined) return false
    let person = await Person.findOne({where:{id:authorization}})
    let resp = (person == null) ?  false :  true
    return resp 
}

 
export default autenticate