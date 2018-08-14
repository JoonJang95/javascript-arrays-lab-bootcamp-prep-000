// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
<<<<<<< HEAD
  var kittens2 = [...kittens, name]
=======
  kittens2 = kittens.push(name);
>>>>>>> e737fc1f63581dfc1400b2379abb390b8a7e7ae2
  return kittens2;
}

function prependKitten(name) {
<<<<<<< HEAD
  var kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten() {
  var kittens2 = kittens.slice(0,kittens.length - 1)
  return kittens2
}

function removeFirstKitten() {
  var kittens2 = kittens.slice(1);
=======
  kittens2 = kittens.unshift(name);
>>>>>>> e737fc1f63581dfc1400b2379abb390b8a7e7ae2
  return kittens2
}