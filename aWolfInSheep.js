let queue = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep"
]; //
let queuere = queue.reverse().indexOf("wolf");
if (queuere == 0) {
  console.log("Pls go away and stop eating my sheep");
} else if (queuere > 0) {
  console.log(
    "Oi! Sheep number " + queuere + "! You are about to be eaten by a wolf!"
  );
}
