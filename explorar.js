//Parte 1
async function explorar() {
  const respuesta = await(fetch("https://pokeapi.co/api/v2/pokemon/pikachu"));
  console.log("Status: ", respuesta.status);
  const datos = await respuesta.json();
  console.log("Datos: ", datos);

  console.log("Tipos");
  for (const t of datos.types) {
    console.log(t.type.name);
  }
  console.log(" ")

  
  console.log("Starts");
  for (const s of datos.stats) {
    console.log(s.stat.name, ":", s.base_stat);
  }

  console.log(" ")
  
  
  console.log("Habilidades");
  for (const a of datos.abilities) {
    console.log(a.ability.name);
  }
  console.log(" ")
}
explorar();

//Parte 2

