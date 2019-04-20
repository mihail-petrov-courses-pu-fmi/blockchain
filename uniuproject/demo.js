// var object = {};

// var fnc = function() {

// };


// var Human = {
//     name : 'Mihail Petrov',
//     age : 27
// };

// var Human1 = {
//     name : 'Atanas',
//     age : 19
// };

// var ObjectConstructor = function(name, age) {

//     var templateObject = {};
//     templateObject.name = name;
//     templateObject.age  = age;
//     return templateObject;
// };

// // Human misho = new Human("Mihail", 27);
// var misho = ObjectConstructor("Mihail", 27);
// var pesho = ObjectConstructor("Petar", 32);


// var FunctionHuman = function(name, age) {
//     this.age = age;
//     this.name = name;
// };

// var funMisho = new FunctionHuman("Mihail", 65)



// var demoPrototype = function(name, age) {

//     this.name   = name;
//     this.age    = age;

//     // Copy in Memory on every object instance
//     // this.sayMyName = function() {
//     //     console.log('Hi my name is : ' + this.name + ' I am ' + this.age + ' years old');
//     // };
// };

// // Copy in global memory just once
// demoPrototype.prototype.sayMyName = function() {
//     console.log('Hi my name is : ' + this.name + ' I am ' + this.age + ' years old');
// };


console.log((new Date()).getTime());