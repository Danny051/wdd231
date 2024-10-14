const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";



// button elements
const all = document.querySelector("#all");
const utah = document.querySelector("#utah");
const nonus = document.querySelector("#nonus");
const lifetime = document.querySelector("#lifetime");
const children = document.querySelector("#children");
const served = document.querySelector("#served");


const cards = document.querySelector("#cards");

const filterProphets = async (filter = "all") => {
    let prophets = await jsonFetch(url);

    switch(filter){
        case "utah":
            prophets = prophets.filter((prophet) => prophet.birthplace === "utah");
        break;
        case  "nonus":
            prophets = prophets.filter((prophet) => prophet.birthplace=== "England");
        break;
        case "lifetime":
            prophets = prophets.filter((prophet) =>  getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
        );
        break;
        case "children":
            prophets = prophet.filter((prophet) => prophet.numofchildren >= 10);
        break;
        case "served":
            prophets = prophets.filter((prophet) => prophet.length >= 15);
        break;
        default:
        break;
    }
    displayProphets(prophets);
}

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet, index) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const birthDate = document.createElement("p");    
        const  birthPlace= document.createElement("p");
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${index + 1} Latter-day President`); 
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData();

// buttons
all.addEventListener("click", () => {
	clearButtonClasses();
	filterProphets("all");
	all.classList.add("active");
});

utah.addEventListener("click", () => {
	clearButtonClasses();
	filterProphets("utah");
	utah.classList.add("active");
});

document.querySelector("#nonus").addEventListener("click", () => {
	clearButtonClasses();
	filterProphets("nonus");
	nonus.classList.add("active");
});

lifetime.addEventListener("click", () => {
clearButtonClasses();
	filterProphets("lifetime");
	lifetime.classList.add("active");
});

children.addEventListener("click", () => {
	clearButtonClasses();
	filterProphets("children");
	children.classList.add("active");
});

served.addEventListener("click", () => {
	clearButtonClasses();
	filterProphets("served");
	served.classList.add("active");
});


function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
	filterbuttons = document.querySelectorAll("button");
	filterbuttons.forEach(button => button.className="");
}


