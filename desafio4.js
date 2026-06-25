class Observer {
    update(location) {}
  }
  
  class Subject {
    constructor() {
      this.observers = [];
    }
    addObserver(observer) {
      this.observers.push(observer);
    }
    notifyObservers(location) {
      for (let obs of this.observers) obs.update(location);
    }
  }
  
  class Driver extends Subject {
    constructor(id, location) {
      super();
      this.id = id;
      this.location = location;
    }
    updateLocation(newLocation) {
      this.location = newLocation;
      this.notifyObservers(this.location);
    }
  }
  
  class Rider extends Observer {
    constructor(id) {
      super();
      this.id = id;
    }
    update(location) {}
  }
  
  class TripState {
    transition(trip) {}
  }
  
  class RequestedState extends TripState {
    transition(trip) {
      trip.state = new DriverAssignedState();
    }
  }
  
  class DriverAssignedState extends TripState {
    transition(trip) {
      trip.state = new InProgressState();
    }
  }
  
  class InProgressState extends TripState {
    transition(trip) {
      trip.state = new CompletedState();
    }
  }
  
  class CompletedState extends TripState {}
  
  class PricingStrategy {
    calculate(distance) {}
  }
  
  class SurgePricing extends PricingStrategy {
    calculate(distance) {
      return distance * 2.5;
    }
  }
  
  class Trip {
    constructor(rider, driver, distance, pricingStrategy) {
      this.rider = rider;
      this.driver = driver;
      this.distance = distance;
      this.state = new RequestedState();
      this.price = pricingStrategy.calculate(distance);
      this.driver.addObserver(this.rider);
    }
    nextState() {
      this.state.transition(this);
    }
  }