/* ======================================================
   TRUPPIA - MAIN JAVASCRIPT
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

