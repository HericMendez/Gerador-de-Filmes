const titulos = require("./data");

const tituloFilme = (mod, cat) => {

  let arr = "";
  switch (cat) {
    case "filmes":
      arr = titulos.filmes;

      break;
    case "series":
      arr = titulos.series;
      break;

  }
  if(arr!=""){
      const randomMovie = arr[Math.floor(Math.random() * arr.length)];

  const myArr = randomMovie.split(" ");
  let rng = "";
  while (rng.length < 4) {
    rng = myArr[Math.floor(Math.random() * myArr.length)];
  }

  const joined = myArr.join(" ");

  const newMovie = joined.replace(rng, mod);

  const newObj = { 
    categoria: cat,
    original: randomMovie, 
    alterado: newMovie 
  };
  
  return newObj;
  }else{
    return {erro:"Selecione uma categoria!"}
  }

};


module.exports = tituloFilme;
const values = {
  mod:"cu",
  categoria: "filmes"
}

//console.log(tituloFilme("cu", "filmes"));





