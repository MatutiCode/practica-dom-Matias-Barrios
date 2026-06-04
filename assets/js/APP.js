const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen:
      "https://i.pinimg.com/736x/6e/85/5d/6e855d78117c6752047968223579ed83.jpg",
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg",
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
  },
];
let catalogo = [...personajes];
let nextId = 6;

const contenedorCards = document.getElementById("contenedorCards");
const inputNombre = document.getElementById("inputNombre");
const inputImagen = document.getElementById("inputImagen");
const btnAgregar = document.getElementById("btnAgregar");
const inputFiltro = document.getElementById("inputFiltro");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnReset = document.getElementById("btnReset");
const alertFormulario = document.getElementById("alertFormulario");

function crearCardHTML({ id, nombre, imagen }) {
  return `
    <div class="col-6 col-sm-4 col-md-3">
      <div class="card card-personaje">
        <img src="${imagen}" alt="${nombre}" />
        <div class="card-body d-flex justify-content-between align-items-center">
          <h6 class="card-title mb-0">${nombre}</h6>
          <button class="btn btn-eliminar btn-sm" data-id="${id}">✕</button>
        </div>
      </div>
    </div>
  `;
}

function renderizarCards(lista) {
  if (lista.length === 0) {
    contenedorCards.innerHTML = `<p class="text-secondary">No se encontraron personajes.</p>`;
  } else {
    contenedorCards.innerHTML = lista.map(crearCardHTML).join("");
  }
}

function agregarPersonaje() {
  const nombre = inputNombre.value.trim();
  const imagen = inputImagen.value.trim();

  if (!nombre || !imagen) {
    alertFormulario.textContent = "Completá los dos campos.";
    alertFormulario.classList.remove("d-none");
    setTimeout(() => alertFormulario.classList.add("d-none"), 3000);
    return;
  }

  catalogo.push({ id: nextId++, nombre, imagen });
  inputNombre.value = "";
  inputImagen.value = "";
  renderizarCards(catalogo);
}

function eliminarPersonaje(id) {
  catalogo = catalogo.filter((p) => p.id !== Number(id));
  renderizarCards(catalogo);
}

function aplicarFiltro() {
  const texto = inputFiltro.value.trim().toLowerCase();
  const resultado = texto
    ? catalogo.filter(({ nombre }) => nombre.toLowerCase().includes(texto))
    : catalogo;
  renderizarCards(resultado);
}

btnAgregar.addEventListener("click", agregarPersonaje);
btnFiltrar.addEventListener("click", aplicarFiltro);
btnReset.addEventListener("click", () => {
  inputFiltro.value = "";
  renderizarCards(catalogo);
});

contenedorCards.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-eliminar");
  if (boton) eliminarPersonaje(boton.dataset.id);
});

renderizarCards(catalogo);
