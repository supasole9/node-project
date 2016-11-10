function User () {
  this.name = '';
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer){
    targetPlayer.life += 1;
    console.log(this.name + ' gave life to '+ targetPlayer.name);
  }
}

var Ross = new User ();
var Danica = new User ();

Ross.name = 'Ross';
Danica.name = 'Danica';

Ross.giveLife(Danica);
console.log(Ross.life);
console.log(Danica.life);

User.prototype.uppercut = function uppercut(targetPlayer) {
  targetPlayer.life -= 3;
  console.log(this.name + ' just uppercut '+ targetPlayer.name);
}

Danica.uppercut(Ross);
console.log(Ross.life);
console.log(Danica.life);
