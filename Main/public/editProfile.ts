function getUserIdParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}

function handleUserProfile() {
    try {
        const userId = getUserIdParams();
        window.location.href = `./userProfile.html?userId=${userId}`;
    } catch (error) {
        console.error(error);
    }
}
console.log(`connected`)

async function handleEditUser(event) {
    event.preventDefault()
    try {
        let { email, username, job, address,profilePic} = event.target.elements;
    email = email.value;
    username = username.value;
    job = job.value;
    address = address.value;
    profilePic = profilePic.value;

    const { data } = await await axios.post("/users/edit-user", {
        email,
        username,
        job,
        address,
        profilePic,
      });
    } catch (error) {
        
    }
}