
let cars = [
    { brand: "Toyota", model: "Corolla", year: 2022 },
    { brand: "Honda", model: "Civic", year: 2021 },
    { brand: "Ford", model: "Fusion", year: 2020 }
];

cars.forEach(car => {
    if (car.year > 2020) {
        console.log(car.brand);
    }
});
