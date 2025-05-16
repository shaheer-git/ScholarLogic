class Human {
    constructor(name, age, street) {
        this.name = name;   
        this.age = age;   
        this.street = street;   
    }
    getFullDetails = function() {
        let obj = {
            name: this.name,
            age: this.age,
            street: this.street
        }
        return obj;
    }
}

class Male extends Human{
    constructor(parameters) {
        
    }
}

let human = new Human("Shaheer", 28, "BTM");
console.log(human.getFullDetails())

// 2. Way of writing a standard code.

let Login = {
    handleInputs: () => {

    },
    handleSubmit: () => {

    },
    handleResetForData: () => {

    }
}

// 3. way

(function () {
    
})();