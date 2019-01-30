'use strict'

function content() {
    return `<label for=chords>Chords</label>
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
        </select><br>`
}

function songPage(thisSong) {
    return`<div class="col-12 song-page"
            <p>Title: ${thisSong.title}<br>
            Coauthor(s): ${thisSong.coauthors}<br>
            Genre/Feel: ${thisSong.genreFeel}<br>
            Speed: ${thisSong.speed}<br>
            Key: ${thisSong.key} Capo: ${thisSong.capo}<br>
            Time Signature: ${thisSong.timeSig.top}/${thisSong.timeSig.bottom}<br>
            Strum Notes: ${thisSong.strum}<br>
            Other Misc. Notes: ${thisSong.notes}<br></p>
            <input type="submit" value="Edit Song" id="edit">
            <input type="submit" value="Delete Song" id="delete">
        </div>`
}

function formPage(thisSong) {
    return `<div class="col-12 form-page">
        <h2>Let your song ideas come to life!</h2>
            <form class="song-form">
                <fieldset>
                <legend>Fill in all inspired fields</legend>
                    <label for="title">Title</label>
                    <input type="text" id="title" value="${thisSong.title}"><br>
            
                    <label for="coauthors">Coauthor(s)</label>
                    <input type="text" id="coauthors" value="${thisSong.coauthors}"><br>
            
                    <label for="genreFeel">Genre/Feel</label>
                    <input type="text" id="genreFeel" value="${thisSong.genreFeel}"><br>
            
                    <label for="Speed">Speed</label>
                    <select id="Speed">
                        <option value="${thisSong.speed}">${thisSong.speed}</option>
                        <option value="">none selected</option>
                        <option value="fast">fast</option>
                        <option value="moderate">moderate</option>
                        <option value="slow">slow</option>
                    </select><br>    
            
                    <label for="key">Key</label>
                    <input type="text" id="Key" value="${thisSong.key}">
            
                    <label for="capo">capo</label>
                    <input type="number" id="capo" min=0 max=20 value="${thisSong.capo}"><br>
            
                    <label for="timeSig-top">Time Signature (top)</label>
                    <input type=number id="timeSig-top" value="${thisSong.timeSig.top}"><br>
                    <label for="timeSig-bottom">Time Signature (bottom)</label>
                    <input type=number id="timeSig-bottom" value="${thisSong.timeSig.bottom}"><br>

                    <label for="strum">Strum/Picking Notes</label>
                    <input type="text" id="strum" placeholder="e.g. DUXUDU" value="${thisSong.strum}"><br>

                    <label for="notes">Other Misc. Notes</label>
                    <input type="text" id="notes" value="${thisSong.notes}"><br>
            
                    <div class="content">
                    </div>   
                        <input type="submit" value="create section" class="new-section">
            
            
                    <br>
                    <input type="submit" value="Save" id="save">
                    <input type="submit" value="Clear Form" id="clear">
                    <input type="submit" value="Delete Song" id="delete">
            </form>
        </div>`
}


function appendContent() {
    $('.content').append(content());
}

function appendSong(data){
    $('.form-page').remove();
    let thisSong = data.songs[0];
    console.log(thisSong);
    $('.row').append(songPage(thisSong));
    handleEdit(thisSong);
}

function appendForm(thisSong) {
    $('.row').append(formPage(thisSong));
    handleSave(thisSong);
}

function appendFilledContent(thisSong) {
    for (let i=0; i < thisSong.content.length; i++) {
        $('.content').append(
            `<label for="section1">Section</label>
            <input type="number" min="1" max="10" id="sectionId" value="${thisSong.content[i].sectionId}">
            <select id="section1">
                <option value="${thisSong.content[i].section}">${thisSong.content[i].section}</option>
                <option value="">none selected</option>
                <option value="intro">Intro</option>
                <option value="verse">Verse</option>
                <option value="chorus">Chorus</option>
                <option value="bridge">Bridge</option>
                <option value="instrumental">Instrumental</option>
            </select><br>

            <label for=chords>Chords</label>
            <input type="text" id="chords" value="${thisSong.content[i].chords}"><br>

            <label for=lyrics1>Lyrics</label>
            <input type="text" id="lyrics" value="${thisSong.content[i].lyrics}"><br>
        </select><br>`
        );
    }
}




function handleSection() {
    $('.song-form').on('click', '.new-section', function(event) {
        event.preventDefault();
        appendContent();
    });
}


function handleSave() {
    $('.song-form').on('click', '#save', function(event) {
        event.preventDefault();
        const queryTitle = $('#title').val();
        const queryCoauthors = $('#coauthors').val();
        console.log(queryTitle, queryCoauthors);
        //addNewSongToList(queryTitle, queryCoauthors);
        getAndDisplaySongs();
    })
}


// function addNewSongToList(queryTitle, queryCoauthors) {
//     console.log(queryTitle, queryCoauthors);
//     console.log(MOCK_SONGS);
//     const songs = [];
//     songs.push({title: queryTitle, coauthers: queryCoauthors});
//     console.log(MOCK_SONGS);
//     console.log(songs);
//     //Post song Data
// }

function getAndDisplaySongs() {
    getSongs(displaySongs);
}

function getSongs(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_SONGS)}, 1);
}

function displaySongs(data) {
    appendSong(data);
}

// function generateString() {
//     const songList = [];
//     const items = songList.map((item, index) =>
//         generateSong(item, index));
//     return items.join('');
// }

// function generateSong(item, index) {
//     console.log(MOCK_SONGS);
//}

function handleDelete() {
    $('main').on('click', '#delete', function(event) {
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

function handleClear() {
    //code here
}

function handleEdit(thisSong) {
    $('main').on('click', '#edit', function(event) {
        event.preventDefault();
        $('.song-page').remove();
        appendForm(thisSong);
        appendFilledContent(thisSong);
    })
}


handleClear();
handleDelete();
handleSave();
handleSection();