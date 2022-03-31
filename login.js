document.getElementById('submit-btn').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get passwrd
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@gmail.com' && userPassword == 'sontan') {

        window.location.href = 'banking.html';
    }




});
// handle deposit
