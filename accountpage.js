function openTab(tabName) {
    if (tabName == 'login') {
        document.getElementById('registertab').classList.remove('is-active');
        document.getElementById('logintab').classList.add('is-active');
        document.getElementById('userlabel').innerHTML = "User";
        document.getElementById('passlabel').innerHTML = "Password";
        document.getElementById('submit').innerHTML = "Login";
    }
    if (tabName == 'register') {
        document.getElementById('logintab').classList.remove('is-active');
        document.getElementById('registertab').classList.add('is-active');
        document.getElementById('userlabel').innerHTML = "Create Username";
        document.getElementById('passlabel').innerHTML = "Create Password";
        document.getElementById('submit').innerHTML = "Register";
    }
}
