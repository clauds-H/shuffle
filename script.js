//nur gute links 😛
const strRam = "https://youtu.be/ZKU3qOU9F74 https://youtu.be/pFBgHMbrQK4 https://youtu.be/aFkii62sSzU https://youtu.be/XemxFo2X_JY https://youtu.be/yh6lt1QgPQQ https://youtu.be/_sM2sKk4DPM https://youtu.be/bUXoDvioAuE https://youtu.be/-XlW-cyAdiw https://youtu.be/9jMl4kNMv8E https://youtu.be/EOnSh3QlpbQ https://youtu.be/6A8bV_IEgyI https://youtu.be/Pu1Iuq0G-gI https://youtu.be/rvwftBpqiiw https://youtu.be/VEG_T4UUc1I https://youtu.be/ITcj8mePex0 https://youtu.be/ZkW-K5RQdzo https://youtu.be/E3hh37KbY18 https://youtu.be/60ZFYYqIzIQ https://youtu.be/WXv31OmnKqQ https://youtu.be/bIPCVaLHZng https://youtu.be/H7dV9VhThi8 https://youtu.be/7Rd5ltFFQDI https://youtu.be/GyicH6u98GU https://youtu.be/iqfIfsYaQy8 https://youtu.be/QX3FNE6xbco https://youtu.be/2c6rn5Bccw4 https://youtu.be/rf9og-hBM1E https://youtu.be/upnNpEOcnJI https://youtu.be/_vVejzHNGUk https://youtu.be/LeEPvlARStw https://youtu.be/ZXjNjuLOi_k https://youtu.be/7opB3Fniyh4 https://youtu.be/Cp31A_iqoDw https://youtu.be/nwjap30mWR8 https://youtu.be/k-kpk4_olLQ https://youtu.be/70tvVuj4v5g https://youtu.be/lPabXy9fpaE https://youtu.be/kiw_VxQ2oXo https://youtu.be/6s0ql4Ja9T8";

const strElek = "https://youtu.be/ZdUINbi4wSY https://youtu.be/YC7dTQkMS8M https://youtu.be/-Dcf-zR4wfk https://youtu.be/e8Y_EdgzcIk https://youtu.be/Vgxsb6QpUdE https://youtu.be/EguoF5NlHzc https://youtu.be/vkwHpGo-fRs https://youtu.be/tBOIkn4sdFo https://youtu.be/wpjQ_jsQ2OA https://youtu.be/5xWa-vzICP8 https://youtu.be/X3MW1UKBJCw https://youtu.be/OqrQYu37BMc https://youtu.be/jWLaHF69S5Y https://youtu.be/5yJdo9tiW_Y https://youtu.be/J8TeMSzWyAE https://youtu.be/9bubwD-K4Os https://youtu.be/ThlyG8PTlxo https://youtu.be/CRc6YGJYes8 https://youtu.be/IqZYGcKBamo https://youtu.be/5lY9dFWECyI https://youtu.be/6r7NCucfzLk";

const strTechno = "https://youtu.be/qKhM1UBp604 https://youtu.be/QgQ1E_Tmmz0 https://youtu.be/wDGtbsQYCKI https://youtu.be/xqMQz3vQ3R0 https://youtu.be/SjpEBWyG6_g https://youtu.be/KLmjyMIFkjI https://youtu.be/KiG2TwSMP7A https://youtu.be/dYlDmL7nrac https://youtu.be/6AQSxaFkGCg https://youtu.be/_yEgFsVvXC4 https://youtu.be/aT-MnTRQGeI https://youtu.be/SqmgTPS9H3Q https://youtu.be/YhZ3hcuVb_s https://youtu.be/Mc0E0hHIECw https://youtu.be/F9aN_wqXPgA https://youtu.be/nweJ1FpTh2U https://youtu.be/VUP56eo850U";
//https://youtu.be/e6vDSMlemPE

//ballacid-style
const strChill = "https://youtu.be/nR_4UxbWE68 https://youtu.be/ib-lvhJnV0Q https://youtu.be/nfFkkfbbJrs https://youtu.be/CQdF0ECEbfA https://youtu.be/jOmLWGqYL5M https://youtu.be/PdTi7_PO8UI https://youtu.be/DE4lae15QlY https://youtu.be/1H40oGCLEBM https://youtu.be/UYVaCCTmsz4 https://youtu.be/lwxdhDc6u8U https://youtu.be/T7mG_svMJPE https://youtu.be/jIzeGIGkC4k https://youtu.be/g1R39R6eMuo https://youtu.be/XeU59vIGh5g https://youtu.be/F1yb89JO1xg https://youtu.be/6XUGnzAZxQE";
//https://youtu.be/bGlmqHPYq4k
//https://youtu.be/3Fz_UvJVEvg https://youtu.be/xJbK2UOcxdk

///////////////////////////////////////

const ulText = document.getElementById('ulText');
const moveText = document.getElementById('moveText');
const modal = document.getElementById('modal');
const input = document.getElementById('inpTxt');
const btn = document.getElementById('btn');
const dropdown = document.getElementById('sel');
const speedControl = document.getElementById('slider_input');
const speedCount = document.getElementById('slider_count');
const sliderCount = document.getElementById('slider_count');


