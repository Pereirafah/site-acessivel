const dinheiroInput = document.getElementById("dinheiro");
const contasContainer = document.getElementById("contas-container");
const totalAPagar = document.getElementById("total-a-pagar");
const saldoRestante = document.getElementById("saldo-restante");

let contas = [];

document.getElementById("adicionar").addEventListener("click", () => {
  const descricao = document.getElementById("descricao").value.trim();
    const valor = parseFloat(document.getElementById("valor").value);

      if (!descricao || isNaN(valor) || valor <= 0) {
          alert("Preencha corretamente o nome e o valor da conta!");
              return;
                }

                  contas.push({ descricao, valor, pago: 0 });
                    document.getElementById("descricao").value = "";
                      document.getElementById("valor").value = "";
                        atualizarContas();
                        });

                        function atualizarContas() {
                          contasContainer.innerHTML = "";
                            let totalPagar = 0;

                              contas.forEach((conta, index) => {
                                  const falta = conta.valor - conta.pago;
                                      totalPagar += falta;

                                          const contaDiv = document.createElement("div");
                                              contaDiv.classList.add("conta-box");
                                                  contaDiv.innerHTML = `
                                                        <div class="conta-header">
                                                                <h3>${conta.descricao}</h3>
                                                                        <button class="remove-btn" onclick="removerConta(${index})">X</button>
                                                                              </div>
                                                                                    <div class="valor-info">
                                                                                            <p><strong>Valor total:</strong> R$ ${conta.valor.toFixed(2)}</p>
                                                                                                    <label>Quanto já pagou:</label>
                                                                                                            <input type="number" value="${conta.pago}" oninput="atualizarPago(${index}, this.value)">
                                                                                                                    <p><strong>Falta pagar:</strong> <span>R$ ${falta.toFixed(2)}</span></p>
                                                                                                                          </div>
                                                                                                                              `;
                                                                                                                                  contasContainer.appendChild(contaDiv);
                                                                                                                                    });

                                                                                                                                      totalAPagar.textContent = totalPagar.toFixed(2);
                                                                                                                                        atualizarSaldo();
                                                                                                                                        }

                                                                                                                                        function removerConta(index) {
                                                                                                                                          contas.splice(index, 1);
                                                                                                                                            atualizarContas();
                                                                                                                                            }

                                                                                                                                            function atualizarPago(index, valorPago) {
                                                                                                                                              contas[index].pago = parseFloat(valorPago) || 0;
                                                                                                                                                atualizarContas();
                                                                                                                                                }

                                                                                                                                                function atualizarSaldo() {
                                                                                                                                                  const dinheiro = parseFloat(dinheiroInput.value) || 0;
                                                                                                                                                    const totalFalta = contas.reduce((soma, c) => soma + (c.valor - c.pago), 0);
                                                                                                                                                      saldoRestante.textContent = (dinheiro - totalFalta).toFixed(2);
                                                                                                                                                      }

                                                                                                                                                      dinheiroInput.addEventListener("input", atualizarSaldo);