const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Pictures
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Navigation

let links = document.querySelectorAll('nav a');

links.forEach((el, i) => {

  el.textContent = siteContent.nav[`nav-item-${i+1}`];

  el.style.color = 'lightGreen';
})


// Nav link addition

links = document.getElementsByTagName("nav")[0];
let newContent = (e) => {
  let newLink = document.createElement("a");
  newLink.textContent = e;
  newLink.style.color = 'Green';
  return newLink;
};

links.prepend(newContent ("Donate"));
links.append(newContent ("Shop"));


// CTA

let ctaStuff = document.getElementsByClassName('cta-text')[0];
console.log(ctaStuff)

ctaStuff.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
ctaStuff.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];


// Main content

let mainContentProps = document.querySelectorAll(".text-content");
// top part
mainContentProps[0].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];
mainContentProps[0].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];

mainContentProps[1].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["about-h4"];
mainContentProps[1].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["about-content"];


// bottom part
mainContentProps[2].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["services-h4"];
mainContentProps[2].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["services-content"];

mainContentProps[3].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["product-h4"];
mainContentProps[3].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["product-content"];

mainContentProps[4].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["vision-h4"];
mainContentProps[4].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["vision-content"];


// CONTACT
let contactSection = document.getElementsByClassName("contact")[0];

contactSection.getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"]
contactSection.getElementsByTagName("p")[0].textContent = siteContent["contact"]["address"]
contactSection.getElementsByTagName("p")[1].textContent = siteContent["contact"]["phone"]
contactSection.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"]


// Address on 2 lines
contactSection.getElementsByTagName("p")[0].style.width = '20%';



// FOOTER
let footerSection = document.querySelector("footer");

footerSection.getElementsByTagName("p")[0].textContent = siteContent["footer"]["copyright"];