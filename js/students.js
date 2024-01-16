const students = [
    {
        ID: 213,
        name: "Marco della Rovere",
        vote: 78,
    },
    {
        ID: 110,
        name: "Paola Cortellessa",
        vote: 96,
    },
    {
        ID: 250,
        name: "Andrea Mantegna",
        vote: 48,
    },
    {
        ID: 145,
        name: "Gaia Borromini",
        vote: 74,
    },
    {
        ID: 196,
        name: "Luigi Grimaldello",
        vote: 68,
    },
    {
        ID: 102,
        name: "Piero della Francesca",
        vote: 50,
    },
    {
        ID: 120,
        name: "Francesca da Polenta",
        vote: 84,
    }
]

const over70Votes = students.filter(({vote}) => {
    return (vote >= 70); 
})

console.log(over70Votes);

const voteIdStudents = students.filter(({vote, ID}) => {
    return (vote >= 70 && ID >= 120);
}
)

console.log(voteIdStudents);

const studentsNames = students.map(({name}) => {
    return name.toUpperCase();
})

console.log(studentsNames);