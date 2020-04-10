var randomCharString = "";
var charSet = [
    {
        char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        name: "Special Characters",
        use: false
    },
    {
        char: "0123456789",
        name: "Number Characters",
        use: false
    },
    {
        char: "abcdefghijklmnopqrstuvwxyz",
        name: "Lowercase Letters",
        use: false
    },
    {
        char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        name: "Uppercase Letters",
        use: false
    }
]

var generate = () => {
    var passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
    passwordString = "";


    if (passwordLength > 8 && passwordLength < 129) {
        charSet.forEach(set => {
            const useChar = (prompt(`Do you want to use ${set.name}?`)).toLowerCase();
            if (useChar === "yes" || useChar === "y") {
                set.use = true;
            }
            if (set.use) {
                randomCharString = randomCharString + set.char;
            }
        });
        console.log(JSON.stringify(charSet))
    }
    else {
        alert("Your password does not meet the necessary requirements.");
    }

    if (randomCharString !== "") {
        for (i = 1; i <= passwordLength; i++) {
            passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
        }

        document.getElementById("password").value = passwordString;
    }
    else {
        alert("Your password must be 8-128 characters in length & you must use at least one kind of character. Please select the Generate Password button and try again.");
    }
}