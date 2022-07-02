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