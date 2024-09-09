const arrayAnno = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let countMesi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let countAnno = 0;

let x;
let y;
let z;
let min;
let max;

let mese;
let gg;
let bg;
let grid;



function meseIN(x) {
  mese = document.getElementsByClassName('mese-main');
  mese[x].style.display = "block";
  document.getElementById('main').style.display = "none";
}
function meseOUT(x) {
  mese = document.getElementsByClassName('mese-main');
  mese[x].style.display = "none";
  document.getElementById('main').style.display = "block";
}



function dayDEC(y) {
  if (arrayAnno[y] > 0) {
    arrayAnno[y]--;
    countAnno -= 2;
    if (y >= 0 && y < 31) {
      countMesi[0] -= 2;
    } else if (y >= 31 && y < 60) {
      countMesi[1] -= 2;
    } else if (y >= 60 && y < 91) {
      countMesi[2] -= 2;
    } else if (y >= 91 && y < 121) {
      countMesi[3] -= 2;
    } else if (y >= 121 && y < 152) {
      countMesi[4] -= 2;
    } else if (y >= 152 && y < 182) {
      countMesi[5] -= 2;
    } else if (y >= 182 && y < 213) {
      countMesi[6] -= 2;
    } else if (y >= 213 && y < 244) {
      countMesi[7] -= 2;
    } else if (y >= 244 && y < 274) {
      countMesi[8] -= 2;
    } else if (y >= 274 && y < 305) {
      countMesi[9] -= 2;
    } else if (y >= 305 && y < 335) {
      countMesi[10] -= 2;
    } else if (y >= 335 && y < 366) {
      countMesi[11] -= 2;
    }
  }
  bg = document.getElementsByClassName("mese-grid-item-casella");
  if (arrayAnno[y] < 10) {
    bg[y].style.background = "white";
  }
  gg = document.getElementsByClassName("mese-grid-item-casella-bottom-num");
  gg[y].innerHTML = arrayAnno[y];
}



function dayINC(y) {
  if (arrayAnno[y] < 10) {
    arrayAnno[y]++;
    countAnno += 2;
    if (y >= 0 && y < 31) {
      countMesi[0] += 2;
    } else if (y >= 31 && y < 60) {
      countMesi[1] += 2;
    } else if (y >= 60 && y < 91) {
      countMesi[2] += 2;
    } else if (y >= 91 && y < 121) {
      countMesi[3] += 2;
    } else if (y >= 121 && y < 152) {
      countMesi[4] += 2;
    } else if (y >= 152 && y < 182) {
      countMesi[5] += 2;
    } else if (y >= 182 && y < 213) {
      countMesi[6] += 2;
    } else if (y >= 213 && y < 244) {
      countMesi[7] += 2;
    } else if (y >= 244 && y < 274) {
      countMesi[8] += 2;
    } else if (y >= 274 && y < 305) {
      countMesi[9] += 2;
    } else if (y >= 305 && y < 335) {
      countMesi[10] += 2;
    } else if (y >= 335 && y < 366) {
      countMesi[11] += 2;
    }
  } else {
    window.alert("Limite stanze raggiunto!");
  }
  bg = document.getElementsByClassName("mese-grid-item-casella");
  if (arrayAnno[y] == 10) {
    bg[y].style.background = "crimson";
  }
  gg = document.getElementsByClassName("mese-grid-item-casella-bottom-num");
  gg[y].innerHTML = arrayAnno[y];
}



function meseINFO(z, min, max) {
  document.getElementById("main-info").style.display = "block";
  let infoIndex = document.getElementsByClassName("main-info-content-num");
  infoIndex[1].innerHTML = countAnno;
  infoIndex[0].innerHTML = countMesi[z];
  casellaNum = document.getElementsByClassName("mese-grid-item-casella-bottom-num");
  infoIndex[2].innerHTML = "";
  infoIndex[3].innerHTML = "";
  for (let i = min; i < max; i++) {
    if (arrayAnno[i] == 0) {
      if(z == 0){
        infoIndex[2].innerHTML += " " + (i + 1);
      } else if(z == 1){
        infoIndex[2].innerHTML += " " + ((i + 1) - 31);
      } else if(z == 2){
        infoIndex[2].innerHTML += " " + ((i + 1) - 60);
      } else if(z == 3){
        infoIndex[2].innerHTML += " " + ((i + 1) - 91);
      } else if(z == 4){
        infoIndex[2].innerHTML += " " + ((i + 1) - 121);
      } else if(z == 5){
        infoIndex[2].innerHTML += " " + ((i + 1) - 152);
      } else if(z == 6){
        infoIndex[2].innerHTML += " " + ((i + 1) - 182);
      } else if(z == 7){
        infoIndex[2].innerHTML += " " + ((i + 1) - 213);
      } else if(z == 8){
        infoIndex[2].innerHTML += " " + ((i + 1) - 244);
      } else if(z == 9){
        infoIndex[2].innerHTML += " " + ((i + 1) - 274);
      } else if(z == 10){
        infoIndex[2].innerHTML += " " + ((i + 1) - 305);
      } else if(z == 11){
        infoIndex[2].innerHTML += " " + ((i + 1) - 335);
      }
    }
    if (arrayAnno[i] == 10) {
      if(z == 0){
        infoIndex[3].innerHTML += " " + (i + 1);
      } else if(z == 1){
        infoIndex[3].innerHTML += " " + ((i + 1) - 31);
      } else if(z == 2){
        infoIndex[3].innerHTML += " " + ((i + 1) - 60);
      } else if(z == 3){
        infoIndex[3].innerHTML += " " + ((i + 1) - 91);
      } else if(z == 4){
        infoIndex[3].innerHTML += " " + ((i + 1) - 121);
      } else if(z == 5){
        infoIndex[3].innerHTML += " " + ((i + 1) - 152);
      } else if(z == 6){
        infoIndex[3].innerHTML += " " + ((i + 1) - 182);
      } else if(z == 7){
        infoIndex[3].innerHTML += " " + ((i + 1) - 213);
      } else if(z == 8){
        infoIndex[3].innerHTML += " " + ((i + 1) - 244);
      } else if(z == 9){
        infoIndex[3].innerHTML += " " + ((i + 1) - 274);
      } else if(z == 10){
        infoIndex[3].innerHTML += " " + ((i + 1) - 305);
      } else if(z == 11){
        infoIndex[3].innerHTML += " " + ((i + 1) - 335);
      }
    }
  }
  grid = document.getElementsByClassName("mese-grid");
  grid[z].style.display = "none";
}



function meseINFOclose() {
  document.getElementById("main-info").style.display = "none";
  grid = document.getElementsByClassName("mese-grid");
  for (let i = 0; i < 12; i++) {
    grid[i].style.display = "grid";
  }
}