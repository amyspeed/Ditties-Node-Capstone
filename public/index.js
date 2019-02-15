'use strict';

let count = 0;

//---------All appended pages------------

function appendSignUp() {
    $('main').append(
        `<div role="container" class="register">
            <div class="row">
                <div class="col-12">
                    <h2>Create a new account and start writing songs today!</h2>
                    <form class="signup">
                        <fieldset>
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName"><br>
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName"><br>
                            <label for="username">Username</label>
                            <input type="text" id="username"><br>
                            <label for="password">Password</label>
                            <input type="password" id="password"><br>
                            <input type="submit" value="Register" id="register"><br>
                        </fieldset>
                        <fieldset>
                            <legend>Already have an account?</legend>
                            <input type="submit" value="Sign In" id="sign-in-page">
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>`
    )
}

function appendIndex() {
    $('main').append(
        `<div role="container" class= "index">
            <div class="row">
                <div class="col-12">
                    <h2>Welcome to Ditties, the songwriters' app for tracking song ideas.</h2>
                    <form class="users">
                        <fieldset>
                            <legend>Sign in or Sign up!</legend>
                            <label for="username">Username</label>
                            <input type="text" id="username"><br>
                            <label for="password">Password</label>
                            <input type="password" id="password"><br>
                            <input type="submit" value="Sign in!" id="signin"><br>
                            <label for="signup">Don't have an account yet?</label><br>
                            <input type="submit" id="signup" value="Sign Up">
                        </fieldset>
                        <fieldset>
                            <legend>Can't commit just yet?</legend>
                            <input type="submit" value="demo" id="demo">
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>`
    )
}

function appendDash(allDitties, userAuth) {
    console.log(allDitties);
    $('main').append(
        ` <div role="container" class="dashboard">
            <div class="row">
                <div class="col-12">
                    <h2>Hi (user's first name)! Let's get to tracking your Diddies.</h2>
                    <form id="new-song">
                        <input type="submit" value="Create New Song">
                    </form>
                </div>
            </div>

            <section role="region">
                <div class="row">
                    <div class="col-12">
                        <header><h3>Your Amazing Song Ideas</h3>
                        </header>
                    </div>
                </div>

                <div class="row song-icons">
                </div>

            </section>
        </div>`
    );
    displaySongs(allDitties, userAuth);
}

function displaySongs(allDitties, userAuth) {
    for (let i = 0; i < allDitties.length; i++) {
        $('.song-icons').append(
            `<div>
            <button class="title" value="${allDitties[i]._id}">${allDitties[i].title}<button>
            </div>`
        );
    }
    handleSongButtonsOff(userAuth);
}

function appendSongForm() {
    $('main').append(
        `<div role="container" class="songform">
            <div class="row">
                <div class="col-12 form-page">
                <input type="submit" value="My Songs" class="dash">
                    <h2>Let your song ideas come to life!</h2>
                    <form class="song-form">
                        <fieldset>
                            <legend>Fill in all inspired fields</legend>
                            <label for="title">Title</label>
                            <input type="text" id="title"><br>
                        
                            <label for="coauthors">Coauthor(s)</label>
                            <input type="text" id="coauthors"><br>
                        
                            <label for="genreFeel">Genre/Feel</label>
                            <input type="text" id="genreFeel"><br>
                        
                            <label for="speed">Speed</label>
                            <select id="speed">
                                <option value="">none selected</option>
                                <option value="fast">fast</option>
                                <option value="moderate">moderate</option>
                                <option value="slow">slow</option>
                            </select><br>    
                        
                            <label for="key">Key</label>
                            <input type="text" id="key">
                        
                            <label for="capo">capo</label>
                            <input type="number" id="capo" min=0 max=20><br>
                        
                            <label for="timeSig-top">Time Signature (top)</label>
                            <input type=number id="timeSig-top"><br>
                            <label for="timeSig-bottom">Time Signature (bottom)</label>
                            <input type=number id="timeSig-bottom"><br>

                            <label for="strum">Strum/Picking Notes</label>
                            <input type="text" id="strum" placeholder="e.g. DUXUDU"><br>

                            <label for="notes">Other Misc. Notes</label>
                            <input type="text" id="notes"><br>
                        
                            <div class="content">
                            
                            </div>   
                                <input type="submit" value="create section" class="new-section">
                        
                        
                            <br>
                            <input type="submit" value="Save" id="save">
                            <input type="submit" value="Clear Form" id="clear">
                            <input type="submit" value="Delete Song" id="delete">
                    </form>
                </div>
            </div>
        </div>`
    )
}

