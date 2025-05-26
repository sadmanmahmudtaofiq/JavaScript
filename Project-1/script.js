"use strict";

const textToSpeach = () => {
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");

  const textToSpeach = () => {
    let text = input.value;
    const voice = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(voice);
  };

  btn.addEventListener("click", textToSpeach);
};

// textToSpeach();

const stacks = [
  {
    name: "MERN Stack",
    components: "MongoDB, Express, React, Node",
    language: "JavaScript",
    popular: true,
    cost: 3200,
  },
  {
    name: "Django",
    components: "Python, Django, PostgreSQL",
    language: "Python",
    popular: true,
    cost: 3800,
  },
  {
    name: "Ruby on Rails",
    components: "Ruby, Rails, SQLite",
    language: "Ruby",
    popular: true,
    cost: 2900,
  },
  {
    name: "Spring Boot",
    components: "Java, Spring, Hibernate, MySQL",
    language: "Java",
    popular: false,
    cost: 4200,
  },
  {
    name: "Laravel",
    components: "Javascript, Vue, PHP, Laravel, MySQL",
    language: "PHP",
    popular: false,
    cost: 4000,
  },
  {
    name: "C System Stack",
    components: "C, Linux, Make, GCC",
    language: "C",
    popular: true,
    cost: 2500,
  },
  {
    name: "Qt Framework",
    components: "C++, Qt, CMake, GCC",
    language: "C++",
    popular: false,
    cost: 4500,
  },
];

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const inputValue = input.value.toLowerCase().trim();

  const getStack = stacks.filter((sk) => sk.language.toLowerCase() === inputValue);
  console.log(getStack, getStack.length);

  let html = "";

  if (getStack.length > 0) {
    getStack.forEach((i) => {
      const { name, components, language, popular, cost } = i;
    

    const popularClass = popular ? "Popular" : "Not popular";

    html += `
    
      <h1>${language} Technology Stacks</h1>
            
      <div class="stack-card">
          <h2 class="stack-name">${name}
              <span class="not-popular">${popularClass}</span>
          </h2>
          <p><strong>Components:</strong> ${components}</p>
          <p><strong>Language:</strong> ${language}</p>
          <p><strong>Price:</strong> $<span class="price">${cost}</span></p>
      </div>
    
    `;
    });
  } 
  
  else {
    html = `<p class="no-results">No stacks found for language "${inputValue}"</p>`;
  }

  document.querySelector("section").innerHTML = html;
});
