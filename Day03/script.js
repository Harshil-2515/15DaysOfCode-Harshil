const reviews = [
    {
        id: 1,
        img: "assets/ui-divya.jpg",
        name: "Divya",
        skills: "Developer",
        brief: "hello",
    },
    {
        id: 2,
        img: "assets/ui-danro.jpg",
        name: "Danro",
        skills: "UI/UX Designer",
        brief: "Namaste",
    },
    {
        id: 3,
        img: "assets/ui-zac.jpg",
        name: "Zac",
        skills: "Php Developer",
        brief: "Hehe",
    },
    {
        id: 4,
        img: "assets/ui-sam.jpg",
        name: "Sam",
        skills: "Developer",
        brief: "Hiii",
    }
]

const propic = document.querySelector(".propic");
const revname = document.querySelector(".name");
const skills = document.querySelector(".skills");
const brief = document.querySelector(".brief");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentItem = 0;
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    propic.src = item.img;
    revname.textContent=item.name;
    skills.textContent=item.skills;
    brief.textContent=item.brief;
};

next.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem>reviews.length -1)
    {
        currentItem=0;
    }
    showPerson();
});

prev.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});