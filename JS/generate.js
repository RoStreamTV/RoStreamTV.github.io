function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}


function getCountry() {
    var country = getUrlParameter('country');
    if (country == null) {
        alert("ERROR: No country selected!");
    } else {
        return country;
    }
}

function getURL(country) {
    var url = 'https://raw.githubusercontent.com/RoStreamTV/RoStreamTV.github.io/main/Playlists/' + country + ".m3u";
    return url;
}

function redirect() {
    var country = getCountry();
    var url = getURL(country);
    // if url ends with undefined.m3u, redirect to main page
    if (url.endsWith("undefined.m3u")) {
        window.location = "index.html";
    } else {
        window.location = url;
    }
}

function onload() {
    var country = getCountry();
    var url = getURL(country);
    // if url ends with undefined.m3u, redirect to main page
    if (url.endsWith("undefined.m3u")) {
        window.location = "index.html";
    }
}

function embed() {
    var country = getCountry();
    var url = getURL(country);
     // edit src of iframe
     if (document.getElementById("embed").style.display == "none") {
        document.getElementById("embed").style.display = "block";
        document.getElementById("vae").innerHTML = "Hide Embed";
     } else {
        document.getElementById("embed").style.display = "none";
        document.getElementById("vae").innerHTML = "Show Embed";
    }
    document.getElementById("embed").src = url;
}

function showURL() {
    var country = getCountry();
    var url = getURL(country);
    // if document.getElementById("url").style.display == "none", show url else hide url
    if (document.getElementById("url").style.display == "none") {
        document.getElementById("url").style.display = "block";
        document.getElementById("cb").style.display = "block";
        document.getElementById("su").innerHTML = "Hide URL";
    } else {
        document.getElementById("url").style.display = "none";
        document.getElementById("cb").style.display = "none";
        document.getElementById("su").innerHTML = "Show URL";
    }
    document.getElementById("url").value = url;
}

function copy() {
    var country = getCountry();
    var url = getURL(country);
    // copy url to clipboard
    document.getElementById("url").select();
    document.execCommand("copy");
}
