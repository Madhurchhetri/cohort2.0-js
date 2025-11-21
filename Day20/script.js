// let arr = [
//     {
//         name : "madhur",
//         age : 25,
//         city : "dehradun"
//     },
//     {
//         name : "madhur",
//         age : 25,
//         city : "dehradun"
//     },
//     {
//         name : "Hemant",
//         age : 22,
//         city : "Subathu"
//     },
//     {
//         name : "Sahaj",
//         age : 21,
//         city : "Kotdwara"
//     },
//     {
//         name : "sujal",
//         age : 20,
//         city : "garhi"
//     },
//     {
//         name : "Shubham",
//         age : 32,
//         city : "Sherpur"
//     }
// ]

// let sum = 0;
// arr.forEach((elem)=>{
//     sum = sum + elem.age;
// })

// console.log(sum/arr.length);

const users = [
  {
    fullName: "Aarav Mehta",
    profession: "Full Stack Developer",
    age: 26,
    description: "Aarav is a MERN-stack developer who loves building scalable web apps and contributing to open-source projects.",
    image: "https://plus.unsplash.com/premium_photo-1763369800370-a89b6fb2a3d2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["JavaScript", "React", "Node", "Developer", "Tech"]
  },

  {
    fullName: "Riya Sharma",
    profession: "UI/UX Designer",
    age: 24,
    description: "Riya designs clean, modern user interfaces and focuses on improving user experience for mobile apps.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    tags: ["Designer", "Figma", "UI", "Creative", "Branding"]
  },

  {
    fullName: "Kabir Singh",
    profession: "Fitness Trainer",
    age: 29,
    description: "Kabir is a certified fitness coach helping people transform their bodies through disciplined routines.",
    image: "https://images.unsplash.com/photo-1761706745195-26e5eef2fe3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Fitness", "Health", "Gym", "Trainer", "Motivation"]
  },

  {
    fullName: "Priya Nair",
    profession: "Travel Blogger",
    age: 27,
    description: "Priya explores new destinations and shares travel stories, tips, and photography online.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    tags: ["Travel", "Blogger", "Adventure", "Photography"]
  },

  {
    fullName: "Rohan Das",
    profession: "Digital Marketer",
    age: 30,
    description: "Rohan helps brands grow using SEO, SEM, and social media marketing strategies.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    tags: ["Marketing", "SEO", "Branding", "Social Media"]
  }
];

let sum = "";
users.forEach((elem)=>{
    sum += `<div class="card">
            <img src="${elem.image}" alt="${elem.fullName}">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
        </div>`
})
let main = document.querySelector('main');
main.innerHTML = sum;