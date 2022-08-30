const filter = (array, año) => {
  return array.filter((x) => x.car_model === año);
};

let array = [
  {
    id: 1,
    brand: "Mazda",
    car_model: 2002,
  },
  {
    id: 2,
    brand: "Chevrolet",
    car_model: 2004,
  },
  {
    id: 3,
    brand: "BMW",
    car_model: 2005,
  },
  {
    id: 4,
    brand: "Mercedes-Benz",
    car_model: 2008,
  },
  {
    id: 5,
    brand: "Maserati",
    car_model: 1989,
  },
  {
    id: 6,
    brand: "Chevrolet",
    car_model: 2007,
  },
  {
    id: 7,
    brand: "Subaru",
    car_model: 1994,
  },
  {
    id: 8,
    brand: "Chevrolet",
    car_model: 2003,
  },
  {
    id: 9,
    brand: "Acura",
    car_model: 2004,
  },
  {
    id: 10,
    brand: "Mazda",
    car_model: 1983,
  },
  {
    id: 11,
    brand: "Chevrolet",
    car_model: 2005,
  },
  {
    id: 12,
    brand: "Aston Martin",
    car_model: 2011,
  },
  {
    id: 13,
    brand: "Acura",
    car_model: 2010,
  },
  {
    id: 14,
    brand: "Jaguar",
    car_model: 1999,
  },
  {
    id: 15,
    brand: "Honda",
    car_model: 1985,
  },
  {
    id: 16,
    brand: "Porsche",
    car_model: 2012,
  },
  {
    id: 17,
    brand: "Cadillac",
    car_model: 1997,
  },
  {
    id: 18,
    brand: "Pontiac",
    car_model: 2003,
  },
  {
    id: 19,
    brand: "Volkswagen",
    car_model: 1995,
  },
  {
    id: 20,
    brand: "Buick",
    car_model: 1997,
  },
  {
    id: 21,
    brand: "Toyota",
    car_model: 2009,
  },
  {
    id: 22,
    brand: "Buick",
    car_model: 1997,
  },
  {
    id: 23,
    brand: "Subaru",
    car_model: 2010,
  },
  {
    id: 24,
    brand: "Jaguar",
    car_model: 2002,
  },
  {
    id: 25,
    brand: "Chevrolet",
    car_model: 1971,
  },
  {
    id: 26,
    brand: "Mercedes-Benz",
    car_model: 2007,
  },
  {
    id: 27,
    brand: "Subaru",
    car_model: 1996,
  },
  {
    id: 28,
    brand: "Mazda",
    car_model: 1992,
  },
  {
    id: 29,
    brand: "Mercedes-Benz",
    car_model: 2008,
  },
  {
    id: 30,
    brand: "Toyota",
    car_model: 2013,
  },
  {
    id: 31,
    brand: "Buick",
    car_model: 1998,
  },
  {
    id: 32,
    brand: "Mazda",
    car_model: 2006,
  },
  {
    id: 33,
    brand: "Suzuki",
    car_model: 1997,
  },
  {
    id: 34,
    brand: "Toyota",
    car_model: 2012,
  },
  {
    id: 35,
    brand: "BMW",
    car_model: 2010,
  },
  {
    id: 36,
    brand: "Toyota",
    car_model: 1996,
  },
  {
    id: 37,
    brand: "Isuzu",
    car_model: 1996,
  },
  {
    id: 38,
    brand: "GMC",
    car_model: 1993,
  },
  {
    id: 39,
    brand: "Eagle",
    car_model: 1995,
  },
  {
    id: 40,
    brand: "Kia",
    car_model: 2011,
  },
  {
    id: 41,
    brand: "Hyundai",
    car_model: 1993,
  },
  {
    id: 42,
    brand: "GMC",
    car_model: 2009,
  },
  {
    id: 43,
    brand: "Mercedes-Benz",
    car_model: 2010,
  },
  {
    id: 44,
    brand: "Porsche",
    car_model: 1997,
  },
  {
    id: 45,
    brand: "Volvo",
    car_model: 2006,
  },
  {
    id: 46,
    brand: "Pontiac",
    car_model: 1988,
  },
  {
    id: 47,
    brand: "Aston Martin",
    car_model: 2011,
  },
  {
    id: 48,
    brand: "GMC",
    car_model: 2007,
  },
  {
    id: 49,
    brand: "Mitsubishi",
    car_model: 1988,
  },
  {
    id: 50,
    brand: "Mercury",
    car_model: 1994,
  },
  {
    id: 51,
    brand: "Mitsubishi",
    car_model: 1993,
  },
  {
    id: 52,
    brand: "BMW",
    car_model: 1993,
  },
  {
    id: 53,
    brand: "Dodge",
    car_model: 2005,
  },
  {
    id: 54,
    brand: "Lincoln",
    car_model: 2002,
  },
  {
    id: 55,
    brand: "Pontiac",
    car_model: 2006,
  },
  {
    id: 56,
    brand: "Pontiac",
    car_model: 1990,
  },
  {
    id: 57,
    brand: "Toyota",
    car_model: 1976,
  },
  {
    id: 58,
    brand: "Suzuki",
    car_model: 1995,
  },
  {
    id: 59,
    brand: "Mazda",
    car_model: 1998,
  },
  {
    id: 60,
    brand: "Mercedes-Benz",
    car_model: 1999,
  },
  {
    id: 61,
    brand: "Jeep",
    car_model: 1999,
  },
  {
    id: 62,
    brand: "Chevrolet",
    car_model: 2009,
  },
  {
    id: 63,
    brand: "Mazda",
    car_model: 2007,
  },
  {
    id: 64,
    brand: "Chevrolet",
    car_model: 1998,
  },
  {
    id: 65,
    brand: "GMC",
    car_model: 2000,
  },
  {
    id: 66,
    brand: "Dodge",
    car_model: 2001,
  },
  {
    id: 67,
    brand: "Toyota",
    car_model: 2005,
  },
  {
    id: 68,
    brand: "Mitsubishi",
    car_model: 1994,
  },
  {
    id: 69,
    brand: "Volvo",
    car_model: 2000,
  },
  {
    id: 70,
    brand: "Mazda",
    car_model: 2000,
  },
  {
    id: 71,
    brand: "BMW",
    car_model: 2009,
  },
  {
    id: 72,
    brand: "Hyundai",
    car_model: 2003,
  },
  {
    id: 73,
    brand: "Chevrolet",
    car_model: 1996,
  },
  {
    id: 74,
    brand: "Volvo",
    car_model: 2010,
  },
  {
    id: 75,
    brand: "Acura",
    car_model: 2009,
  },
  {
    id: 76,
    brand: "Nissan",
    car_model: 1996,
  },
  {
    id: 77,
    brand: "Ford",
    car_model: 1996,
  },
  {
    id: 78,
    brand: "Mitsubishi",
    car_model: 2002,
  },
  {
    id: 79,
    brand: "Volkswagen",
    car_model: 1992,
  },
  {
    id: 80,
    brand: "Chrysler",
    car_model: 1994,
  },
  {
    id: 81,
    brand: "Toyota",
    car_model: 2005,
  },
  {
    id: 82,
    brand: "Chrysler",
    car_model: 2006,
  },
  {
    id: 83,
    brand: "Audi",
    car_model: 2005,
  },
  {
    id: 84,
    brand: "Chrysler",
    car_model: 1996,
  },
  {
    id: 85,
    brand: "GMC",
    car_model: 1992,
  },
  {
    id: 86,
    brand: "Scion",
    car_model: 2007,
  },
  {
    id: 87,
    brand: "Chevrolet",
    car_model: 1995,
  },
  {
    id: 88,
    brand: "Volvo",
    car_model: 2012,
  },
  {
    id: 89,
    brand: "Lotus",
    car_model: 1992,
  },
  {
    id: 90,
    brand: "Dodge",
    car_model: 2010,
  },
  {
    id: 91,
    brand: "Ford",
    car_model: 1996,
  },
  {
    id: 92,
    brand: "Ford",
    car_model: 2010,
  },
  {
    id: 93,
    brand: "Hyundai",
    car_model: 2013,
  },
  {
    id: 94,
    brand: "Mazda",
    car_model: 2012,
  },
  {
    id: 95,
    brand: "Toyota",
    car_model: 2004,
  },
  {
    id: 96,
    brand: "Chrysler",
    car_model: 2006,
  },
  {
    id: 97,
    brand: "Toyota",
    car_model: 1993,
  },
  {
    id: 98,
    brand: "Ford",
    car_model: 2013,
  },
  {
    id: 99,
    brand: "Mercury",
    car_model: 2011,
  },
  {
    id: 100,
    brand: "Land Rover",
    car_model: 2010,
  },
];

console.log(filter(array, 2002));

let res = array.every((item) => {
  item.car_model === 2002;
});

console.log(res);
