function getProfile(){
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
  