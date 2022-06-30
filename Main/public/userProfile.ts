function getUserIdParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}

async function handleGetUser() {
    try {
        const userId: string = getUserIdParams();
        //@ts-ignore
        const { data } = await axios.get(`/user/get-user?userId=${userId}`);
        if (!data) throw new Error ("Couldn't recieve data from axios GET URL: *** /user/get-user ***");
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}