function appendContent(count) {
    $('.content').append(
        `<br><label for="section">Section</label>
        <input type="number" min="1" max="10" id="sectionId${count}">
        
        <select id="section${count}">
            <option value="">none selected</option>
            <option value="intro">Intro</option>
            <option value="verse">Verse</option>
            <option value="chorus">Chorus</option>
            <option value="bridge">Bridge</option>
            <option value="instrumental">Instrumental</option>
        </select><br>

        <label for=chords>Chords</label>
        <input type="text" id="chords${count}"><br>

        <label for=lyrics>Lyrics</label>
        <input type="text" id="lyrics${count}"><br>`
    )
}

function appendSong(thisSong) {
    $('main').append(
        `<div role="container" class= "song-page">
            <div class="row">
                <div class="col-12">
                    <input type="submit" value="My Songs" class="dash">
                    <h2>${thisSong.title}</h2>
                    <p>Coauthor(s): ${thisSong.coauthors}<br>
                    Genre/Feel: ${thisSong.genreFeel}<br>
                    Speed: ${thisSong.speed}<br>
                    Key: ${thisSong.key} Capo: ${thisSong.capo}<br>
                    Time Signature: ${thisSong.timeSig.top}/${thisSong.timeSig.bottom}<br>
                    Strum Notes: ${thisSong.strum}<br>
                    Other Misc. Notes: ${thisSong.notes}<br></p>
                    <div class="song-content">
                    </div>
                    <input type="submit" value="Edit Song" id="edit">
                    <input type="submit" value="Delete Song" id="delete">
                    <input type="submit" value="My Songs" class="dash">
                </div>
            </div>
        </div>`
    );
}

function appendSongContent(thisSong) {
    for(let i=0; i<thisSong.content.length; i++){
        // console.log(thisSong.content[i].section);
        $('.song-content').append(
         `<p>Section ${thisSong.content[i].sectionId}: ${thisSong.content[i].section}<br>
         <br>${thisSong.content[i].chords}<br>
         ${thisSong.content[i].lyrics}
         </p>`
        )
    }
}

function appendEditForm(thisSong) {
    $('main').append(
        `<div role="container" class="songform">
            <div class="row">
                <div class="col-12 form-page">
                    <input type="submit" value="My Songs" class="dash">
                    <h2>Let your song ideas come to life!</h2>
                    <form class="song-form">
                        <fieldset>
                            <legend>Fill in all inspired fields</legend>
                            <label for="title">Title</label>
                            <input value="${thisSong.title}" type="text" id="title"><br>
                        
                            <label for="coauthors">Coauthor(s)</label>
                            <input value="${thisSong.coauthors}" type="text" id="coauthors"><br>
                        
                            <label for="genreFeel">Genre/Feel</label>
                            <input value="${thisSong.genreFeel}" type="text" id="genreFeel"><br>
                        
                            <label for="speed">Speed</label>
                            <select id="speed">
                                <option value="${thisSong.speed}">${thisSong.speed}</option>
                                <option value="">none selected</option>
                                <option value="fast">fast</option>
                                <option value="moderate">moderate</option>
                                <option value="slow">slow</option>
                            </select><br>    
                        
                            <label for="key">Key</label>
                            <input value="${thisSong.key}" type="text" id="key">
                        
                            <label for="capo">capo</label>
                            <input value="${thisSong.capo}" type="number" id="capo" min=0 max=20><br>
                        
                            <label for="timeSig-top">Time Signature (top)</label>
                            <input value="${thisSong.timeSig.top}" type=number id="timeSig-top"><br>
                            <label for="timeSig-bottom">Time Signature (bottom)</label>
                            <input value="${thisSong.timeSig.bottom}" type=number id="timeSig-bottom"><br>

                            <label for="strum">Strum/Picking Notes</label>
                            <input value="${thisSong.strum}" type="text" id="strum" placeholder="e.g. DUXUDU"><br>

                            <label for="notes">Other Misc. Notes</label>
                            <input value="${thisSong.notes}" type="text" id="notes"><br>
                        
                            <div class="content">
                            </div>   
                                <input type="submit" value="create section" id="section-edit">
                        
                        
                            <br>
                            <input type="submit" value="Save" id="save-edit">
                            <input type="submit" value="Delete Song" id="delete">
                    </form>
                </div>
            </div>
        </div>`
    )
}

