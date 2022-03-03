const loginForm = document.getElementById('loginform');
loginForm.addEventListener('click', (e) => {
 e.preventDefault();
 // get user info
 var email =  document.getElementById('email').value;
 var password= document.getElementById('password').value;
 /*if (validate_email(email) == false || validate_password(password) == false) {
  alert('Email or Password is Outta Line!!')
  return
  }
  */
 // log the user in
 auth.signInWithEmailAndPassword(email, password).then((cred) => {
   console.log(auth);
   //loginForm.reset();
   window.location.assign('Dashboard/dash.html');
}).catch(error => {
 alert(error.message);
})
});

/*const logInForm = document.querySelector('#loginform'); // creating a variable to access the log in form from login.html

// login authentication
/*logInForm.addEventListener('click', (e)=>{
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
    console.log("Logged In")
    location.href='dashboard.html'
  });

})

/*
window.onload=function(){

const logInForm = document.querySelector('btnn');
logInForm.addEventListener('click', (e) => {
 e.preventDefault();
 // get user info
 var email =  document.getElementById('email').value;
 var password= document.getElementById('password').value;
 if (validate_email(email) == false || validate_password(password) == false) {
  alert('Email or Password is Outta Line!!')
  return
  }
 // log the user in
 auth.signInWithEmailAndPassword(email, password).then((cred) => {
   console.log(auth);
   logInForm.reset();
   window.location.replace('/Dashboard/dash.htm');
}).catch(error => {
 alert(error.message);
})
});
}
*/