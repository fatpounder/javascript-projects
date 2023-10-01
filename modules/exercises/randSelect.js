
function randFromArray(arr){
  let randNum = Math.floor(Math.random()*arr.length);
  return arr[randNum];
}

//TODO: Export the randomFromArray function.

module.exports = randFromArray