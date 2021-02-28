const people = [
    {
        id: 1,
        name: 'David Booker',
        position: 'Front-End Developer',
        languages: 'HTML, CSS, JS, React',
        company: 'Google',
    },
    {
        id: 2,
        name: 'Max Wellman',
        position: 'Front-End Developer',
        languages: 'HTML, CSS, JS, Angular, Vue',
        company: 'Facebook',
    },
    {
        id: 3,
        name: 'Kevin Dallas',
        position: 'Back-End Developer',
        languages: 'HTML, CSS, JS, jQuery, mySQL, Firebase',
        company: 'Unknown',
    },
    {
        id: 4,
        name: 'Filip Jankowski',
        position: 'Designer',
        languages: 'HTML, CSS, JS, Figma',
        company: 'Kebab Shop',
    },
    {
        id: 5,
        name: 'Zelimkhan Malsagov',
        position: 'Full-Stack Developer',
        languages: 'everything',
        company: 'every company',
    },
]

const name = document.getElementById('profile-name');
const position = document.getElementById('profile-position');
const languages = document.getElementById('profile-languages');
const company = document.getElementById('profile-company');
const next = document.getElementById('next-person');
const prev = document.getElementById('previous-person');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = people[person];
    name.textContent = item.name;
    position.textContent = item.position;
    languages.textContent = item.languages;
    company.textContent = item.company;
}

next.addEventListener('click', () => {
    currentItem++;
    if (currentItem > people.length - 1) {
        console.log(people.length);
        currentItem = 0;
    }
    showPerson(currentItem);
});

prev.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = people.length - 1;
    }
    showPerson(currentItem);
});




showPerson(3);

