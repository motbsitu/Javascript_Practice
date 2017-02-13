//use uppercase to create constructor
function Player(n, s, r){
  this.name = n;
  this.score = s;
  this.rank = r;
}

Player.prototype.logInfo = function () {
  console.log("I am:", this.name);
};

Player.prototype.promote = function(){
  this.rank++;
  console.log("my new rank: ", this.rank);
}

var fred = new Player("Fred",10000,5);
fred.logInfo();
fred.promote();

var bob = new Player("Bob",1000,1);
bob.logInfo();
bob.promote();
