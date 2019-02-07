import { userInfo } from "os";

function handleLogIn() {
    $('.users').on('click', '#signin', function(event) {
        event.preventDefault();
        let user = {}
        user.username = $('#username').val();
        user.password = $('#password').val();

       // window.location.href = 'dash.html';
    })
}


function handleSignUp() {
    $('.users').on('click', '#signup', function(event) {
        event.preventDefault();
        window.location.href = 'signup.html';
    })
}

function handleDemo() {
    $('.users').on('click', '#demo', function(event) {
        event.preventDefault();
        window.location.href = 'dash.html';
    })
}

handleDemo();
handleLogIn();
handleSignUp();

