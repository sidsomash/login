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

        if (username === null || password === null) {
            getInfo();
            return;
        }

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
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        if (username === null || password === null) {
            // Clear the call stack and call createAccount again
            setTimeout(createAccount, 0);
            return;
        }
        
        // Check if username already exists
        for (var i = 0; i < database.length; i++) {
            if (username === database[i].username) {
                console.log("Username already exists!");
                // Clear the call stack and call createAccount again
                setTimeout(createAccount, 0);
                return;
            }
        }
    
        // check password conditions
        // password needs to be at least 6 characters long
        if (password.length < 7) {
            console.log("Password is too short!");
            // Clear the call stack and call createAccount again
            setTimeout(createAccount, 0);
            return;   
        }
    
        // Add new user to database
        database.push({ username: username, password: password });
        console.log("Account created successfully!");
        window.location.href = 'login_page.htm';
    }
    
