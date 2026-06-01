const personajes = [
{ id: 1, nombre: "A-Bomb", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
{ id: 2, nombre: "Abe Sapien", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
{ id: 3, nombre: "Abin Sur", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
{ id: 4, nombre: "Abomination", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
{ id: 5, nombre: "Abraxas", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];
function renderCards(lista) {
    const contenedor = document.getElementById("contenedorCards");
    contenedor.innerHTML = "";
    lista.forEach ((personaje) => {
        const col = document.createElement("div");
        col.className = "col-4 my-2";
        col.innerHTML = `
        <div class="card w-100 h-100" style="width: 18rem">
            <img
              src="https://i.pinimg.com/originals/c3/e1/d3/c3e1d329648a2461a8e479e396d2d58c.gif"
              class="card-img-top"
              alt="mi gif"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">guiso</p>
              <a href="#" class="btn btn-primary">god</a>
            </div>
          </div>
          `;
    })
}