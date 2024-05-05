var database = [
    {
        username: "sidsomash",
        password: "newsite123"
    },
    {
        username: "admin",
        password: "newadmin123"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (var i = 0; i < database.length; i++) {
        if (username[i] == database[i].username && password[i] == database[i].password) {
            console.log("login successful!");
            window.location.href = 'https://www.linkedin.com'
        }
        else {
            console.log("login failed!")
            if (username[i] != database[i].username && password[i] != database[i].password) {
                console.log("incorrect username and password!");
            }
            else if (username[i] != database[i].username) {
                console.log("incorrect username!");
            }
            else if (password[i] != database[i].password) {
                console.log("incorrect password!");
            }
        }
    }
}
