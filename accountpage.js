// Changes the appropriate values in the account login/creation page when switching tabs

function openTab(tabName) {
    if (tabName == 'login') {
        if (document.getElementById('signup').id === 'signup') {
            document.getElementById('signup').id = "sign-in";
        }
        document.getElementById('registertab').classList.remove('is-active');
        document.getElementById('logintab').classList.add('is-active');
        document.getElementById('userlabel').innerHTML = "User";
        document.getElementById('passlabel').innerHTML = "Password";
        document.getElementById('submit').innerHTML = "Login";
    }
    if (tabName == 'register') {
        if (document.getElementById('sign-in').id === 'sign-in') {
            document.getElementById('sign-in').id = "signup";
        }
        document.getElementById('logintab').classList.remove('is-active');
        document.getElementById('registertab').classList.add('is-active');
        document.getElementById('userlabel').innerHTML = "Create Username";
        document.getElementById('passlabel').innerHTML = "Create Password";
        document.getElementById('submit').innerHTML = "Register";
    }
}
