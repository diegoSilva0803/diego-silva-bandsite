const events = [{
    DATE: "Mon Sept 09 2024",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Tue Sept 17 2024",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco, CA",

  },
  {
    DATE: "Sat Oct 12 2024",
    VENUE: "View Lounge",
    LOCATION: "San Francisco, CA",
   
  },
  {
    DATE: "Sat Nov 16 2024",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Nov 29 2024",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Wed Dec 18 2024",
    VENUE: "Press Club",
    LOCATION: "San Francisco, CA",
  }
];

const ticketInfo = document.querySelector(".ticket__section");

const headerContainer = document.createElement('div');
headerContainer.classList.add('header__container');
ticketInfo.appendChild(headerContainer)

const title = document.createElement("h2");
title.classList.add("show_header");
title.innerText = "Shows"
headerContainer.appendChild(title);

const divContainer = document.createElement('div');
divContainer.classList.add('div__container');
ticketInfo.appendChild(divContainer);

const section = document.createElement("div");
section.classList.add("show__container--2");
divContainer.appendChild(section);

const labelDate = document.createElement('p');
labelDate.classList.add('shows__label--2');
labelDate.innerText = 'DATE'
section.appendChild(labelDate);

const labelVenue = document.createElement('p');
labelVenue.classList.add('shows__label--2');
labelVenue.innerText = 'VENUE'
section.appendChild(labelVenue);

const labelLocation = document.createElement('p');
labelLocation.classList.add('shows__label--2');
labelLocation.innerText = 'LOCATION'
section.appendChild(labelLocation);

const button = document.createElement("button");
button.classList.add("shows__button--2");
section.appendChild(button);


for (let i = 0; i < events.length; i++) {
    const section = document.createElement("div");
    section.classList.add("show__container");
    section.setAttribute("onclick", "selected");
    divContainer.appendChild(section);

    const labelDate = document.createElement('p');
    labelDate.classList.add('shows__label');
    labelDate.innerText = 'DATE'
    section.appendChild(labelDate);

    const date = document.createElement("p");
    date.classList.add("shows__text");
    section.appendChild(date);
    date.innerText = events[i].DATE
    
    const labelVenue = document.createElement('p');
    labelVenue.classList.add('shows__label');
    labelVenue.innerText = 'VENUE'
    section.appendChild(labelVenue);

    const venue = document.createElement("p");
    venue.classList.add("shows__text");
    section.appendChild(venue);
    venue.innerText = events[i].VENUE

    const labelLocation = document.createElement('p');
    labelLocation.classList.add('shows__label');
    labelLocation.innerText = 'LOCATION'
    section.appendChild(labelLocation);

    const location = document.createElement("p");
    location.classList.add("shows__text");
    section.appendChild(location);
    location.innerText = events[i].LOCATION

    const button = document.createElement("button");
    button.classList.add("shows__button");
    section.appendChild(button);
    button.innerText = "BUY TICKETS"
    
}


