function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chaicode", URL: "#"})
        }, 3000);
    })
}

async function getUserdata() {
    try {
        console.log("fetching user data...");
        const userData = await fetchUserData()
        console.log("User data:" , userData);
        
    } catch (error) {
        console.log("error fetching data", error);
        
    }
}

getUserdata();