let count = 0;
var firstClick = true;
var intervalID;
var arr;

/////////default///////////
var runningNoti = false;
var rotationSpeed = speedControl.value;
setupSpeedbar();
var currentStyle = 'Rammstein';
start(currentStyle);
///////////////////////////

//randomize the array
function shuffle(){
  arr = fyShuffle();
  notification(' shuffled (▀̿Ĺ̯▀̿ ̿) ');
}

//cycle function
//btn.addEventListener('click', go);
function go(){
  if(firstClick == true){
      intervalID = setInterval(cycleArray, rotationSpeed);
      btn.textContent = 'stop';
      btn.classList.add('contrast');
      firstClick = false;
  }else{
      clearInterval(intervalID);
      btn.textContent = 'GO';
      btn.classList.remove('contrast');
      firstClick = true;
  }
}

//if link already in playlist
//input.oninput = function(event){}
function inArray() {
  let text = input.value;
  if(arr.includes(text)){
    notification('(⌐■_■) yes.');
    input.value = '';
    hideModal(modal);
  }
}

//rotation
function cycleArray() {
  let linkText = arr[count];
  moveText.textContent = linkText;
  // increment our counter
  count++;
  // reset counter if we reach end of array
  if (count === arr.length) {
    count = 0;
  }
}

//modal windows
function showModal(el){
  el.setAttribute("open", "");
}
function hideModal(el){
  el.removeAttribute("open", "");
}

////Fischer-Yates algorithm
function fyShuffle() {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
  return arr;
}

//startfunction
//sets ready, clears array, fills array with style (lol)
function start(style){
    speedControl.value = rotationSpeed;
    moveText.textContent = '. . . ready?';
    arr = [];
    switch(style){
    case 'Rammstein' :
      arr = strRam.split(' ');
      break;
    case 'Electronic' :
      arr = strElek.split(' ');
      break;
    case 'Techno' :
      arr = strTechno.split(' ');
      break;
    case 'Chill' :
      arr = strChill.split(' ');
      break;
     default:
        alert('error: selection switch');  
    }
    //console.log(arr);
    currentStyle = style;
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

const ul = document.getElementById('drop');
ul.onclick = function(event) {
    let target = getEventTarget(event);
    let inner = target.textContent; 

    if(currentStyle !== inner){
      //put in startfunction
      start(inner);
      //set inner from ulText
      ulText.textContent = inner;
      //close dropdown
      hideModal(sel);
      notification('flipped! ' + '(╯‵□′)╯︵┻━┻');
    }else{
      notification('＼( °□° )／ there was no change');
    }
};

function deleteDiv(el){
  el.remove();
}

//create notification div
function createNoti(str){

  //div wrapper
  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'corner');
  wrapper.setAttribute('id', 'bottom');
  document.body.appendChild(wrapper);

  //article as child
  let block = document.createElement('article'); 
  block.setAttribute("id", "notification");
  block.textContent = str;
  wrapper.appendChild(block);

  return wrapper;
}

//notification window
function notification(str){

  //aborts running notification
  if(runningNoti){
    fadeOut(document.getElementById('bottom'));
  }

  //creates new notification div
  let wrapper = createNoti(str);
  fadeIn(wrapper);
  
  //fadeout
  setTimeout(function() {
    fadeOut(wrapper);
    }, 2500);
    
}

function fadeIn(el){
  runningNoti = true;
  let bottom = -15;
  let op = 0;
  let timer = setInterval(function(){
    if(bottom>=10){
      clearInterval(timer);
    }
    el.style.bottom = bottom+'%';
    el.style.opacity = op;
    
    bottom += 1;
    op+=0.1;
    
  }, 10);
}

function fadeOut(el){
  let bottom = 10;
  let op = 1;
  let timer = setInterval(function(){
    if(bottom<=-15){
      deleteDiv(el);
      clearInterval(timer);
    }
    el.style.bottom = bottom+'%';
    el.style.opacity = op;
    
    bottom -= 1;
    op -= 0.1;
    
  }, 10);
  runningNoti = false;
}


function openLink(){
 // window.open(moveText.textContent,'newTab','height=400,width=600,,top=250,,scrollbars=yes,menubar=no');
 window.open(moveText.textContent, "_blank");
}


//setup speed - currently only available via console - geek shit
function changeRotationSpeed(number){
  rotationSpeed = number;
}

// das ist so scuffed xD
//this is fucked up code - shame on me
function setupSpeedbar(){
  let speed = speedControl.value;
  let translatedSpeed = 100-speed;
  sliderCount.textContent = 'speed = ' + speed;
  changeRotationSpeed(translatedSpeed);
  //235 -> because it works and i hate css
  let temp = 235-speed;
  speedCount.style.top = temp+'px';
}


speedControl.addEventListener('input', function(){
  setupSpeedbar();
  
});
speedControl.addEventListener('mouseover', function(){
  sliderCount.style.display = 'block';
});
speedControl.addEventListener('mouseout', function(){
  sliderCount.style.display = 'none';
});

/*
TODOs:
BUG: fast stylechange -> empty field --> WARUM???? -> block button for 1s?

Q2: YT API for title preview? possible?
*/
