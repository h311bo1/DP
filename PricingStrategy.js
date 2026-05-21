//price starategy
//Using strategy method 
class PricingStrategy {
  calculatePrice() {}
}


//adult price 
class AdultPricing extends PricingStrategy {
  calculatePrice() {
    return 20;
  }
}

//senior price
class SeniorPricing extends PricingStrategy {
  calculatePrice() {
    return 15;

  }
}

//student price 
class StudentPricing extends PricingStrategy {
  calculatePrice() {
    return 10;
  }
}

//price for kids
class ChildPricing extends PricingStrategy {
  calculatePrice() {
    return 5;
  }
}
