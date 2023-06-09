const pDiaMes = document.getElementById("diames");
const pDia = document.getElementById("dia");
const pMes = document.getElementById("mes");
const pAño = document.getElementById("año");
const pHora = document.getElementById("hora");
const pMinutos = document.getElementById("minutos");
const pSegundos = document.getElementById("segundos");
const pAMPM = document.getElementById("ampm");

const clickBtn = document.getElementById("toggle");
const btnToggle = document.getElementById("btn_toggle");

const updateTheme = (e) => {
  let checked = e.target.checked;
  document.body.classList.toggle("dark");

  if (checked == true) {
    btnToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    btnToggle.style.color = "yellow";
    localStorage.setItem("isChecked", "true");
  } else {
    btnToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    btnToggle.style.color = "gray";
    localStorage.setItem("isChecked", "false");
  }
};
clickBtn.addEventListener("change", (e) => {
  updateTheme(e);
});

window.addEventListener("DOMContentLoaded", () => {
  const isChecked = localStorage.getItem("isChecked");
  if (isChecked === "true") {
    clickBtn.checked = true;
    document.body.classList.add("dark");
    btnToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    btnToggle.style.color = "yellow";
  } else {
    clickBtn.checked = false;
    document.body.classList.remove("dark");
    btnToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    btnToggle.style.color = "gray";
  }
});

function actualizarHoras() {
  let fecha = new Date();
  let diaMes = fecha.getDay();
  let dia = fecha.getDate();
  let mes = fecha.getMonth();
  let año = fecha.getFullYear();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let ampm;

  let semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  pDiaMes.textContent = semana[diaMes];
  pDia.textContent = dia;
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  pMes.textContent = meses[mes];
  pAño.textContent = año;

  if (hora >= 12) {
    hora = hora - 12;
    ampm = "p.m";
  } else {
    ampm = "a.m";
  }

  if (hora == 0) {
    hora = 12;
  }

  pHora.textContent = hora;
  pAMPM.textContent = ampm;

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  pMinutos.textContent = minutos;
  pSegundos.textContent = segundos;
}

actualizarHoras();

const actualizarIntervalo = setInterval(() => {
  actualizarHoras();
}, 1000);
