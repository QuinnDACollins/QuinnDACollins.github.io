const APILINKS = {
    SPOTIFY: 'https://api.spotify.com/v1'
}
const MY_IDS = {
    SPOTIFY: "22kb7mgop3ckzk6wvv7h6qnqy",
}

$(document).ready(function () {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    // let file = figure out how to get files from directory
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        console.log(reader.result);
    }
});

/* function getSpotifyPlaylists() {
var resp = fetch(`https://accounts.spotify.com/api/token`, {
        body: `grant_type=client_credentials`,
        method: 'post',
        headers: {
            'Authorization': `Basic ${btoa("clientid:clientsecret")}`,
            'Content-Type': "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(data => {
        var playlistResp = fetch(`${APILINKS.SPOTIFY}/users/${MY_IDS.SPOTIFY}/playlists`, {
            headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'Content-Type': "application/json"
            }
        })
    })


}
*/
