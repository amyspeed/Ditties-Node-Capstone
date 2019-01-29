//User mock data

let MOCK_USERS = {
    "users": [
        {
            "id": "111",
            "userName": "Demo",
            "password": "Demo",
            "name": {
                "firstName": "Friend",
                "lastName": ""
            }
        },
        {
            "id": "222",
            "userName": "amySpeed",
            "password": "password",
            "name": {
                "firstName": "Amy",
                "lastName": "Speed"
            }

        }
    ]
}

//This funtion to be replaced with AJAX calls to server

function getUser(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_USERS)}, 1);
}

function displayUser(data) {
    for (index in data.songs) {
        $('body').append(
            `<p>${data.users[index].name.firstName}</p>`
        );
    }
}

function getAndDisplayUser() {
    getUser(displayUser);
}

$(function() {
    getAndDisplayUser();
})