// creating animals 
// Using factory method

class lion {
    constructor() {
        this.animal
            animal = "lion"
    
    }
}

class cat {
    constructor() {
        this.animal
            animal = "cat"
    
    }
}

class dog {
    constructor() {
        this.animal
            animal = "dog"
    
    }
}


class AnimalFactory {
    static CreateAnimal(type){
        switch(type) {
            case animal: "lion"
                return new lion ();

            case animal: "cat"
                return new cat ();

            case animal: "dog"
                return new dog ();
                
        default:
            console.log("animal not found")
            // throw Error ("animal not found")
        }
    }
}

//?????
    //idk man 


