// data es el array suministrado
// characters es un array global vacio que se va a crear con la data procesada
function processData(data) {
  data.map((item) => {
    const character = {
      name: item.name,
      location: item.location.name,
      img: item.image,
      specie: item.species
    };
    characters.push(character);
  });
}