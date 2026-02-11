const grid = document.getElementById("grid");
const saldoSpan = document.getElementById("saldo");
const resultado = document.getElementById("resultado");
const turbo = document.getElementById("turbo");

let saldo = 1000;
let custo = 5;

const simbolos = [
  { icon: "🍃", valor: 5 },
    { icon: "💨", valor: 10 },
      { icon: "⚡", valor: 25 },
        { icon: "🌊", valor: 50 },
          { icon: "🌪️", valor: 100 }
          ];

          let cells = [];

          function criarGrid() {
            grid.innerHTML = "";
              cells = [];
                for (let i = 0; i < 9; i++) {
                    const cell = document.createElement("div");
                        cell.classList.add("cell");
                            grid.appendChild(cell);
                                cells.push(cell);
                                  }
                                  }

                                  criarGrid();

                                  function girar() {
                                    if (saldo < custo) {
                                        resultado.innerText = "Saldo insuficiente!";
                                            return;
                                              }

                                                saldo -= custo;
                                                  saldoSpan.innerText = saldo;
                                                    resultado.innerText = "";

                                                      const velocidade = turbo.checked ? 100 : 400;

                                                        cells.forEach((cell, index) => {
                                                            setTimeout(() => {
                                                                  const rand = Math.random();

                                                                        let simbolo;

                                                                              // 97% erro (aleatório)
                                                                                    if (rand < 0.97) {
                                                                                            simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
                                                                                                  } else {
                                                                                                          simbolo = simbolos[4]; // furacão raro
                                                                                                                }

                                                                                                                      cell.innerText = simbolo.icon;
                                                                                                                            cell.dataset.valor = simbolo.valor;
                                                                                                                                  cell.classList.add("fall");
                                                                                                                                        setTimeout(() => cell.classList.remove("fall"), 300);

                                                                                                                                            }, index * velocidade);
                                                                                                                                              });

                                                                                                                                                setTimeout(verificarResultado, 1200);
                                                                                                                                                }

                                                                                                                                                function verificarResultado() {

                                                                                                                                                  const linhas = [
                                                                                                                                                      [0,1,2],
                                                                                                                                                          [3,4,5],
                                                                                                                                                              [6,7,8],
                                                                                                                                                                  [0,4,8],
                                                                                                                                                                      [2,4,6]
                                                                                                                                                                        ];

                                                                                                                                                                          let totalGanho = 0;

                                                                                                                                                                            linhas.forEach(linha => {
                                                                                                                                                                                const [a,b,c] = linha;

                                                                                                                                                                                    if (
                                                                                                                                                                                          cells[a].innerText &&
                                                                                                                                                                                                cells[a].innerText === cells[b].innerText &&
                                                                                                                                                                                                      cells[a].innerText === cells[c].innerText
                                                                                                                                                                                                          ) {
                                                                                                                                                                                                                const valor = parseInt(cells[a].dataset.valor);
                                                                                                                                                                                                                      const ganho = valor * 3;
                                                                                                                                                                                                                            totalGanho += ganho;

                                                                                                                                                                                                                                  linha.forEach(i => cells[i].classList.add("win-pulse"));
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                          if (totalGanho > 0) {
                                                                                                                                                                                                                                              saldo += totalGanho;
                                                                                                                                                                                                                                                  saldoSpan.innerText = saldo;
                                                                                                                                                                                                                                                      resultado.innerText = `🎉 Você ganhou ${totalGanho} pontos!`;

                                                                                                                                                                                                                                                          setTimeout(() => {
                                                                                                                                                                                                                                                                cells.forEach(c => c.classList.remove("win-pulse"));
                                                                                                                                                                                                                                                                    }, 2000);
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                      }