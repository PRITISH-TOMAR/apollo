const langDef = () => {
  const languages = [
    "English",
    "Spanish",
    "Chinese",
    "Hindi",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
    "German",
    "French",
    "Korean",
    "Turkish",
    "Italian",
    "Vietnamese",
    "Tamil",
    "Persian",
    "Urdu",
    "Swahili",
    "Indonesian",
  ];

  const lang = document.getElementById("lang");

  languages.forEach((l) => {
    const option = document.createElement("option");
    option.value = l;
    option.textContent = l;

    if (l === "English") {
      option.selected = true;
    }
    lang.appendChild(option);
  });
};

langDef();

// Navbar functionality here.
const navbarItems = [
  {
    label: "Patient Care",
    links: [
      "Find A Doctor",
      "Apollo Surgery",
      "Clinical Quality",
      "Service Excellence",
      "Patient Testimonials",
    ],
  },
  {
    label: "Centres Of Excellence",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    label: "Health Information",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    label: "Corporate",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    label: "International Patients",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    label: "Academics and Research",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    label: "Hospital",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    label: "Contact us",
    links: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
];

function createNavBar() {
  const navbar = document.querySelector("#navbar");

  // Loop through navbarItems to create dropdowns
  navbarItems.forEach((item) => {
    // Create navDiv container
    const navdiv = document.createElement("div");
    navdiv.classList.add("navDiv");

    // Create the main title link
    const title = document.createElement("a");
    title.href = "#";
    title.textContent = item.label;
    title.classList.add("navTitle");
    navdiv.appendChild(title);

    // Create the dropdown container
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdownBox");

    // Append links to dropdown
    item.links.forEach((link) => {
      const linkItem = document.createElement("a");
      linkItem.href = "#";
      linkItem.textContent = link;
      linkItem.classList.add("dropdown-item");
      dropdown.appendChild(linkItem);
    });

    // Append dropdown to navDiv
    navdiv.appendChild(dropdown);

    // Append navDiv to navbar
    navbar.appendChild(navdiv);
  });

  // Add event listeners for dropdown functionality
  const dropdownAll = document.querySelectorAll(".navDiv");

  // Show dropdown on mouseover
  dropdownAll.forEach((d) => {
    const dropdown = d.querySelector(".dropdownBox");

    d.addEventListener("mouseover", function () {
      d.classList.add("show");

      // Calculate the position of the dropdown
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Check if the dropdown is out of the viewport
      if (rect.right > viewportWidth) {
        dropdown.classList.add("adjust-left"); // Adjust to align on the right
      }
    });

    d.addEventListener("mouseleave", function () {
      d.classList.remove("show");
      dropdown.classList.remove("adjust-left");
    });
  });

  // Click to visit function
  const dropdownItem = navbar.querySelectorAll(".dropdown-item");
  dropdownItem.forEach((d) => {
    d.addEventListener("click", function () {
      dropdownAll.forEach((d) => d.classList.remove("show"));
    });
  });
}

createNavBar();

// Adding margin for adjusting coraseel as per header section

const spacing = () => {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;

  console.log(headerHeight);
  // using a custom property for doc

  const root = document.documentElement;

  root.style.setProperty("--header-height", `${headerHeight}px`);
};

window.addEventListener("load", spacing);
window.addEventListener("resize", spacing);

// Creating Carausal .

const images = [
  "../Images/first.jpg",
  "../Images/second.jpg",
  "../Images/third.jpg",
  "../Images/forth.jpg",
  "../Images/fifth.jpg",
];

const corrasal = document.getElementById("corrasal");

images.forEach((_, index) => {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.id = `radio-${index}`;
  radio.classList.add(`radio`);
  radio.name = "radio";
  radio.style.display = "none";
  if (index == 0) radio.checked = true;
  corrasal.appendChild(radio);
});

// Corrasal Images
const imageContainer = document.createElement("div");
imageContainer.classList.add("imageContainer");
images.forEach((_, index) => {
  const image = document.createElement("img");
  image.src = images[index];
  image.id = `image-${index}`;
  image.setAttribute("width", "100%");
  image.classList.add("image");
  imageContainer.appendChild(image);
});

corrasal.appendChild(imageContainer);

const dots = document.createElement("div");
dots.classList.add("dots");
images.forEach((_, index) => {
  const label = document.createElement("label");
  label.classList.add("label");
  label.id = `label-${index}`;
  label.setAttribute("for", `radio-${index}`);
  dots.appendChild(label);
});

corrasal.appendChild(dots);

const updateCurrentIndex = () => {
  let currentIndex = 0;

  setInterval(() => {
    document.getElementById(`radio-${currentIndex}`).checked = false;

    currentIndex = (currentIndex + 1) % images.length;

    document.getElementById(`radio-${currentIndex}`).checked = true;
  }, 3000);
};

updateCurrentIndex();

// Services
const serviceList = [
  "Book Appointment",
  "Find Doctor",
  "Find Hospital",
  "Book Health Check-up",
  "Consult Online",
  "Buy Medicine",
];

const services = document.getElementById("services");

serviceList.forEach((item, index) => {
  const service = document.createElement("div");
  service.classList.add("service");
  const serviceImage = document.createElement("img");
  serviceImage.src = `../Images/Services/service${index + 1}.svg`;
  const serviceText = document.createElement("p");
  serviceText.classList.add("serviceText");
  serviceText.textContent = item;
  service.appendChild(serviceImage);
  service.appendChild(serviceText);

  services.appendChild(service);
});

// Explore Section

const exploreList = [
  "Cardiology",
  "Neurology",
  "Gastroenterology",
  "Orthopedic",
  "Oncology",
  "Gynecology",
  "Dermatology",
  "Opthalmology",
  "Pediatrics",
  "Endocrinology",
  "Urology",
  "Nephrology",
  "Pulmonology",
  "Rheumathology",
  "Neuorosurgery",
];
const explore = document.getElementById("explore");

const flex = document.createElement("div");
flex.classList.add("flex");

const image = document.createElement("img");
image.classList.add("exp-img");
image.src = "../Images/Explore/explore.jpg";
image.height = "100";
image.width = "100";
image.classList.add("image");

flex.appendChild(image);

const gridBox = document.createElement("div");
gridBox.classList.add("gridBox");

exploreList.forEach((item, index) => {
  const service = document.createElement("div");
  service.classList.add("service");
  const exploreImage = document.createElement("img");
  exploreImage.src = `../Images/Explore/${index}.svg`;
  const serviceText = document.createElement("p");
  serviceText.classList.add("serviceText");
  serviceText.textContent = item;
  service.appendChild(exploreImage);
  service.appendChild(serviceText);

  gridBox.appendChild(service);
});

flex.appendChild(gridBox);

explore.appendChild(flex);

// Why section

const whyInfo = [
  {
    image: "../Images/Why/grid0.svg",
    number: "73",
    title: "Largest private healthcare network of Hospitals",
  },
  {
    image: "../Images/Why/grid1.svg",
    number: "700",
    title: "Largest private network across India",
  },
  {
    image: "../Images/Why/grid2.svg",
    number: "2,300",
    title: "Diagnostic centres across India",
  },
  {
    image: "../Images/Why/grid3.svg",
    number: "6,000",
    title: "Pharmacies",
  },
  {
    image: "../Images/Why/grid4.svg",
    number: "11,000",
    title: "Doctors",
  },
  {
    image: "../Images/Why/grid5.svg",
    number: "10,000",
    title: "Beds",
  },
];

const points = document.getElementById("points");

whyInfo.forEach((e, i) => {
  const div = document.createElement("div");
  div.classList.add("why-flex");

  const div_img = document.createElement("div");
  const img = document.createElement("img");
  div_img.classList.add("why-img");
  img.src = e.image;
  img.width = 42;
  img.height = 42;
  div_img.appendChild(img);
  div.appendChild(div_img);

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("why-inner");

  const number = document.createElement("span");
  number.classList.add("why-number");
  number.textContent = e.number;

  const info = document.createElement("p");
  info.classList.add("why-info");
  info.textContent = e.title;
  innerDiv.appendChild(number);
  innerDiv.appendChild(info);

  div.appendChild(innerDiv);

  points.appendChild(div);
});

function animateCount(n, element) {
  const duration = 1000; // Total duration: 1 second
  const startTime = performance.now(); // Start time

  function update(currentTime) {
    const elapsedTime = currentTime - startTime; // Time passed since the start
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const currentValue = Math.round(progress * n); // Interpolated value
    element.textContent = currentValue; // Update the element

    if (progress < 1) {
      requestAnimationFrame(update); // Continue animation
    }
  }

  requestAnimationFrame(update); // Start animation
}

// Example usage
const elements = document.querySelectorAll(".why-number");

elements.forEach((element) => {
  const n = parseInt(element.textContent, 10); // Convert text to a number
  animateCount(n, element);
});

// Footer

const footer = document.getElementById("footer");

footerData.forEach((section) => {
  // Create a container for each category
  const column = document.createElement("div");
  column.classList.add("footer-column");

  // Create and append the category heading
  const heading = document.createElement("h3");
  heading.textContent = section.category;
  column.appendChild(heading);

  // Create and append the list of items
  const list = document.createElement("ul");
  section.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  column.appendChild(list);

  // Append the column to the footer
  footer.appendChild(column);
});
