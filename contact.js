
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDZjA6tcLOfNEXAsP7OL5lB2is-WuRrpo",
    authDomain: "contact-form-6e1d6.firebaseapp.com",
    databaseURL: "https://contact-form-6e1d6.firebaseio.com",
    projectId: "contact-form-6e1d6",
    storageBucket: "",
    messagingSenderId: "881549552794",
    appId: "1:881549552794:web:8e1e86aad10e66e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  console.log(name);

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}