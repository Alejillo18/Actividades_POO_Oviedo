class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class UpdateStrategy {
    update(item) {}
  }
  
  class NormalStrategy extends UpdateStrategy {
    update(item) {
      item.sellIn -= 1;
      if (item.quality > 0) item.quality -= 1;
      if (item.sellIn < 0 && item.quality > 0) item.quality -= 1;
    }
  }
  
  class BrieStrategy extends UpdateStrategy {
    update(item) {
      item.sellIn -= 1;
      if (item.quality < 50) item.quality += 1;
    }
  }
  
  class SulfurasStrategy extends UpdateStrategy {
    update(item) {}
  }
  
  class BackstagePassStrategy extends UpdateStrategy {
    update(item) {
      item.sellIn -= 1;
      if (item.sellIn < 0) {
        item.quality = 0;
        return;
      }
      if (item.quality < 50) item.quality += 1;
      if (item.sellIn < 10 && item.quality < 50) item.quality += 1;
      if (item.sellIn < 5 && item.quality < 50) item.quality += 1;
    }
  }
  
  class ConjuredStrategy extends UpdateStrategy {
    update(item) {
      item.sellIn -= 1;
      item.quality = Math.max(0, item.quality - 2);
      if (item.sellIn < 0) item.quality = Math.max(0, item.quality - 2);
    }
  }
  
  class StrategyFactory {
    static getStrategy(name) {
      switch (name) {
        case 'Aged Brie': return new BrieStrategy();
        case 'Sulfuras, Hand of Ragnaros': return new SulfurasStrategy();
        case 'Backstage passes to a TAFKAL80ETC concert': return new BackstagePassStrategy();
        case 'Conjured': return new ConjuredStrategy();
        default: return new NormalStrategy();
      }
    }
  }
  
  class GildedRose {
    constructor(items = []) {
      this.items = items;
    }
    updateQuality() {
      for (let item of this.items) {
        const strategy = StrategyFactory.getStrategy(item.name);
        strategy.update(item);
      }
      return this.items;
    }
  }