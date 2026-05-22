// creating animals 
// Using factory method

class lion {
    constructor() {
        this.animal = "lion";
    }
    emote() {
        console.log("roar");
    }
}

class cat {
    constructor() {
        this.animal = "cat";
    }
        emote() {
        console.log("meow");
    }
}

class dog {
    constructor() {
        this.animal = "dog";
    }
        emote() {
        console.log("woof");
    }
}

class fish   {
    constructor() {
        this.animal = "fish";
    }

    emote() {
        console.log(`...`);
    }
}

class AnimalFactory {
    static CreateAnimal(type) {
        switch(type) {
            case type: "lion"
                return new lion ();

            case type: "cat"
                return new cat ();

            case type: "dog"
                return new dog ();
                
            case type: "fish"
                return new fish ();
                
        default:
            console.log("animal not found")
            // throw Error ("animal not found")
        }
    }
}

const animal = AnimalFactory.CreateAnimal('lion');
console.log(animal);
animal.emote();

//?????
    //idk man 


