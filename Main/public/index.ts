async function handleRegister(ev){
  console.log("handleRegister")
  ev.preventDefault();
  let email = ev.target.email.value
  let password = ev.target.password.value
  let ifFirstLogin=true
  console.log(email,password)
  try{
      //@ts-ignore
      const {data} = await axios.post("/users/user-register",{email,password}) 
      const {register, error} = data
      if (register){
       alert("welcome, you are registered")
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
      if (user.ifFirstLogin){
          window.location.href= `./home.html?userID=${userID}`
      }else{
          window.location.href= `./home.html?userID=${userID}`
      }
   } catch (error) {
     console.error(error) 
  }
}

