function revealMessage(){
    document.getElementById("hiddenMessage").style.display = "block";
    //countDownLoop();
}
function funkcija(i){
    document.getElementById("countDownText").innerHTML = i;
    console.log(i);
}

var i = 60;

var myfunc = setInterval(function() {
    
    // Calculating the days, hours, minutes and seconds left
        
    // Result is output to the specific element
    document.getElementById("countDownText").innerHTML = i;
    if(i <= 0){
        document.getElementById("countDownText").innerHTML = "BDOJFIIIIIIIIIIIIIIIIIHJFGIOPFHJDSIOFHE#WO*YGFHIWEHJFCOUYSGHVKLJHDFJVGEWOY*GFLJISDHVUIGSHDGHUWEIOHFUISDGFUIIHFUIO";
    }
    else{
        i -= 1;
    }    
    // Display the message when countdown is over
}, 1000);



// The data/time we want to countdown to
Locations_ID = document.getElementById("nikolas");

// 👇️ Change text color on mouseover
Locations_ID.addEventListener('mouseover', function handleMouseOver() {
    Locations_ID.style.color = 'red';
    Locations_ID.style.background ="green";
});
/*
// 👇️ Change text color back on mouseout
Locations_ID.addEventListener('mouseout', function handleMouseOut() {
    Locations_ID.style.color = 'black';
    Locations_ID.style.color = "green";
});
*/

// Run myfunc every second
