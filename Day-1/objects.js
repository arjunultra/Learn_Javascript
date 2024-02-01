let myCar = {
  brand: "Maruthi",
  model: "Ertiga",
  year: 2018,
  color: "red",
  isRegistered: true,
  features: ["abs", "infotainment", "airbag"],
  dimentions: {
    lengthInMM: 4395,
    widthInMM: 1735,
    heightInMM: 1690,
  },
};
let key = "transmission";
// dot notation
myCar.price = 700000; // Add new keys to object
console.log(myCar);
// square bracket notation
console.log(myCar["year"]);
myCar[key] = "manual";
console.log(myCar.transmission);
console.log(myCar);
