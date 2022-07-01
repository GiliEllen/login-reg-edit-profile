import { Error } from "mongoose";

async function handleRegister(ev){
  console.log("handleRegister")
  ev.preventDefault();
  let email = ev.target.email.value
  let password = ev.target.password.value
  console.log(email,password)
  try{
      //@ts-ignore
      const {data} = await axios.post("/users/user-register",{email,password}) 
      const {register, error} = data
      if (register){
       alert("welcome, you are registered")
        const ifFirstLogin:boolean = true
      }
      if (error) {
          throw new Error("not registered")
      }   
  }catch(error){
      console.error(error)
  }    
}

async function handleLogin(ev){
  console.log("handleLogin")
  ev.preventDefault();
  let email = ev.target.email.value
  let password = ev.target.password.value
  console.log(email,password)
  try {
      //@ts-ignore
      const {data} = await axios.post("/users/user-login",{email,password})
      console.log(data)
      const {user, error} = data
      if (error){
          throw new Error("user not found please register first")
      }

      console.log(user)
      const userID = user._id
      console.log(`userID after retrieving from user client ${userID}`)

      window.location.href= `./home.html?userID=${userID}`
 
  } catch (error) {
     console.error(error) 
  }
}

function getProfile(ev){
  console.log("getProfile")
  try {
      const queryString = window.location.search
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      const userID = urlParams.get("userID");
      console.log(userID);
      const welcome = document.querySelector('#welcome')
      welcome.innerHTML = `<h1>welcome ${userID}</h1>`
  } catch (error) {
      console.log(error);
  }
}
