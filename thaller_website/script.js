/* simple form evaluation */
let timer = setInterval(checkSignIn, 150);

/* DOM elements */
// Name
let eingabeName = document.getElementById('name');
let falsch_name = document.getElementById('error-name');
let name = true;

// Mail
let eingabeEmail = document.getElementById('email');
let falsch_email = document.getElementById('error-email');
let email = true;

// passwort 1
let eingabePasswort1 = document.getElementById('password');
let falsch_passwort1 = document.getElementById('error-pw1');
let passwort1 = true;

// passwort 2
let eingabePasswort2 = document.getElementById('passwordCheck');
let falsch_passwort2 = document.getElementById('error-pw2');
let passwort2 = true;

// ja oder nein
let agree = document.getElementById('agree-term');
let falsch_submit = document.getElementById('error-term');
let submit = true;

let value1;
let signSubmit;


/* Event listener */
eingabeName.addEventListener('keyup', validateName);
eingabeEmail.addEventListener('keyup', validateEmail);
eingabePasswort1.addEventListener('keyup', validatePW);
eingabePasswort2.addEventListener('keyup', PWchecked);
submit.addEventListener('click', signIn);

/* SignIn Challange */
function checkSignIn() {
    if(name || passwort1 || passwort2 ||email) { //Pruefen wenn es oder ist, kann es nicht stimmen, da alle richtig sein muessen.
        signSubmit = false;
    }

    if(name == false && passwort1 == false && passwort2 == false) {
        signSubmit = true;
        
        clearInterval(timer);
    }
}

/* Function declaration */

// Name Eingabe Pruefen
function validateName() {

    let value = eingabeName.value;
    if (value.length <= 2) {
        falsch_name.style.display = 'block';
        falsch_name.innerHTML = 'Mindestens 3 Zeichen';
        name = true;
    
    }else { //wenn richtig -> gib nichts aus!
        falsch_name.style.display = 'none';
        name = false;
    } checkSignIn();
}

// Email Eingabe Pruefen
function validateEmail() {

    let value = eingabeEmail.value;
    if (value.length <= 4 || value.includes('@') == false && value.includes('.') == false) {
        falsch_email.style.display = 'block';
        falsch_email.innerHTML = 'Ihre Email muessen Mindestens 5 Zeichen und "@ ." beinhalten';
        email = true;
    
    }else {
        falsch_email.style.display = 'none';
        email = false;
    } checkSignIn();
}

// Passwort Eingabe Pruefen
function validatePW() {

    value1 = eingabePasswort1.value;
    if (value1.length <= 7) {
        falsch_passwort1.style.display = 'block';
        falsch_passwort1.innerHTML = 'Min. 8 Zeichen';
        passwort1 = true;
   
    }else {
        falsch_passwort1.style.display = 'none';
        passwort1 = false;
    } checkSignIn();
}

// Passwort doppelt Eingabe Pruefen
function PWchecked() {

    let value2 = eingabePasswort2.value;
    if (value1 != value2) {
        falsch_passwort2.style.display = 'block';
        falsch_passwort2.innerHTML = 'Ihr Passwort stimmt nicht mit dem Anderem ein.';
        passwort2 = true;
    
    }else {
        falsch_passwort2.style.display = 'none';
        passwort2 = false;
    }
    checkSignIn();
}

    // Akzeptier Button
    if (signSubmit) {
        function signIn() {
            console.log('ok')
            if (agree.checked == false) {
                falsch_submit.style.display = 'block';
                falsch_submit.innerHTML = 'Bitte stimmen Sie allen Nutzungsbedingungen zu.';

            }else {
                falsch_submit.style.display = 'none';
            }

        }
    }
