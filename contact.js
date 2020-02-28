
  // // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDZjA6tcLOfNEXAsP7OL5lB2is-WuRrpo",
    authDomain: "contact-form-6e1d6.firebaseapp.com",
    databaseURL: "https://contact-form-6e1d6.firebaseio.com",
    projectId: "contact-form-6e1d6",
    storageBucket: "",
    messagingSenderId: "881549552794",
    appId: "1:881549552794:web:8e1e86aad10e66e3"
  };
  // this will Initialize the Firebase
  firebase.initializeApp(firebaseConfig);


// this is Reference messages collection
const messagesRef = firebase.database().ref('messages');

//this will  Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//this will  Submit the form
function submitForm(e){
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const company = getInputVal('company');
  const email = getInputVal('email');
  const phone = getInputVal('phone');
  const message = getInputVal('message');
  console.log(name);
  console.log(company);
  console.log(email);
  console.log(phone);
  console.log(message);


  //this will  Save the message
  saveMessage(name, company, email, phone, message);

  //this will  Show alert message
  document.getElementById('alert').style.display = 'block';

  //this will  Hide alert popup dialog box after 3 seconds
  setTimeout(function(){
    document.getElementById('alert').style.display = 'none';
  },3000);

  //this will  Clear the form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
//==================================================================




















