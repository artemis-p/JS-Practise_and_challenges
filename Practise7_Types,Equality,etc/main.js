// var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
// var presentableText = text.toLowerCase();
// if (presentableText.length > 0) {
//     alert(presentableText);
// }
// console.log(presentableText);

// var phoneNumber = "123-4567";
// function validate(phoneNumber) {
//     return phoneNumber.match(/^\d{3}-?\d{4}$/);
// }

function Duck(sound) {
    this.sound = sound;
    this.quack = function() { console.log(this.sound); }
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck); 