const currentYear = document.querySelector("#currentYear");
const today = new Date();

currentYear.innerHTML = `&copy;${today.getFullYear() }`;

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// directory script

// Selecting buttons and container
const gridView = document.querySelector("#grid-view");
const listView = document.querySelector("#list-view");

const membersContainer = document.querySelector("#members-container");

// Fetch the JSON data
async function getMemberDirectory(){
    try{
        const response = await fetch("data/members.json");
    const data = await response.json();
    // console.table(data.members);
    displayMemberDirectory(data.members);
    } catch(error){
        console.error("Error fetching data: ", error);
    }
}

// Function to display members in the directory
const displayMemberDirectory = (members) => {  

    // Clear the members container before appending
    membersContainer.innerHTML = "";

    members.forEach((member) => {
        const memberCard = document.createElement("section");
        memberCard.classList.add("member-card"); // Add a class for styling

        const memberName = document.createElement("h4");
        memberName.textContent = member.name;

        const memberLogo = document.createElement("img");
        memberLogo.setAttribute("src", member.icon);
        memberLogo.setAttribute("loading", "lazy");
        // memberLogo.setAttribute("width", "100");
        memberLogo.setAttribute("height", "50");


        const memberAddress = document.createElement("p");
        const memberPhone = document.createElement("p");
        const memberWebsite = document.createElement("a");


        memberAddress.textContent = member.address;
        memberPhone.textContent = member.phone;
        memberWebsite.setAttribute("href", member.website);
        memberWebsite.textContent = "Visit website";

        memberCard.appendChild(memberLogo);
        memberCard.appendChild(memberName);
        memberCard.appendChild(memberAddress);
        memberCard.appendChild(memberPhone);
        memberCard.appendChild(memberWebsite);

        membersContainer.appendChild(memberCard);


    });
};


// Toggle between grid and list view
gridView.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listView.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});



getMemberDirectory();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// menu dissapears when link clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));






