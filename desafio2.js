class State {
    insertMoney(machine, amount) {}
    selectProduct(machine, productId) {}
    dispense(machine) {}
    cancel(machine) {}
  }
  
  class IdleState extends State {
    selectProduct(machine, productId) {
      const product = machine.inventory.get(productId);
      if (product && product.quantity > 0) {
        machine.selectedProduct = product;
        machine.setState(machine.hasMoneyState);
      }
    }
  }
  
  class HasMoneyState extends State {
    insertMoney(machine, amount) {
      machine.balance += amount;
      if (machine.balance >= machine.selectedProduct.price) {
        machine.setState(machine.dispenseState);
        machine.dispense();
      }
    }
    cancel(machine) {
      machine.balance = 0;
      machine.selectedProduct = null;
      machine.setState(machine.idleState);
    }
  }
  
  class DispenseState extends State {
    dispense(machine) {
      machine.selectedProduct.quantity -= 1;
      const change = machine.balance - machine.selectedProduct.price;
      machine.balance = 0;
      machine.selectedProduct = null;
      machine.setState(machine.idleState);
      return change;
    }
  }
  
  class VendingMachine {
    constructor() {
      if (VendingMachine.instance) return VendingMachine.instance;
      this.idleState = new IdleState();
      this.hasMoneyState = new HasMoneyState();
      this.dispenseState = new DispenseState();
      this.currentState = this.idleState;
      this.inventory = new Map();
      this.balance = 0;
      this.selectedProduct = null;
      VendingMachine.instance = this;
    }
    setState(state) {
      this.currentState = state;
    }
    addProduct(id, price, quantity) {
      this.inventory.set(id, { price, quantity });
    }
    selectProduct(id) {
      this.currentState.selectProduct(this, id);
    }
    insertMoney(amount) {
      this.currentState.insertMoney(this, amount);
    }
    dispense() {
      return this.currentState.dispense(this);
    }
    cancel() {
      this.currentState.cancel(this);
    }
  }