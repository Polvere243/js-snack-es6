const bicycles = [
    {
        name: "Guerciotti Veloce",
        weight: 1.70,
    },
    {
        name: "Scott Ibrida",
        weight: 12,
    },
    {
        name: "Cannondale",
        weight: 1,
    }
]

let lightestBicycle = bicycles[0];

for (let i = 0; i < bicycles.length; i++) {
    const bicycle = bicycles[i];
    if (bicycle.weight < lightestBicycle.weight) lightestBicycle = bicycle;
}
console.log(lightestBicycle);