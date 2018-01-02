document.getElementById("home").style.display = "block";
document.getElementById("gallery").style.display = "none";
document.getElementById("fleet").style.display = "none";
document.getElementById("missions").style.display = "none";

document.getElementById('homebutt').addEventListener("click", function(){
         document.getElementById("home").style.display = "block";
         document.getElementById("gallery").style.display = "none";
         document.getElementById("fleet").style.display = "none";
         document.getElementById("missions").style.display = "none";
});

document.getElementById('gallbutt').addEventListener("click", function(){
         document.getElementById("home").style.display = "none";
         document.getElementById("gallery").style.display = "block";
         document.getElementById("fleet").style.display = "none";
         document.getElementById("missions").style.display = "none";
});

document.getElementById('fleetbutt').addEventListener("click", function(){
         document.getElementById("home").style.display = "none";
         document.getElementById("fleet").style.display = "block";
         document.getElementById("gallery").style.display = "none";
         document.getElementById("missions").style.display = "none";
});

document.getElementById('missbutt').addEventListener("click", function(){
         document.getElementById("home").style.display = "none";
         document.getElementById("fleet").style.display = "none";
         document.getElementById("gallery").style.display = "none";
         document.getElementById("missions").style.display = "block";
});