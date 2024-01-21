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

bicycles.forEach (bicycle => {
    const {weight} = bicycle;
    if (weight < lightestBicycle.weight) lightestBicycle = bicycle;
})
console.log(lightestBicycle);