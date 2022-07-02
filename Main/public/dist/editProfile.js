function getUserIdParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var userId = urlParams.get("userId");
    return userId;
}
function handleUserProfile() {
    try {
        var userId = getUserIdParams();
        window.location.href = "./userProfile.html?userId=" + userId;
    }
    catch (error) {
        console.error(error);
    }
}
