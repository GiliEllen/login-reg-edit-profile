function getProfile() {
    console.log("getProfile");
    try {
        var queryString = window.location.search;
        console.log(queryString);
        var urlParams = new URLSearchParams(queryString);
        var userID = urlParams.get("userID");
        console.log(userID);
        var welcome = document.querySelector('#welcome');
        welcome.innerHTML = "<h1>welcome " + userID + "</h1>";
    }
    catch (error) {
        console.log(error);
    }
}
