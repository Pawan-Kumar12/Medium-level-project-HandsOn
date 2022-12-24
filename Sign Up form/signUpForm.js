  //use event listner rather than onclick function
  document.getElementById ("submit").addEventListener ("click", ()=>
  {                                       
   var email = document.getElementById('email').value;
   var phn = document.getElementById('phn').value;
   var password = document.getElementById('pass').value;
   var cpassword = document.getElementById('cpass').value;
   console.log("fields fetched from user" ,email, phn, password, cpassword)
 
 //calling functions to validate each field
    validateEmail(email);
    validatephn(phn);          
   validatePassword(password); 
   validateCpassword(password, cpassword);
   event.preventDefault();
 
 });
 
  const validatephn = ((phn)=>{
     console.log(phn.length);
     if (phn.length === 10){
         document.getElementById('phn').classList = "validate" // in case correct input is inputted
         document.getElementById('phn').classList.replace("failed", "validate")  //submit clicked after correcting error
         document.getElementById('phn_error').innerText = " "
     }
     else{
         document.getElementById('phn').classList="failed"  //in case incorrect validation
        document.getElementById('phn_error').innerText = 'Phone Number is not valid.' //show error msg
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
         document.getElementById('email_error').innerText = 'Invalid Email'
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
        document.getElementById('Password_error').innerText = 'Password must be a minimum of 6 characters including number, Upper, Lower And one special character'
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