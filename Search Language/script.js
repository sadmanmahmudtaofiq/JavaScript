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
  {
    name: "Flutter Stack",
    components: "Dart, Flutter, Firebase",
    language: "Dart",
    popular: true,
    cost: 3000,
  },
  {
    name: "ASP.NET Core",
    components: "C#, ASP.NET, SQL Server",
    language: "C#",
    popular: true,
    cost: 4700,
  },
  {
    name: "Go Web Stack",
    components: "Go, Gin, GORM, PostgreSQL",
    language: "Go",
    popular: false,
    cost: 3600,
  },
  {
    name: "Rust Web Stack",
    components: "Rust, Actix Web, Diesel, PostgreSQL",
    language: "Rust",
    popular: false,
    cost: 3900,
  },
  {
    name: "Elixir Phoenix Stack",
    components: "Elixir, Phoenix, Ecto, PostgreSQL",
    language: "Elixir",
    popular: false,
    cost: 3400,
  },
  {
    name: "Kotlin Backend Stack",
    components: "Kotlin, Ktor, Exposed, PostgreSQL",
    language: "Kotlin",
    popular: false,
    cost: 3500,
  },
  {
    name: "Perl Mojolicious Stack",
    components: "Perl, Mojolicious, DBI, MySQL",
    language: "Perl",
    popular: false,
    cost: 2700,
  },
  {
    name: "Haskell Stack",
    components: "Haskell, Yesod, Persistent, PostgreSQL",
    language: "Haskell",
    popular: false,
    cost: 3300,
  },
  {
    name: "HTML Basic Stack",
    components: "HTML, JS, Web APIs",
    language: "HTML",
    popular: true,
    cost: 2000,
  },
  {
    name: "CSS Styling Stack",
    components: "CSS, Sass, Tailwind, PostCSS",
    language: "CSS",
    popular: true,
    cost: 2100,
  },
];

const section = document.querySelector("section");
const input = document.querySelector(".container input");
input.addEventListener("input", () => start());

function start() {
  const inputValue = input.value.trim().toLowerCase();
  const getStack = stacks.filter((sk) =>
    sk.language.toLowerCase().startsWith(inputValue),
  );

  if (getStack.length > 0 && inputValue) {
    let html = "";
    getStack.forEach((index) => {
      let { name, components, language, popular, cost } = index;
      let code = `
      <h1><a href="#">${language}</a> Technology Stacks</h1>

      <div class="stack-card">
        <h2 class="stack-name">
          ${name}
          <span class="${popular ? "popular" : "not-popular"}">${popular ? "Popular" : "Not popular"}</span>
        </h2>
        <p><strong>Components:</strong> ${components}</p>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Price:</strong> $<span class="price">${cost}</span></p>
      </div>
      `;
      html += code;
    });

    section.innerHTML = html;
  } else if (!inputValue) {
    html = "";
    section.innerHTML = html;
  } else {
    section.innerHTML = `<p class="no-results">No stacks found for language "${inputValue}"</p>`;
  }
  const message = document.querySelectorAll("section h1 a");
  message.forEach((msg, i) => {
    msg.addEventListener("click", () => {
      alert(`Fuck You!`);
    });
  });
}

