const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const ulGallery = document.querySelector(".gallery");

const itemGallery = images.map((img) => 
`<li class="gallery-item"><img src="${img.url}" alt="${img.alt}" width="360"></li>`)
.join("");

ulGallery.insertAdjacentHTML("beforeend", itemGallery);


// const ulGallery = document.querySelector(".gallery");

// const imagesGallery = images.map((img) => {
//   const itemGallery = document.createElement("li");
//   itemGallery.classList.add("gallery-item");

//   const imgGallery = document.createElement("img");
//   imgGallery.src = img.url;
//   imgGallery.alt = img.alt;
//   imgGallery.width = 360;
  
//   itemGallery.append(imgGallery);
//   return itemGallery;
// })

// ulGallery.append(...imagesGallery);