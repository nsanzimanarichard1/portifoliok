// const form = document.getElementById("form")
// const username= document.getElementById("username")
// const email= document.getElementById("email")
// const password = document.getElementById("password")
// const password2 = document.getElementById("password2")

//  //show error function
//  function showError(input, message){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// //show succes function
// function showSuccess(input){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// //validating email using regx
// // function isValidEmail(email){
// //     // Regular expression to validate email format
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
// //     // Check if the email format is valid
// //     if (!emailRegex.test(email)) {
// //         return false;
// //     }

// //     // Check if the domain is "gmail.com"
// //     const domain = email.split('@')[1];
// //     if (domain.toLowerCase() !== 'gmail.com') {
// //         return false;
// //     }

// //     return true;
// // }

// //validator function
// function validateInput(inputArr){
//     inputArr.forEach(input=> {
//         if (input.value.trim()==='') {
//             showError(input,`${getFieldName(input)} is required`)
            
//         }
//         else{
//             showSuccess(input)
//         }
        
//     });

// }

// //function get field name
// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
// }

// //check input length
// function checkLength(input, min, max){
//     if (input.value.length < min) {
//         showError(input,`${getFieldName(input)} must be atleast 3 characters and above`)
        
//     }
//     else if (input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be less than ${max} character`)
        
//     }
//     else{
//         showSuccess(input)
//     }
// }
// //check email fuction
// function checkEmail(input) {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (emailRegex.test(input.value.trim())) {
//         showSuccess(input);
        
//     }
//     else{
//         showError(input, 'Email is not valid')
//     }
    
// }
// //check if password matches
// function checkPasswordsMatch(input1, input2) {
//     if (input1.value !== input2.value) {
//         showError(input2,'password does not match')
//     }
    
// }


// form.addEventListener('submit', function(e){
//     e.preventDefault();

      
// //     if (username.value === '') {
// //         showError(username, 'pls username is required');
        
// //     }
// //     else{
// //         showSuccess(username)
// //     }

// //     // validation of email
// //    // validation of email
// //     if (email.value === '') {
// //         showError(email, 'pls Email is required');
// //     } else if (!isValidEmail(email.value)) {
// //         showError(email, 'pls provide a valid Gmail address');
// //     } else {
// //         showSuccess(email);
// //     }


// //     //validating password
// //     if (password.value === '') {
// //         showError(password, 'pls password is required');
        
// //     }
// //     else if (password.value.length <8) {
// //         showError(password, 'password must be atleast 8 character')
        
// //     }
// //     else{
// //         showSuccess(password)
// //     }
// //     // password confirmation
// //     if (password2.value === '') {
// //         showError(password2, 'pls password2 is required');
        
// //     }
// //     else if (password2.value !== password.value) {
// //         showError(password2,'password2 must be same as password1');
        
// //     }
// //     else{
// //         showSuccess(password2)
// //     }

// // define single fuction to implement those activities
// validateInput([username, email,password,password2]);
// checkLength(username, 3, 15)
// checkLength(password, 6, 25)
// checkEmail(email )
// checkPasswordsMatch(password,password2)

// });
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
        saveUserData(username.value, email.value, password.value);
        window.location.href = "signin.html";
    }
});

function validateForm() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        showError(username, "Username is required");
        return false;
    } else {
        showSuccess(username);
    }

    if (emailValue === "") {
        showError(email, "Email is required");
        return false;
    } else if (!isValidEmail(emailValue)) {
        showError(email, "Email is not valid");
        return false;
    } else {
        showSuccess(email);
    }

    if (passwordValue === "") {
        showError(password, "Password is required");
        return false;
    } else if (passwordValue.length < 6) {
        showError(password, "Password must be at least 6 characters");
        return false;
    } else {
        showSuccess(password);
    }

    if (password2Value === "") {
        showError(password2, "Please confirm your password");
        return false;
    } else if (passwordValue !== password2Value) {
        showError(password2, "Passwords do not match");
        return false;
    } else {
        showSuccess(password2);
    }

    return true;
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveUserData(username, email, password) {
    const userData = {
        username: username,
        email: email,
        password: password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
}
