function handleRegister() {
    $('.signup').on('click', '#register', function(event) {
        event.preventDefault();
        window.location.href = 'dash.html'
    })
}

function handleSignIn() {
    $('.signup').on('click', '#sign-in-page', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    })
}

handleRegister();
handleSignIn();