function appendEditContent(thisSong) {
    for(let i=0; i<thisSong.content.length; i++){
        $('.content').append(
            `<br><label for="section">Section</label>
            <input value="${thisSong.content[i].sectionId}" type="number" min="1" max="10" id="sectionId${i}">
            
            <select id="section${i}">
                <option value="${thisSong.content[i].section}">${thisSong.content[i].section}</option>
                <option value="">none selected</option>
                <option value="intro">Intro</option>
                <option value="verse">Verse</option>
                <option value="chorus">Chorus</option>
                <option value="bridge">Bridge</option>
                <option value="instrumental">Instrumental</option>
            </select><br>
    
            <label for=chords>Chords</label>
            <input value="${thisSong.content[i].chords}" type="text" id="chords${i}"><br>
    
            <label for=lyrics>Lyrics</label>
            <input value="${thisSong.content[i].lyrics}" type="text" id="lyrics${i}"><br>`
        )
    }
}

function appendMoreContent(countEdit) {
    $('.content').append(
        `<br><label for="section">Section</label>
        <input type="number" min="1" max="10" id="sectionId${countEdit}">
        
        <select id="section${countEdit}">
            <option value="">none selected</option>
            <option value="intro">Intro</option>
            <option value="verse">Verse</option>
            <option value="chorus">Chorus</option>
            <option value="bridge">Bridge</option>
            <option value="instrumental">Instrumental</option>
        </select><br>

        <label for=chords>Chords</label>
        <input type="text" id="chords${countEdit}"><br>

        <label for=lyrics>Lyrics</label>
        <input type="text" id="lyrics${countEdit}"><br>`
    )
}


//---------Handle Buttons------------

function handleLogIn() {
    $('main').on('click', '#signin', function(event) {
        event.preventDefault();
        let user = {};
        user.username = $('#username').val();
        user.password = $('#password').val();
        console.log(JSON.stringify(user));
        login(user);
    })
}

function handleDemo() {
    $('.users').on('click', '#demo', function(event) {
        event.preventDefault();
        let user = {};
        user.username = 'demo';
        user.password = 'Password123';
        console.log(JSON.stringify(user));
        login(user);

    })
}

function handleSignUp() {
    $('main').on('click', '#signup', function(event) {
        event.preventDefault();
        $('.index').remove();
        appendSignUp();
    })
}

function handleRegister() {
    $('main').on('click', '#register', function(event) {
        event.preventDefault();
        let newUser = {};
        newUser.username = $('#username').val();
        newUser.password = $('#password').val();
        newUser.firstName = $('#firstName').val();
        newUser.lastName = $('#lastName').val();
        register(newUser);
    })
}

function handleHaveAccount() {
    $('main').on('click', '#sign-in-page', function(event) {
        event.preventDefault();
        $('.register').remove();
        appendIndex();
    })
}

function handleNewSong(userAuth) {
    $('main').on('click', '#new-song', function(event) {
        event.preventDefault();
        $('.dashboard').remove();
        appendSongForm();
        handleSection();
        handleClear();
        handleMySongsOff(userAuth);
        handleSave(userAuth);
    })
}

function handleSection() {
    $('main').on('click', '.new-section', function(event) {
        event.preventDefault();
        appendContent(count);
        count = count+1;
    });
}


function handleSave(userAuth) {
    $('main').on('click', '#save', function(event) {
        event.preventDefault();
        renderContent(userAuth);
    })
}

function renderContent(userAuth) {
    let contentArray = [];
    for (let i=0; i < count; i++) {
        let contentObject = {};
            contentObject.sectionId = $(`#sectionId${i}`).val(),
            contentObject.section = $(`#section${i}`).val(),
            contentObject.chords = $(`#chords${i}`).val(),
            contentObject.lyrics = $(`#lyrics${i}`).val()
        contentArray.push(contentObject);
    }
    console.log(contentArray);
    createSongObject(userAuth, contentArray);
}

