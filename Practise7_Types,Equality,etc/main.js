var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
    alert(presentableText);
}
console.log(presentableText);

var phoneNumber = "123-4567";
function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}