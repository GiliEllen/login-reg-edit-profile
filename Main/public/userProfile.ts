function getUserIdByParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}

// async function handleGetUser() {
//     try {
//         const userId = getUserIdParams();
//         //@ts-ignore
//         const { data } = await axios.get(`/user/get-user?userId=${userId}`);
//         if (!data) throw new Error ("Couldn't recieve data from axios GET URL: *** /user/get-user ***");
//         console.log(data);

//     } catch (error) {
//         console.error(error);
//     }
// }

async function handleGetUser() {
    try {
        
        const userId = getUserIdByParams();
        if (userId.match(/^[0-9a-fA-F]{24}$/)) {
        //@ts-ignore
        const { data } = await axios.post('/user/get-user', { userId });
        if (!data) throw new Error("couldn't recieve data from axios POST URL: *** /user/userId ***");
        const { user , error} = data;
        console.log(data);
        if(!error) throw new Error(error);
        console.log(user);}
        else {
            console.log(`userprofile.ts not a valid id`)
        }

    } catch (error) {
        console.error(error);
    }
}


function handleEditProfile(){
    const userId = getUserIdByParams();
    window.location.href = `./editProfile.html?userId=${userId}`;
}