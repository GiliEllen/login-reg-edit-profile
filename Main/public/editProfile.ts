console.log(`connected`)

async function handleGetthisUser() {
    try {
        const userId = getUserIdParams();
        if (userId.match(/^[0-9a-fA-F]{24}$/)) {
            //@ts-ignore
            const { data } = await axios.post('/user/get-user', { userId });
            if (!data) throw new Error("couldn't recieve data from axios POST URL: *** /user/userId ***");
            const { user, error } = data;
            console.log(data);
            if (!error) throw new Error(error);
            console.log(user);
        }
        else {
            console.log(`editprofile.ts not a valid id`)
        }

    } catch (error) {
        console.error(error);
    }
}

async function handleEditUser(event) {
    event.preventDefault()
    try {
        let { email, username, job, address, profilePic } = event.target.elements;
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

function getUserIdParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}