const generateStudentList = () => {
    let list = '<ul class="students-list">';
    for (let i = 0; i < studentsNames.length; i++) {
        list += `<li class="student">${studentsNames[i]}</li>`;
    }
    list += "</ul>";

    sectionElement.innerHTML = list;
}
const sectionElement = document.querySelector("section");
const students = [
    {
        ID: 213,
        fullname: "Marco della Rovere",
        vote: 78,
    },
    {
        ID: 110,
        fullname: "Paola Cortellessa",
        vote: 96,
    },
    {
        ID: 250,
        fullname: "Andrea Mantegna",
        vote: 48,
    },
    {
        ID: 145,
        fullname: "Gaia Borromini",
        vote: 74,
    },
    {
        ID: 196,
        fullname: "Luigi Grimaldello",
        vote: 68,
    },
    {
        ID: 102,
        fullname: "Piero della Francesca",
        vote: 50,
    },
    {
        ID: 120,
        fullname: "Francesca da Polenta",
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

const studentsNames = students.map(({fullname}) => {
    return fullname.toUpperCase();
})

console.log(studentsNames);



generateStudentList();