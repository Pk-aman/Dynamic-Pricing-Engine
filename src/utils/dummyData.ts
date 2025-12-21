// src/utils/dummyData.ts

export const products = [
  {
    name: "Running Shoes",
    basePrice: 3000,
    category: "Footwear",
  },
  {
    name: "Wireless Earbuds",
    basePrice: 2500,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    basePrice: 5500,
    category: "Electronics",
  },
];

export const marketData = [
  {
    stock: 8,
    demandScore: 75,
    competitorPrices: [3200, 3100],
  },
  {
    stock: 50,
    demandScore: 40,
    competitorPrices: [2300],
  },
  {
    stock: 4,
    demandScore: 90,
    competitorPrices: [6000, 5900],
  },
];

export const rules = [
  {
    condition: "stock < 10",
    action: "+10%",
    priority: 1,
  },
  {
    condition: "demandScore > 80",
    action: "+8%",
    priority: 2,
  },
  {
    condition: "competitorPrices.avg < basePrice",
    action: "-5%",
    priority: 3,
  },
];
