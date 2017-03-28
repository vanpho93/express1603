class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const pho = new Person('Pho', 18);
pho.height = 180;
// console.log(console);
// a();

Person.prototype.show = function() {
    console.log(this.name, this.age);
};

// console.log(pho.show);
// console.log(pho);