let events = [];

async function showsData() {
  events = await bandSiteKey.getShows();
  console.log(events);
}

showsData();

const ticketInfo = document.querySelector(".ticket__section");

const headerContainer = document.createElement("div");
headerContainer.classList.add("header__container");
ticketInfo.appendChild(headerContainer);

const title = document.createElement("h2");
title.classList.add("show_header");
title.innerText = "Shows";
headerContainer.appendChild(title);

const divContainer = document.createElement("div");
divContainer.classList.add("div__container");
ticketInfo.appendChild(divContainer);

const section = document.createElement("div");
section.classList.add("show__container--2");
divContainer.appendChild(section);

const labelDate = document.createElement("p");
labelDate.classList.add("shows__label--2");
labelDate.innerText = "DATE";
section.appendChild(labelDate);

const labelVenue = document.createElement("p");
labelVenue.classList.add("shows__label--2");
labelVenue.innerText = "VENUE";
section.appendChild(labelVenue);

const labelLocation = document.createElement("p");
labelLocation.classList.add("shows__label--2");
labelLocation.innerText = "LOCATION";
section.appendChild(labelLocation);

const button = document.createElement("button");
button.classList.add("shows__button--2");
section.appendChild(button);

async function waitLoop2() {
  await showsData()
  for (let i = 0; i < events.length; i++) {
    const section = document.createElement("div");
    section.classList.add("show__container");
    divContainer.appendChild(section);

    const labelDate = document.createElement("p");
    labelDate.classList.add("shows__label");
    labelDate.innerText = "DATE";
    section.appendChild(labelDate);

    const date = document.createElement("p");
    date.classList.add("shows__text");
    section.appendChild(date);
    date.innerText = getCurrentDate(events[i].date);

    const labelVenue = document.createElement("p");
    labelVenue.classList.add("shows__label");
    labelVenue.innerText = "VENUE";
    section.appendChild(labelVenue);

    const venue = document.createElement("p");
    venue.classList.add("shows__text");
    section.appendChild(venue);
    venue.innerText = events[i].place;

    const labelLocation = document.createElement("p");
    labelLocation.classList.add("shows__label");
    labelLocation.innerText = "LOCATION";
    section.appendChild(labelLocation);

    const location = document.createElement("p");
    location.classList.add("shows__text");
    section.appendChild(location);
    location.innerText = events[i].location;

    const button = document.createElement("button");
    button.classList.add("shows__button");
    section.appendChild(button);
    button.innerText = "BUY TICKETS";
  }
}

waitLoop2();