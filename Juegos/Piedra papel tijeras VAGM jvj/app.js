let puntosP1 = 0;
let puntosP2 = 0;
let loop = 0;
let loopmain = 0;
let loopturno = 1;
const p1Puntos_span = document.getElementById("puntos-P1");
const p2Puntos_span = document.getElementById("puntos-P2");
const tablaPuntos_div = document.querySelector(".tabla-puntos");
const resultado_div = document.querySelector(".resultado > p");
const r1_div = document.getElementById("r1");
const p1_div = document.getElementById("p1");
const t1_div = document.getElementById("t1");
const r2_div = document.getElementById("r2");
const p2_div = document.getElementById("p2");
const t2_div = document.getElementById("t2");
var op1 = "";
var op2 = "";

function traductor(letra){
  if (letra === "r"){
    return "Piedra";
  }else if (letra === "p") {
    return "Papel";
  }else if (letra === "t") {
    return "Tijeras";
  }
}
function P1wins(r1,r2) {
  puntosP1 ++;
  p1Puntos_span.innerHTML = puntosP1;
  p2Puntos_span.innerHTML = puntosP2;
  resultado_div.innerHTML = traductor(r1) + " gana a " + traductor(r2) + ". ¡P1 gana! 🏆";
}
function P2wins(r1,r2) {
  puntosP2 ++;
  p1Puntos_span.innerHTML = puntosP1;
  p2Puntos_span.innerHTML = puntosP2;
  resultado_div.innerHTML = traductor(r2) + " gana a " + traductor(r1) + ". ¡P2 gana! 🏆";
}
function draw(r1,r2) {
  resultado_div.innerHTML = "⚡ " + traductor(r1) + " es igual que " + traductor(r2) + " ⚡";
}
function game(opcionP1,opcionP2) {
  switch (opcionP1 + opcionP2) {
    case "rt":
    case "pr":
    case "tp":
      P1wins(opcionP1,opcionP2);
      break;
    case "rr":
    case "tt":
    case "pp":
      draw(opcionP1,opcionP2);
      break;
    case "pt":
    case "tr":
    case "rp":
      P2wins(opcionP1,opcionP2);
      break;
  }
  loopmain = 0;
  loopturno = 1;
}

function turno(){
  if (loopturno===0){
    r2_div.addEventListener('click', function() {
      if (loopturno===0){
        op2 = "r";
        loopturno++;
        game(op1,op2);
      }
    })

    p2_div.addEventListener('click', function() {
      if (loopturno===0){
        op2 = "p";
        loopturno++;
        game(op1,op2);
      }
    })

    t2_div.addEventListener('click', function() {
      if (loopturno===0){
        op2 = "t";
        loopturno++;
        game(op1,op2);
      }
    })
  }
}

function main() {
  if (loopmain===0){
    r1_div.addEventListener('click', function() {
      if (loopmain===0){
        op1 = "r";
        loopmain++;
        loopturno = 0;
        turno();
      }
    })

    p1_div.addEventListener('click', function() {
      if (loopmain===0){
        op1 = "p";
        loopmain++;
        loopturno = 0;
        turno();
      }
    })

    t1_div.addEventListener('click', function() {
      if (loopmain===0){
        op1 = "t";
        loopmain++;
        loopturno = 0;
        turno();
      }
    })
  }
}
if(loop===0){
  main();
  loop++;
}
