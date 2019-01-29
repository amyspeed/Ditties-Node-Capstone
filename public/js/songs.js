'use strict'
//This function to be replaced with AJAX calls to server
function getSongs(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_SONGS)}, 1);
}

function displaySongs(data) {
    for (index in data.songs) {
        $('body').append(
            `<p>Title: ${data.songs[index].title}<br>
            Coauthor(s): ${data.songs[index].coauthors}<br>
            Genre/Feel: ${data.songs[index].genreFeel}<br>
            Speed: ${data.songs[index].speed}<br>
            Key: ${data.songs[index].key} Capo: ${data.songs[index].capo}<br>
            Time Signature: ${data.songs[index].timeSig.top}/${data.songs[index].timeSig.bottom}<br>
            Strum Notes: ${data.songs[index].strum}<br>
            Other Misc. Notes: ${data.songs[index].notes}<br>
            ${data.songs[index].content[0].section}<br>
            Chords: ${data.songs[index].content[0].chords}<br>
            Lyrics: ${data.songs[index].content[0].lyrics}<br>
            ${data.songs[index].content[1].section}<br>
            Chords: ${data.songs[index].content[1].chords}<br>
            Lyrics: ${data.songs[index].content[1].lyrics}<br></p>`
            );
        
    }
}

function getAndDisplaySongs() {
    getSongs(displaySongs);
}

$(function() {
    getAndDisplaySongs();
})