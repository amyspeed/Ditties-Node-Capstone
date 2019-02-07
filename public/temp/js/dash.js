//This function to be replaced with AJAX calls to server

function getUser(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_USERS)}, 1);
}

function displayUser(data) {
    for (index in data.users) {
        $('h2').append(
            `Hi ${data.users[index].name.firstName}! Let's get to tracking your Diddies.`
        );
    }
}

function getAndDisplayUser() {
    getUser(displayUser);
}

$(function() {
    getAndDisplayUser();
})

function handleNewSong() {
    $('#new-song').on('click', 'input', function(event) {
        event.preventDefault();
        window.location.href = 'songform.html';
    })
}

//This function to be replaced with AJAX calls to server
function getSongs(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_SONGS)}, 1);
}

function displaySongs(data) {
    for (index in data.songs) {
        $('.song-icons').append(
            `<button id="title">${data.songs[index].title}<button>`
        );
        let title = data.songs[index].title
        handleSongButtons(title);
    }
}

function getAndDisplaySongs() {
    getSongs(displaySongs);
}

function handleSongButtons(title) {
    $('#title').click(function(event) {
        event.preventDefault();
        console.log(title);
        //handle data here
        //window.location.href = "song.html";
        window.open('song.html');
    })
}

$(function() {
    getAndDisplaySongs();
})

handleNewSong();