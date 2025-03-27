document.addEventListener("DOMContentLoaded", function() { 
  const horariosDisponiveisLista = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
  let horarioInput = document.getElementById("horarioInput");
  let horariosDisponiveisDiv = document.getElementById("horariosDisponiveis");

  function mostrarHorariosDisponiveis() {
    horariosDisponiveisDiv.innerHTML = "";
    horariosDisponiveisLista.forEach(hora => {
      let botaoHora = document.createElement("button");
      botaoHora.textContent = hora;
      botaoHora.classList.add("btn", "m-1");

      botaoHora.style.backgroundColor = "#BC6C25";
      botaoHora.style.borderColor = "#BC6C25";
      botaoHora.style.color = "white";

      botaoHora.addEventListener("click", function() {
        horarioInput.value = hora;
      });

      botaoHora.addEventListener("mouseover", function() {
        botaoHora.style.backgroundColor = "#DDA15E";
        botaoHora.style.borderColor = "#DDA15E";
      });

      botaoHora.addEventListener("mouseout", function() {
        botaoHora.style.backgroundColor = "#BC6C25";
        botaoHora.style.borderColor = "#BC6C25";
      });

      horariosDisponiveisDiv.appendChild(botaoHora);
    });
  }

  mostrarHorariosDisponiveis();

  document.getElementById("formAgendamento").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let horario = horarioInput.value;
    
    if (!horariosDisponiveisLista.includes(horario)) {
      alert("Por favor, escolha um horário válido.");
      return;
    }
    
    alert(`Agendamento confirmado!\nNome: ${nome}\nTelefone: ${telefone}\nHorário: ${horario}`);
    
    let modalElement = document.getElementById('agendamentoModal');
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) modalInstance.hide();

    document.getElementById("formAgendamento").reset();
  });
});
