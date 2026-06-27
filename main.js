/* ======================================================
   TRUPPIA
   MAIN JAVASCRIPT
   Funcionalidades principales del sitio web
   Versión 1.0
====================================================== */


/* ======================================================
   COOKIE BANNER
====================================================== */

const cookieBanner=document.getElementById("cookie-banner");

const accept=document.getElementById("accept-cookies");

const reject=document.getElementById("reject-cookies");

const settings=document.getElementById("settings-cookies");

if(!localStorage.getItem("cookies-choice")){

cookieBanner.style.display="block";

}

accept.onclick=function(){

localStorage.setItem("cookies-choice","accepted");

cookieBanner.style.display="none";

}

reject.onclick=function(){

localStorage.setItem("cookies-choice","rejected");

cookieBanner.style.display="none";

}

/* ======================================================
   COOKIE PREFERENCES MODAL
====================================================== */

const cookieModal = document.getElementById("cookie-modal");

const cancelCookies = document.getElementById("cancel-cookies");

const saveCookies = document.getElementById("save-cookies");

/* ======================================================
   COOKIE PREFERENCES MODAL
====================================================== */

function openCookieModal(){

    cookieModal.style.display = "flex";

}

function closeCookieModal(){

    cookieModal.style.display = "none";

}
function openCookieModal(){

    cookieModal.style.display = "flex";

}

function closeCookieModal(){

    cookieModal.style.display = "none";

}
/* ======================================================
   COOKIE PREFERENCES EVENTS
====================================================== */

settings.onclick = function () {

    openCookieModal();

}

cancelCookies.onclick = function () {

    closeCookieModal();

}

saveCookies.onclick = function () {

    localStorage.setItem("cookies-choice", "custom");

    closeCookieModal();

    cookieBanner.style.display = "none";

}




