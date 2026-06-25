class Vehicle {
    constructor(licensePlate, size) {
      this.licensePlate = licensePlate;
      this.size = size;
    }
  }
  
  class ParkingSpot {
    constructor(id, size) {
      this.id = id;
      this.size = size;
      this.isAvailable = true;
    }
  }
  
  class Ticket {
    constructor(vehicle, spot) {
      this.id = Date.now().toString();
      this.vehicle = vehicle;
      this.spot = spot;
      this.entryTime = new Date();
    }
  }
  
  class PricingStrategy {
    calculate(ticket) {}
  }
  
  class HourlyPricing extends PricingStrategy {
    calculate(ticket) {
      const hours = Math.ceil((new Date() - ticket.entryTime) / 3600000);
      return hours * 10;
    }
  }
  
  class ParkingManager {
    constructor() {
      this.availableSpots = { small: [], medium: [], large: [] };
    }
    addSpot(spot) {
      this.availableSpots[spot.size].push(spot);
    }
    findAndReserveSpot(vehicleSize) {
      const spots = this.availableSpots[vehicleSize];
      if (spots && spots.length > 0) {
        const spot = spots.pop();
        spot.isAvailable = false;
        return spot;
      }
      return null;
    }
    releaseSpot(spot) {
      spot.isAvailable = true;
      this.availableSpots[spot.size].push(spot);
    }
  }
  
  class ParkingLot {
    constructor(pricingStrategy) {
      this.manager = new ParkingManager();
      this.pricingStrategy = pricingStrategy;
      this.activeTickets = new Map();
    }
    entry(vehicle) {
      const spot = this.manager.findAndReserveSpot(vehicle.size);
      if (!spot) throw new Error("Lot full");
      const ticket = new Ticket(vehicle, spot);
      this.activeTickets.set(ticket.id, ticket);
      return ticket;
    }
    exit(ticketId) {
      const ticket = this.activeTickets.get(ticketId);
      if (!ticket) throw new Error("Invalid ticket");
      const fee = this.pricingStrategy.calculate(ticket);
      this.manager.releaseSpot(ticket.spot);
      this.activeTickets.delete(ticketId);
      return fee;
    }
  }