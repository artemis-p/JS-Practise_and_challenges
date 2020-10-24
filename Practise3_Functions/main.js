// function bark(name, weight) {
//     if (weight > 20 ){
//         console.log(name + " says WOOF WOOF");
//     } else {
//         console.log(name + " says woof woof")
//     }
// }

// bark("rover", "20");
// bark("pete", 15);

// function doIt(param) {
//     param = 2
// }
// var test = 1;
// doIt(test);
// console.log(test);


// function bake(degrees) {
//     var message;
//     if (degrees > 500) {
//         message = "I am not a nuclear reactor!";
//     } else if (degrees < 100) {
//         message = "I'm not a refrigerator!";
//     } else {
//         message = "That's a great temperature to bake cookies";
//         // setMode("bake");
//         // setTemp(degrees);
//     }
//     return message;
// }

// var status = bake(350);

// function clunk(times) {
//     var num = times;
//     while(num > 0) {
//         display("clunk");
//         num = num - 1;
//     }
//     console.log(times)
// }

// function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//         display("clank");
//     } else if (size == 1) {
//         display("thunk");
//     } else {
//         while (size > 1) {
//             facky = facky * size;
//             size = size - 1;
//         }
//         clunk(facky);
//     }
// }

// function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
// }

// var clunkCounter = 0;
// thingamajig(1);
// console.log(clunkCounter);