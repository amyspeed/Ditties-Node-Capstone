'use strict'

function handleSection() {
    $('.song-form').on('click', '.new-section', function(event) {
        event.preventDefault();
        appendContent();
    });
}

function appendContent() {
    $('.content').append(
        `<label for=chords>Chords</label>
        <input type="text" id="chords"><br>

        <label for=lyrics1>Lyrics</label>
        <input type="text" id="lyrics"><br>
        
        <label for="section1">Section</label>
        <input type="number" min="1" max="10" id="sectionId">
        <select id="section">
            <option value="">none selected</option>
            <option value="intro">Intro</option>
            <option value="verse">Verse</option>
            <option value="chorus">Chorus</option>
            <option value="bridge">Bridge</option>
            <option value="instrumental">Instrumental</option>
        </select><br>`)
}

function handleSave() {
    $('.song-form').on('click', '#save', function(event) {
        event.preventDefault();
        generateSong();
    })
}

function generateSong() {
    window.location.href = 'song.html';
    //Post song Data
}

function handleDelete() {
    $('.song-form').on('click', '#delete', function(event) {
        event.preventDefault();
        getConfirmation();
    })
}

function getConfirmation() {
    let deleteConfirm = confirm('Are you sure you want to perminently delete this Diddy?');
    if( deleteConfirm == true ) {
        permDelete();
    }
    else {
        return false;
    }
}

function permDelete() {
    window.location.href = 'dash.html';
    //Delete data!!
}

handleDelete();
handleSave();
handleSection();