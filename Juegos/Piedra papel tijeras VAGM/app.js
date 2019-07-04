let puntosTu = 0;
let puntosPc = 0;
const tuPuntos_span = document.getElementById("puntos-usuario");
const pcPuntos_span = document.getElementById("puntos-ordenador");
const tablaPuntos_div = document.querySelector(".tabla-puntos");
const resultado_div = document.querySelector(".resultado > p");
let racha = 0;
let record = 0;
const racha_p = document.querySelector(".racha > p");
const record_p = document.querySelector(".record > p");
const r_div = document.getElementById("r");
const p_div = document.getElementById("p");
const t_div = document.getElementById("t");

function f_opcionPC() {
  const opcionesPC = ['r','p','t'];
  const numeroAleatorio = Math.floor(Math.random() *3);
  return opcionesPC[numeroAleatorio];
}

function traductor(letra){
  if (letra === "r"){
    return "Piedra";
  }else if (letra === "p") {
    return "Papel";
  }else if (letra === "t") {
    return "Tijeras";
  }
}

function win(user, ia) {
  puntosTu++;
  racha++;
  if(racha > record){
    record++;
  }
  racha_p.innerHTML = "Racha de victorias: 🔥 " + racha + " 🔥";
  record_p.innerHTML = "Tu record es: " + record;
  tuPuntos_span.innerHTML = puntosTu;
  pcPuntos_span.innerHTML = puntosPc;
  resultado_div.innerHTML = traductor(user) + " gana a " + traductor(ia) + ". ¡Tu ganas! 🏆";
}

function lose(user, ia) {
  puntosPc++;
  racha = 0;
  racha_p.innerHTML = "Racha de victorias: 🔥 " + racha + " 🔥";
  record_p.innerHTML = "Tu record es: " + record;
  tuPuntos_span.innerHTML = puntosTu;
  pcPuntos_span.innerHTML = puntosPc;
  resultado_div.innerHTML = traductor(user) + " pierde contra " + traductor(ia) + ". Has perdido ❌";
}

function draw() {
  resultado_div.innerHTML = "⚡¡Es un empate!⚡";
}

function game(opcionTu) {
  const opcionPC = f_opcionPC();
  switch (opcionTu + opcionPC) {
    case "rt":
    case "pr":
    case "tp":
      win(opcionTu, opcionPC);
      break;
    case "rr":
    case "tt":
    case "pp":
      draw(opcionTu, opcionPC);
      break;
    case "pt":
    case "tr":
    case "rp":
      lose(opcionTu, opcionPC);
      break;
  }
}


function main() {
  r_div.addEventListener('click', function() {
    game("r");
  })

  p_div.addEventListener('click', function() {
    game("p");
  })

  t_div.addEventListener('click', function() {
    game("t");
  })
}

main();
