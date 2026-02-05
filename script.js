const salas = document.querySelectorAll(".sala");
const modal = document.getElementById("modal");
const modalTexto = document.getElementById("modal-texto");
const fechar = document.getElementById("fechar");

salas.forEach(sala => {
  sala.addEventListener("click", () => {
      const info = sala.getAttribute("data-info");
          modalTexto.textContent = info;
              modal.style.display = "flex";
                });
                });

                fechar.addEventListener("click", () => {
                  modal.style.display = "none";
                  });

                  modal.addEventListener("click", (e) => {
                    if (e.target === modal) {
                        modal.style.display = "none";
                          }
                          });