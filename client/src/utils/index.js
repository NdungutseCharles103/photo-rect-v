
let fullName, email, password, username

const getfullname = e => {
    fullName = e.target.value
}
const getuname = e => {
    username = e.target.value
}
const getemail = e => {
    email = e.target.value
}
const getpswd = e => {
    password = e.target.value
}

const onload = e => {
    e.preventDefault()
}
const onsubmit = e => {
    e.preventDefault()
    fetch("https://photocorner33.herokuapp.com/user/registerUser", {
        method: "POST",
        // mode: "no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullName, username, email, password
        })
    }).then(res => res.json())
        .then(data => {
            if (data.message === "User with that username already exists") {
                window.alert("User with that username already exists. If you already have an account then login")
            }
            else if (data.message === "User with that email already exists") {
                window.alert("User with that email already exists. If you already have an account then login")
            }
            else if (data.message === "Account created") {
                window.location.replace('/login')
            }
            else {
                window.alert("Error in creating new account for you please")
            }
        })
}
const Utils = {
    getemail,
    getfullname,
    getuname,
    getpswd,
    onload,
    onsubmit
}
export default Utils
//apropose, wget file link, man