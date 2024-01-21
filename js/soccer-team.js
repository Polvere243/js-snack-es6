const teams = [
    {
        name: "Juventus",
        score: 0,
        fouls: 0,
    },
    {
        name: "Roma",
        score: 0,
        fouls: 0,
    },
    {
        name: "Inter",
        score: 0,
        fouls: 0,
    }
]

const getRandomNumber = (min, max) => Math.floor(Math.random () * (max + 1 - min) + min);

teams.forEach (team => {
    team.score = getRandomNumber(1, 100);
    team.fouls = getRandomNumber(1, 100);
})

console.table(teams);