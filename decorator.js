// Base component
// Defines methods all sponsorship types must have
class Sponsorship {

    getDescription(){}

    getAmount(){}

}
// Concrete component
// Basic sponsorship package without extras
class BasicSponsorship extends Sponsorship {

    getDescription(){

        return "Animal Sponsorship";

    }

    getAmount(){

        return 100;

    }

}
// Base Decorator
// Stores an existing sponsorship object
// and forwards requests to it
class SponsorshipDecorator
extends Sponsorship {

    constructor(sponsorship){

        super();

        // Save existing sponsorship
        this.sponsorship =
        sponsorship;

    }

    getDescription(){

        return this.sponsorship
        .getDescription();

    }

    getAmount(){

        return this.sponsorship
        .getAmount();

    }

}


// Concrete Decorator
// Adds newsletter option
class NewsletterDecorator
extends SponsorshipDecorator {

    getDescription(){

        return this.sponsorship
        .getDescription()
        + " + Newsletter";

    }

    getAmount(){

        // Add extra cost
        return this.sponsorship
        .getAmount()+20;

    }

}


// Concrete Decorator
// Adds VIP zoo visit
class VIPVisitDecorator
extends SponsorshipDecorator {

    getDescription(){

        return this.sponsorship
        .getDescription()
        + " + VIP Visit";

    }

    getAmount(){

        // Add VIP cost
        return this.sponsorship
        .getAmount()+50;

    }

}