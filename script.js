function girar() {
      const simbolos = ["🍒", "🍋", "🍇", "⭐", "💎"];
          
              const slot1 = document.getElementById("slot1");
                  const slot2 = document.getElementById("slot2");
                      const slot3 = document.getElementById("slot3");
                          const resultado = document.getElementById("resultado");

                              // Gira aleatório visualmente
                                  slot1.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
                                      slot2.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
                                          slot3.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

                                              // Probabilidade controlada
                                                  const chance = Math.random();

                                                      if (chance <= 0.03) { 
                                                              // 3% de chance de ganhar
                                                                      slot1.textContent = "💎";
                                                                              slot2.textContent = "💎";
                                                                                      slot3.textContent = "💎";
                                                                                              resultado.textContent = "🎉 JACKPOT! Você ganhou!";
                                                                                                      resultado.style.color = "lime";
                                                                                                          } else {
                                                                                                                  resultado.textContent = "❌ Você perdeu! Tente novamente.";
                                                                                                                          resultado.style.color = "red";
                                                                                                                              }
                                                                                                                              }
}