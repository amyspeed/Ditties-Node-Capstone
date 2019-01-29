//Song mock data

let MOCK_SONGS = {
    "songs": [
        {
            "id": "111",
            "title": "Buggy Software Blues",
            "coauthors": "Person Peoples",
            "genreFeel": "digital blues",
            "speed": "slow",
            "key": "G",
            "capo": 2,
            "timeSig": {
                "top": 6,
                "bottom": 8
            },
            "strum": "D UDUU",
            "notes": "Harmonica on lead",
            "content": [
                {
                    "sectionId": 1,
                    "section": "intro",
                    "chords": "G7 C7 G7",
                    "lyrics": ""
                },
                {
                    "sectionId": 2,    
                    "section": "verse",
                    "chords": "G7 C7 G7 G7 C7 C7 G7 G7 D7 C7 G7 D7",
                    "lyrics": "Buggy Software Blues! I got Buggy Software Blues"
                }
            ]
        },

        {
            "id": "222",
            "title": "Spicy JavaScript",
            "coauthors": "",
            "genreFeel": "Techno pop with a latin feel",
            "speed": "fast",
            "key": "C",
            "capo": 4,
            "timeSig": {
                "top": 4,
                "bottom": 4
            },
            "strum": "D D DUXU",
            "notes": "Ellie Goulding meets Selina",
            "content": [
                {   
                    "sectionId": 1,
                    "section": "intro",
                    "chords": "C Am G D",
                    "lyrics": ""
                },
                {
                    "sectionId": 2,
                    "section": "verse",
                    "chords": "C Am G D",
                    "lyrics": "Dancing, magic, love, butterflies, jalepenos, javaScript"
                },
                {   
                    "sectionId": 3,
                    "section": "verse",
                    "chords": "C Am G D",
                    "lyrics": "Blah blah blah blah"
                },
                {
                    "sectionId": 4,
                    "section": "chorus",
                    "chords": "C C G C",
                    "lyrics": "JavaScript, spicy, blahhh"
                },
                {
                    "sectionId": 5,
                    "section": "verse",
                    "chords": "C Am G D",
                    "lyrics": "Pop stuff...."
                },
                {
                    "sectionId": 6,
                    "section": "bridge",
                    "chords": "Em Em Em Em",
                    "lyrics": ""
                }
            ]
        }
    ]
};

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