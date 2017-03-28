class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show() {
        console.log('Hello, I am ' + this.name);
    }
}

class Child extends Person {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
    show() {
        console.log('Hi, I am ' + this.name + ' I am ' + this.age);
    }
    play() {
        console.log(this.name + ' is Playing ' + this.hobby +'.');
    }
}
const ti = new Child('Ti', 3, 'Baseball');
ti.show();
ti.play();
// console.log(ti);