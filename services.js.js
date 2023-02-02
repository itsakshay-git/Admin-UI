let URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
let userData1;
let oldUserData = [];

//**********fetch the api send request to backend and get response from backend*********//
(async () => {
    try {
        let user = await fetch(URL)
        let res = await user.json()
        console.log(res)
        userData1 = res
        addUserDatatoDOM(res)
        pagination()
    } catch (error) {
        console.log(error);
    }
})();