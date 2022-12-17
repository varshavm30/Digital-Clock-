var cl = console.log;

// to reating a digital clock we need hr/min/sec/session(am,pm) all this we want in current
//if we create current object then we get it from there //i.e clue to startfrom

let digitalClock = document.getElementById("digitalClock");



function dClock(){
let d= new Date();// object of current date
let hr = d.getHours(); // to get current hr in current date
let min = d.getMinutes();//to get current min in current date
let sec = d.getSeconds();//to get current sec in current date
let session = "am"

if(hr >=12){               //if hr is greater or equal to 12 then session is pm
	session = "pm"
}
if(hr >= 12){             // if hr is greater or equal to 12 then  hr - 12 = //like if hr = 14..14-12=2 // in 24 formate clock convert into 12hr
	hr = hr - 12
}

 hr = setZero(hr);   // to set zero befor hr sec and min if the are in single digit or less than 10
 min = setZero(min); 
 sec = setZero(sec);


cl(hr,min,sec); // call in console js

let result = `${hr}: ${min}: ${sec} ${session}`; //string interpolation

digitalClock.innerHTML = result;
setTimeout(dClock, 1000)      //settmeout function it will take 2 parameters 1st is function and 2nd time in milisec // atomatically call excecute
}
dClock();
                                            //                    condition  ?  true       false
function setZero(num){                     // ternary operator  hr = hr <  10 ? '0' + hr : hr
	return (num < 10) ? ('0' + num) : num; //                   min = min < 10 ? '0' + min : min
	                                       //                  sec = sec < 10 ? '0' + sec : sec  // '0' + sec/min/hr concatination coretion
}


