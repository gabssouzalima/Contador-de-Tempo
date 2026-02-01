// Input e botão
const inputData = document.getElementById("data");
const botaoIniciar = document.getElementById("iniciar");

// Containers
const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

// Elementos do contador
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

let intervalo = null;

// Esconde tudo ao iniciar
contador.classList.add("hidden");
mensagem.classList.add("hidden");

// Função que calcula a diferença em milissegundos
const calcularMillisegundos = () => {
  const agora = new Date();
  const dataEscolhida = new Date(inputData.value);
  return dataEscolhida - agora;
};

botaoIniciar.addEventListener("click", () => {
  const diferenca = calcularMillisegundos();

  // Validação
  if (isNaN(diferenca) || diferenca <= 0) {
    mensagem.textContent = "Data inválida. Escolha uma data futura.";
    mensagem.classList.remove("hidden");
    contador.classList.add("hidden");
    return;
  }

  // Interface correta
  mensagem.classList.add("hidden");
  contador.classList.remove("hidden");

  // Evita múltiplos intervalos
  if (intervalo) clearInterval(intervalo);

  intervalo = setInterval(() => {
    const ms = calcularMillisegundos();

    // Quando acabar o tempo
    if (ms <= 0) {
      clearInterval(intervalo);

      diasEl.textContent = 0;
      horasEl.textContent = 0;
      minutosEl.textContent = 0;
      segundosEl.textContent = 0;

      mensagem.textContent = "Tempo encerrado!";
      mensagem.classList.remove("hidden");
      return;
    }

    const totalSegundos = Math.floor(ms / 1000);

    const dias = Math.floor(totalSegundos / (60 * 60 * 24));
    const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    const segundos = totalSegundos % 60;

    diasEl.textContent = dias;
    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
  }, 1000);
});
