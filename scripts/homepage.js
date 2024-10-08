const currentYear = document.querySelector("#currentYear");

// use the date object
const today = new Date();

currentYear.innerHTML = `&copy;${today.getFullYear() }`;

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `Last Update: ${document.lastModified}`;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector("nav")
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
	mainnav.classList.toggle("show");
	hambutton.classList.toggle("show");
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseList = document.getElementById("sub-tags");
const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filterValue = button.textContent;
        displayCourses(filterValue);
    });
});

function displayCourses(filterValue = "ALL") {
    courseList.innerHTML = "";

    let filteredCourses = courses;

    if (filterValue === "ALL") {
        filteredCourses = courses.filter(course => course.subject === filterValue);
    }
	else if (filterValue === "WDD"){
		filteredCourses = courses.filter(course => course.subject === filterValue);
	}
    else if(filterValue === "CSE"){
        filteredCourses = courses.filter(course => course.subject === filterValue);
    }

	const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);

    document.getElementById("total-credits").innerHTML = `Total Credits: ${totalCredits}`;


    filteredCourses.forEach(course => {
        const courseCard = document.createElement("a");
        courseCard.classList.add("course-card");
        courseCard.classList.add(course.completed ? "completed" : "not-completed");

        courseCard.innerHTML = `${course.subject} ${course.number}`;

        courseList.appendChild(courseCard);
    });
}



displayCourses();
