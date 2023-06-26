



async function obtenerDatos() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const datos = await response.json();

    return datos.results;
  } catch (error) {
    console.log("Ha ocurrido un error: ", error);
  }
}

async function mostrarDatos() {
  const resultados = await obtenerDatos();

  if (resultados) {
    for (let i = 0; i < resultados.length; i++) {
      const pokemon = resultados[i];

      const responsePokemon = await fetch(pokemon.url);
      const datosPokemon = await responsePokemon.json();

      const speciesName = datosPokemon.species.name;
      const spriteUrl = datosPokemon.sprites.front_default;

      console.log("Species Name:", speciesName);
      console.log("Sprite URL:", spriteUrl);

      const article = document.createRange().createContextualFragment(`
        <article>
          <h2>${speciesName}</h2>
          <div class="Pokemones">
            <img src="${spriteUrl}" alt="Pokemon">
          </div>
        </article>
      `);
      const main = document.querySelector("#main");
      main.append(article);
    }
  }
}

mostrarDatos();


