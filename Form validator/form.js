  //use event listner rather than onclick function
document.getElementById ("submit").addEventListener ("click", ()=>
 {                                       
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;
  var cpassword = document.getElementById('cpass').value;
  console.log("fields fetched from user" ,cpassword)

//calling functions to validate each field
  validateUsername(username);          
  validateEmail(email);
  validatePassword(password); 
  validateCpassword(password, cpassword);
  event.preventDefault();

});

 const validateUsername = ((username)=>{
    console.log(username.length);
    if (username.length > 4){
        document.getElementById('username').classList = "validate" // in case correct input is inputted
        document.getElementById('username').classList.replace("failed", "validate")  //submit clicked after correcting error
        document.getElementById('username_error').innerText = " "
    }
    else{
        document.getElementById('username').classList="failed"  //in case incorrect validation
       document.getElementById('username_error').innerText = 'Username must be 4 character long' //show error msg
    }
    
});

const validateEmail = ((email)=>{
    console.log(email);
    if (email.includes('@')){
        document.getElementById('email').classList = "validate"
        document.getElementById('email').classList.replace("failed", "validate")
        document.getElementById('email_error').innerText = " "
    }
    else{
        document.getElementById('email').classList ="failed"
        document.getElementById('email_error').innerText = 'email is invalid'
    }
    
});

const validatePassword = ((password)=>{
    console.log(password);
    var regularExpression  = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,16}$/;
    if (password.match(regularExpression)){
        document.getElementById('pass').classList = "validate"
        document.getElementById('pass').classList.replace("failed", "validate")
        document.getElementById('Password_error').innerText =" "
    }
    else{
        document.getElementById('pass').classList ="failed"
       document.getElementById('Password_error').innerText = 'password must be a minimum of 6 characters including number, Upper, Lower And one special character'
    }
    
});

const validateCpassword = ((password, cpassword)=>{
    console.log(cpassword);
    if (password === cpassword){
        console.log("fields inside if" ,cpassword)
        document.getElementById('cpass').classList = "validate"
        document.getElementById('cpass').classList.replace("failed", "validate")
        document.getElementById('cpassword_error').innerText = " "
    }
    else{
        console.log("fields inside else" ,cpassword)
        document.getElementById('cpass').classList ="failed"
       document.getElementById('cpassword_error').innerText = 'Password does not match'
    }
    
});
// no need to add clear functionality as input type for clear button is already clear which has functionalitty to clear the form without even writing a function for it.



// function resetData() {                          // it is causing error in console that resetData is not defined
//     document.getElementById('form').reset();
// }

// document.getElementById ("clearForm").addEventListener("click", () => {
//     document.getElementById("myForm").reset();
// });

// document.getElementById ("clearForm").addEventListener("click", resetData)
//  function resetData(){
//     document.getElementById("form").reset();
//  };