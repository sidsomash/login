var database = [
    {
        username: "sidsomash",
        password: "newsite123"
    },
    {
        username: "admin",
        password: "newadmin123"
    }
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            console.log("Login successful!");
            window.location.href = 'https://www.linkedin.com'; // Redirect to LinkedIn
            return; // Exit the function once login is successful
        } else {
            console.log("Login failed!");
            if (username !== database[i].username && password !== database[i].password) {
                console.log("Incorrect username and password!");
            } else if (username !== database[i].username) {
                console.log("Incorrect username!");
            } else if (password !== database[i].password) {
                console.log("Incorrect password!");
            }
        }
    }
}

function createAccount() {
    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;

    // Check if username already exists
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username) {
            console.log("Username already exists!");
            return;
        }
    }

    // Add new user to database
    database.push({ username: username, password: password });
    console.log("Account created successfully!");
}
