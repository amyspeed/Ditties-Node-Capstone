'use strict';

//All appended pages:

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

function appendDash() {
    $('main').append(
        ` <div role="container" class="dashboard">
            <div class="row">
                <div class="col-12">
                    <h2></h2>
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
    )
}

function appendSongForm() {
    $('main').append(
        `<div role="container" class="songform">
            <div class="row">
                <div class="col-12 form-page">
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
                        
                            <label for="Speed">Speed</label>
                            <select id="Speed">
                                <option value="">none selected</option>
                                <option value="fast">fast</option>
                                <option value="moderate">moderate</option>
                                <option value="slow">slow</option>
                            </select><br>    
                        
                            <label for="key">Key</label>
                            <input type="text" id="Key">
                        
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
                                <label for="section">Section</label>
                                <input type="number" min="1" max="10" id="sectionId">
                                <select id="section">
                                    <option value="">none selected</option>
                                    <option value="intro">Intro</option>
                                    <option value="verse">Verse</option>
                                    <option value="chorus">Chorus</option>
                                    <option value="bridge">Bridge</option>
                                    <option value="instrumental">Instrumental</option>
                                </select><br>
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
        </select><br>`
    )
}

function appendSong() {
    $('main').append(
        `<div role="container" class= "song-page">
            <div class="row">
                <div class="col-12">
                    <input type="submit" value="My Songs" class="dash">
                    <h2>{thisSong.title}</h2>
                    <p>Title: {thisSong.title}<br>
                    Coauthor(s): {thisSong.coauthors}<br>
                    Genre/Feel: {thisSong.genreFeel}<br>
                    Speed: {thisSong.speed}<br>
                    Key: {thisSong.key} Capo: {thisSong.capo}<br>
                    Time Signature: {thisSong.timeSig.top}/{thisSong.timeSig.bottom}<br>
                    Strum Notes: {thisSong.strum}<br>
                    Other Misc. Notes: {thisSong.notes}<br></p>
                    <input type="submit" value="Edit Song" id="edit">
                    <input type="submit" value="Delete Song" id="delete">
                    <input type="submit" value="My Songs" class="dash">
                </div>
            </div>
        </div>`
    )
}

function handleLogIn() {
    $('main').on('click', '#signin', function(event) {
        event.preventDefault();
        // let user = {}
        // user.username = $('#username').val();
        // user.password = $('#password').val();

        $('.index').remove();
        appendDash();
    })
}


function handleSignUp() {
    $('main').on('click', '#signup', function(event) {
        event.preventDefault();
        $('.index').remove();
        appendSignUp();
        console.log('success');
    })
}

function handleDemo() {
    $('.users').on('click', '#demo', function(event) {
        event.preventDefault();
        $('.index').remove();
        appendDash();
    })
}

function handleHaveAccount() {
    $('main').on('click', '#sign-in-page', function(event) {
        event.preventDefault();
        $('.register').remove();
        appendIndex();
        console.log('success');
    })
}

function handleNewSong() {
    $('main').on('click', '#new-song', function(event) {
        event.preventDefault();
        $('.dashboard').remove();
        appendSongForm();
    })
}

function handleSection() {
    $('main').on('click', '.new-section', function(event) {
        event.preventDefault();
        appendContent();
    });
}

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
    $('main').empty();
    appendDash();
    //Delete data!!
}

function handleClear() {
    $('main').on('click', '#clear', function(event) {
        event.preventDefault();
        $('.songform').remove();
        appendSongForm();
    })
    //code here
}

function handleSave() {
    $('main').on('click', '#save', function(event) {
        event.preventDefault();
        $('.songform').remove();
        appendSong();
    })
}

function handleMySongs() {
    $('main').on('click', '.dash', function(event) {
        event.preventDefault();
        $('.song-page').remove();
        appendDash();
    })
}


handleDemo();
handleLogIn();
handleSignUp();
handleHaveAccount();
handleNewSong();
handleSection();
handleDelete();
handleClear();
handleSave();
handleMySongs();