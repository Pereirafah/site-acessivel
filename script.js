const morse = {
  A: ".-", B: "-...", C: "-.-.", D: "-..",
  E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-",
  U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---",
  3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..",
  9: "----.",
  " ": "/"
};

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function beep(duracao) {
  return new Promise(resolve => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.frequency.value = 700;
    oscillator.type = "sine";

    oscillator.start();

    document.getElementById("luz").classList.add("ligada");

    setTimeout(() => {
      oscillator.stop();
      document.getElementById("luz").classList.remove("ligada");
      resolve();
    }, duracao);
  });
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciar() {
  const texto = document.getElementById("texto").value.toUpperCase();
  let codigo = "";

  for (let letra of texto) {
    if (morse[letra]) {
      codigo += morse[letra] + " ";
    }
  }

  document.getElementById("saida").textContent = codigo;

  for (let simbolo of codigo) {

    if (simbolo === ".") {
      await beep(150);
      await esperar(150);
    }

    if (simbolo === "-") {
      await beep(400);
      await esperar(150);
    }

    if (simbolo === "/") {
      await esperar(600);
    }
  }
}