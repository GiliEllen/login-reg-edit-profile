import UserModel, { UserValidation } from "../model/userModel";
export async function register(req, res){
  console.debug("async function register")
    try {
        const {email, password } = req.body;
        console.debug(`email,password ${email} ${password}`)
        const { error } = UserValidation.validate({ email, password });
        if (error) {
            console.debug(error)
            throw error
        }
        //save to DB;
        const ifFirstLogin=true
        const user = new UserModel({email, password,ifFirstLogin });
        await user.save();
        console.debug(user)
        res.send({ register: true });
      } catch (error) {
        res.send({ error: error.message });
      }
}

export async function login(req, res){
    try {
        const {email, password} = req.body;
        console.debug({email,password})
        const{error} = UserValidation.validate({email,password});
        if (error) throw error;
        const user = await UserModel.findOne({email,password })
       
        console.debug(`user:${user}`)
        if (!user) {
          res.send({ login: false });
        } else {
            console.debug("sending to client")  
            res.send({ login: true,user:user});
        }
 
    } catch (error) {
       console.error(error) 
    }

}