function createSongObject(userAuth, contentArray) {
    let song = {};
        song.title = $('#title').val();
        song.coauthors = $('#coauthors').val();
        song.genreFeel = $('#genreFeel').val();
        song.speed = $('#speed').val();
        song.key = $('#key').val();
        song.capo = $('#capo').val();
        song.strum = $('#strum').val();
        song.notes = $('#notes').val();
        song.timeSig = {};
        song.timeSig.top = $('#timeSig-top').val();
        song.timeSig.bottom = $('#timeSig-bottom').val();
        song.content = contentArray;
        console.log(song, JSON.stringify(song));
        $('.songform').remove();
        postDitty(userAuth, song);
}

function handleDeleteOff(userAuth, thisSong) {
    $('#delete').click(function(event) {
        event.preventDefault();
        $('main').off('click');
        handleDeleteOn(userAuth, thisSong);
    })
}

function handleDeleteOn(userAuth, thisSong) {
    $('main').on('click', '#delete', function(event) {
        event.preventDefault();
        getConfirmation(userAuth, thisSong);
    })
}

function getConfirmation(userAuth, thisSong) {
    let deleteConfirm = confirm('Are you sure you want to perminently delete this Ditty?');
    if( deleteConfirm == true ) {
        deleteDitty(userAuth, thisSong);
    }
    else {
        return false;
    }
}

function handleClear() {
    $('main').on('click', '#clear', function(event) {
        event.preventDefault();
        $('.songform').remove();
        appendSongForm();
    })
}

function handleMySongsOff(userAuth) {
    $('.dash').click(function(event) {
        event.preventDefault();
        $('main').off('click');
        handleMySongsOn(userAuth);
    })
}

function handleMySongsOn(userAuth) {
    $('main').on('click', '.dash', function(event) {
        event.preventDefault();
        $('main').empty();
        getDitties(userAuth);
    })
}

function handleSongButtonsOff(userAuth) {
    $('.title').click(function(event) {
        event.preventDefault();
        $('main').off('click');
        handleSongButtonsOn(userAuth);
    });
}

function handleSongButtonsOn(userAuth){
    $('main').on('click', '.title', function(event) {
        event.preventDefault();
        let songId = $(this).val();
        $('.dashboard').remove();
        console.log(songId);
        getDittyById(songId, userAuth);
    });
}

function handleEditOff(userAuth, thisSong){
    $('#edit').click(function(event) {
        event.preventDefault();
        $('main').off('click');
        handleEdit(userAuth, thisSong);
    });
}

function handleEdit(userAuth, thisSong) {
    $('main').on('click', '#edit', function(event) {
        event.preventDefault();
        $('.song-page').remove();
        appendEditForm(thisSong);
        appendEditContent(thisSong);
        // handleClearEdit(thisSong);
        let countEdit = thisSong.content.length;
        handleSectionEdit(userAuth, thisSong, countEdit);
        handleSaveEdit(userAuth, thisSong, countEdit);
    })
}

// function handleClearEdit(thisSong) {
//     $('main').on('click', '#clear-edit', function(event) {
//         event.preventDefault();
//         $('.songform').remove();
//         appendEditForm(thisSong);
//     })
// }

function handleSectionEdit(userAuth, thisSong, countEdit) {
    $('main').on('click', '#section-edit', function(event) {
        event.preventDefault();
        appendMoreContent(countEdit);
        countEdit = countEdit+1;
        handleSaveEditOff(userAuth, thisSong, countEdit);
    });
}

function handleSaveEditOff(userAuth, thisSong, countEdit){
    $('#save-edit').click(function(event) {
        event.preventDefault();
        $('main').off('click');
        handleSaveEdit(userAuth, thisSong, countEdit);
    });
}

function handleSaveEdit(userAuth, thisSong, countEdit) {
    $('main').on('click', '#save-edit', function(event) {
        event.preventDefault();
        let songId = thisSong._id;
        renderEditContent(userAuth, songId, countEdit);
    });
}

function renderEditContent(userAuth, songId, countEdit) {
    let contentArray = [];
    console.log('countEdit '+countEdit);
    for (let i=0; i < countEdit; i++) {
        let contentObject = {};
            contentObject.sectionId = $(`#sectionId${i}`).val(),
            contentObject.section = $(`#section${i}`).val(),
            contentObject.chords = $(`#chords${i}`).val(),
            contentObject.lyrics = $(`#lyrics${i}`).val()
        contentArray.push(contentObject);
    }
    console.log(contentArray);
    createEditSongObject(userAuth, songId, contentArray);
}

