// return zone priser per kilo.
let weight = 228.51; // weight in kg
let maxWeight = 751; // Maximum vægt som Bring leverer
let pricesPerZone = {};

if (weight <= maxWeight) { // Hvis det vejer mindre end maksimum som kan leveres
  if (weight <= 4.99) {
    console.log("Vejer mindre end 5kg");
    pricesPerZone = {
      1: 72,
      2: 96,
      3: 125,
      }
  } else if (weight <= 9.99) {
      console.log("Vejer mindre end 10kg");
      pricesPerZone = {
        1: 96,
        2: 124,
        3: 142,
      }
  } else if (weight <= 19.99) {
      console.log("Vejer mindre end 20kg");
      pricesPerZone = {
        1: 123,
        2: 144,
        3: 166,
      }
  } else if (weight <= 29.99) {
      console.log("Vejer mindre end 30kg");
      pricesPerZone = {
        1: 143,
        2: 171,
        3: 189,
      }
  } else if (weight <= 39.99) {
      console.log("Vejer mindre end 40kg");
      pricesPerZone = {
        1: 166,
        2: 194,
        3: 213,
      }
  } else if (weight <= 49.99) {
      console.log("Vejer mindre end 50kg");
      pricesPerZone = {
        1: 191,
        2: 219,
        3: 237,
      }
  } else if (weight <= 59.99) {
      console.log("Vejer mindre end 60kg");
      pricesPerZone = {
        1: 214,
        2: 244,
        3: 258,
      }
  } else if (weight <= 69.99) {
      console.log("Vejer mindre end 70kg");
      pricesPerZone = {
        1: 238,
        2: 265,
        3: 270,
      }
  } else if (weight <= 79.99) {
      console.log("Vejer mindre end 80kg");
      pricesPerZone = {
        1: 262,
        2: 279,
        3: 294,
      }
  } else if (weight <= 89.99) {
      console.log("Vejer mindre end 90kg");
      pricesPerZone = {
        1: 285,
        2: 302,
        3: 305,
      }
  } else if (weight <= 99.99) {
      console.log("Vejer mindre end 100kg");
      pricesPerZone = {
        1: 298,
        2: 313,
        3: 317,
      }
  } else if (weight <= 119.99) {
      console.log("Vejer mindre end 120kg");
      pricesPerZone = {
        1: 309,
        2: 326,
        3: 340,
      }
  } else if (weight <= 139.99) {
      console.log("Vejer mindre end 140kg");
      pricesPerZone = {
        1: 322,
        2: 344,
        3: 351,
      }
  } else if (weight <= 159.99) {
      console.log("Vejer mindre end 160kg");
      pricesPerZone = {
        1: 332,
        2: 362,
        3: 381,
      }
  } else if (weight <= 179.99) {
      console.log("Vejer mindre end 180kg");
      pricesPerZone = {
        1: 345,
        2: 392,
        3: 404,
      }
  } else if (weight <= 199.99) {
      console.log("Vejer mindre end 200kg");
      pricesPerZone = {
        1: 357,
        2: 415,
        3: 486,
      }
  } else if (weight <= 249.99) {
      console.log("Vejer mindre end 250kg");
      pricesPerZone = {
        1: 416,
        2: 487,
        3: 531,
      }
  } else if (weight <= 299.99) {
      console.log("Vejer mindre end 300kg");
      pricesPerZone = {
        1: 443,
        2: 546,
        3: 740,
      }
  } else if (weight <= 399.99) {
      console.log("Vejer mindre end 400kg");
      pricesPerZone = {
        1: 496,
        2: 691,
        3: 756,
      }
  } else if (weight <= 499.99) {
      console.log("Vejer mindre end 500kg");
      pricesPerZone = {
        1: 691,
        2: 756,
        3: 929,
      }
  } else if (weight <= 750.99) {
      console.log("Vejer mindre end 751kg");
      pricesPerZone = {
        1: 756,
        2: 929,
        3: 1060,
      }
    } else {
      console.warn("noget gik galt og vi kunne ikke udregne leveringsprisen...");
    }
  } else {
    alert("Denne vejer for meget! Kontakt os for leveringspris");
}
console.log(pricesPerZone);


const zone = 3;
console.log(pricesPerZone[zone]);

