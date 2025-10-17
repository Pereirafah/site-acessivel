const listaContas = document.getElementById("lista-contas");
const totalContas = document.getElementById("total-contas");
const diferenca = document.getElementById("diferenca");
const dinheiroInput = document.getElementById("dinheiro");

let contas = [];

// Adicionar nova conta
document.getElementById("adicionar").addEventListener("click", () => {
  const descricao = document.getElementById("descricao").value.trim();
    const valor = parseFloat(document.getElementById("valor").value);

      if (!descricao || isNaN(valor) || valor <= 0) {
          alert("Preencha uma descrição e um valor válido!");
              return;
                }

                  contas.push({ descricao, valor });
                    document.getElementById("descricao").value = "";
                      document.getElementById("valor").value = "";
                        atualizarLista();
                        });

                        // Atualizar valores conforme o dinheiro muda
                        dinheiroInput.addEventListener("input", atualizarResumo);

                        // Atualiza lista de contas
                        function atualizarLista() {
                          listaContas.innerHTML = "";
                            contas.forEach((conta, index) => {
                                const li = document.createElement("li");
                                    li.innerHTML = `
                                          <span>${conta.descricao}: R$ ${conta.valor.toFixed(2)}</span>
                                                <button class="remove" onclick="removerConta(${index})">X</button>
                                                    `;
                                                        listaContas.appendChild(li);
                                                          });
                                                            atualizarResumo();
                                                            }

                                                            // Remove uma conta
                                                            function removerConta(index) {
                                                              contas.splice(index, 1);
                                                                atualizarLista();
                                                                }

                                                                // Atualiza o total e diferença
                                                                function atualizarResumo() {
                                                                  const total = contas.reduce((soma, conta) => soma + conta.valor, 0);
                                                                    const dinheiro = parseFloat(dinheiroInput.value) || 0;
                                                                      totalContas.textContent = total.toFixed(2);
                                                                        diferenca.textContent = (dinheiro - total).toFixed(2);
                                                                        }