function createEditSongObject(userAuth, songId, contentArray) {
    let song = {};
        song.id = songId;
        song.title = $('#title').val();
        song.coauthors = $('#coauthors').val();
        song.genreFeel = $('#genreFeel').val();
        song.speed = $('#speed').val();
        song.key = $('#key').val();
        song.capo = $('#capo').val();
        song.strum = $('#strum').val();
        song.notes = $('#notes').val();
        song.timeSig = {};
        song.timeSig.top = $('#timeSig-top').val();
        song.timeSig.bottom = $('#timeSig-bottom').val();
        song.content = contentArray;
        console.log(song, JSON.stringify(song));
        $('.songform').remove();
        putDitty(userAuth, songId, song);
}

//----------User requests----------

function login(user) {
//change fetch URL for deployment:
    fetch('http://localhost:8080/api/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user) 
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJsonAuth => bearerToken(responseJsonAuth))
    .catch(err => {
        console.log(err)
        alert(`${err.message}: Incorrect Username or Password`)
    });
}

function bearerToken(responseJsonAuth) {
    console.log(responseJsonAuth);
    const userAuth = responseJsonAuth.authToken;
    getDitties(userAuth);
    console.log(userAuth);
    $('main').empty();
}

function register(newUser) {
    fetch('http://localhost:8080/api/users', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser) 
    })
    .then(response => {
        if (response.ok) {
            return userObject(newUser);
        }
        throw new Error(response.statusText);
    })
    .catch(err => {
        console.log(err)
        alert(`${err.message}: Incorrect Username or Password`)
    });
}

function userObject(newUser) {
    let user = {};
    user.username = newUser.username;
    user.password = newUser.password;
    login(user);
}

//-------Ditties Requests----------

//--GET
function getDitties(userAuth) {
    fetch('http://localhost:8080/ditties', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userAuth}`
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(allDitties => 
        callDashFunctions(allDitties, userAuth))
    .catch(err => {
        console.log(err)
    });
}

function callDashFunctions(allDitties, userAuth) {
    appendDash(allDitties, userAuth);
    handleNewSong(userAuth);
}

//--GET by ID
function getDittyById(songId, userAuth) {
    fetch(`http://localhost:8080/ditties/${songId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userAuth}`
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(thisSong =>
        callSongFunctions(userAuth, thisSong))
    .catch(err => {
        console.log(err)
    });
}

function callSongFunctions(userAuth, thisSong){
    appendSong(thisSong);
    appendSongContent(thisSong);
    handleDeleteOff(userAuth, thisSong);
    handleEditOff(userAuth, thisSong);
    handleMySongsOff(userAuth);
}

//--DELETE
function deleteDitty(userAuth, thisSong) {
    let songId = thisSong._id;
    console.log(songId);
    fetch(`http://localhost:8080/ditties/${songId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${userAuth}`
        }
    })
    .then(response => {
        if (response.ok) {
            return getNewDitties(userAuth);
        }
        throw new Error(response.statusText);
    })
    .catch(err => {
        console.log(err);
        alert(`${err.message}: This example Ditty cannot be removed. Continue to enjoy!`);
        return getNewDitties(userAuth);
    })
}

function getNewDitties(userAuth) {
    $('main').empty();
    return getDitties(userAuth);
}

//--POST
function postDitty(userAuth, song) {
    console.log(userAuth);
    fetch('http://localhost:8080/ditties', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${userAuth}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
    })
    .then(response => {
        if (response.ok) {

            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(thisSong =>
        getNewSongId(userAuth, thisSong))
    // .then(thisSong =>
    //     callSongFunctions(allDitties, userAuth, thisSong))
    .catch(err => {
        console.log(err)
    });
}

function getNewSongId(userAuth, thisSong) {
    let songId = thisSong._id;
    getDittyById(songId, userAuth);
}

//--PUT
function putDitty(userAuth, songId, song) {
    fetch(`http://localhost:8080/ditties/${songId}`, {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${userAuth}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
    })
    .then(response => {
        if (response.ok) {
            return getDittyById(songId, userAuth);
        }
        throw new Error(response.statusText);
    })
    .catch(err => {
        console.log(err)
    });
}


handleDemo();
handleLogIn();
handleSignUp();
handleHaveAccount();
handleRegister();