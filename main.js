const gens = [
  { name: "Baby Boomers", start: 1946, end: 1964, surname: "Boomers" },
  { name: "Génération X", start: 1965, end: 1980, surname: "Xennials" },
  { name: "Génération Y", start: 1981, end: 1996, surname: "Millennials" },
  { name: "Génération Z", start: 1997, end: 2012, surname: "Zoomers" },
  { name: "Génération Alpha", start: 2013, end: 2026, surname: "Alphas" },
];

const genDescriptions = {
  "Baby Boomers":
    "Cette génération est naît durant la période de forte croissance démographique qui a suivi la Seconde Guerre mondiale. Elle a connu l'essor de la télévision, de la consommation de masse et les débuts de l'informatique.",
  "Génération X":
    "Cette génération a grandi durant les dernières décennies du XXe siècle. Elle a vu apparaître les ordinateurs personnels, les consoles de jeux, puis les premiers pas d'Internet.",
  "Génération Y":
    "Cette génération a grandi avec le développement d'Internet, des téléphones portables et des réseaux sociaux. Elle a accompagné la transition vers le monde numérique.",
  "Génération Z":
    "Cette génération naît alors que les communications numériques sont déjà bien installées dans la société. Les Zoomers sont donc, avec les Millennials tardifs et les membres de la génération Alpha, des enfants du numérique.",
  "Génération Alpha":
    "Cette génération est la première à grandir entièrement dans un monde connecté. Elle évolue dès son plus jeune âge avec les smartphones, les objets connectés, l'intelligence artificielle et les plateformes numériques.",
};

const eventSounds = {
  "le modem 56K": "modem.mp3",
  "le lecteur CD": "cd.mp3",
  "la disquette Sony": "disquette.mp3",
  "le bipeur": "bipeur.mp3",
  "le Kodak jetable": "kodak.mp3",
  "la cassette VHS": "vhs.mp3",
  "le Tamagotchi": "tamagotchi.mp3",
  "le Nokia 3310": "3310.mp3",
  "le Nokia 3330": "3330.mp3",
};

let events = [];

async function loadEvents() {
  const res = await fetch("events.json");
  const raw = await res.json();
  events = raw.map((e) => ({ ...e, date: new Date(e.date) }));
}

document.querySelector("#year").max = new Date().getFullYear();

document.querySelector("#start").addEventListener("click", () => {
  const day = document.querySelector("#day").value;
  const month = document.querySelector("#month").value;
  const year = Number(document.querySelector("#year").value);

  const birthDate = new Date(year, month - 1, day);
  renderEvents(birthDate);
  if (day && month && year) {
    document.querySelector("#text").style.opacity = "1";
    document.querySelector("#events").style.opacity = "1";

    const gen = gens.find((g) => year >= g.start && year <= g.end);

    document.querySelector("#gen").textContent = gen.name;
    document.querySelector("#surname").textContent = gen.surname;
    document.querySelector("#desc").textContent = genDescriptions[gen.name];
  }
});

function getDiff(eventDate, birthDate) {
  const when = eventDate < birthDate ? "avant vous" : "après vous";

  const early = eventDate < birthDate ? eventDate : birthDate;
  const late = eventDate < birthDate ? birthDate : eventDate;

  let years = late.getFullYear() - early.getFullYear();
  let months = late.getMonth() - early.getMonth();

  if (late.getDate() < early.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, when };
}

function createCard(event, birthDate) {
  const { years, months, when } = getDiff(event.date, birthDate);

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.name;

  const sound = eventSounds[event.name];
  if (sound) {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const audio = new Audio(sound);
      audio.play();
    });
  }

  const p = document.createElement("p");
  const span = document.createElement("span");
  span.classList.add("diff", when === "après vous" ? "before" : "after");

  let text = "";
  if (years > 0) {
    text += `${years} an${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    text += `${text ? " et " : ""}${months} mois`;
  }
  if (!text) {
    text = "le même mois";
  }
  span.textContent = `${text} ${when}`;

  p.append(span, ` ${event.name}`);
  card.append(img, p);

  return card;
}

function renderEvents(birthDate) {
  const beforeList = document.querySelector("#before-list");
  const afterList = document.querySelector("#after-list");
  beforeList.innerHTML = "";
  afterList.innerHTML = "";

  const before = events.filter((e) => e.date < birthDate);
  const after = events.filter((e) => e.date >= birthDate);

  before.sort((a, b) => a.date - b.date);
  after.sort((a, b) => a.date - b.date);

  before.forEach((event) => beforeList.append(createCard(event, birthDate)));
  after.forEach((event) => afterList.append(createCard(event, birthDate)));
}

loadEvents();
