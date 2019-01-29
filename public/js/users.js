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
};

//This function to be replaced with AJAX calls to server

function getUsers(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_USERS)}, 1);
}

function displayUsers(data) {
    for (index in data.users) {
        $('body').append(
            `<p>${data.users[index].name.firstName}</p>`
        );
    }
}

function getAndDisplayUsers() {
    getUsers(displayUsers);
}

$(function() {
    getAndDisplayUsers();
})