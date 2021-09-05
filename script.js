
var projectContainer = document.getElementById('project-container');
var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }



// Creating Project Wrapper
 var projectWrapper = document.createElement('div');
 projectWrapper.classList.add('project-wrapper');

 var imageSection = document.createElement('div');
 imageSection.classList.add('image-section');

 var mainImage = document.createElement('img');
 mainImage.classList.add('main-image');
 mainImage.src = productData.preview;

//  Appending Image Section

imageSection.append(mainImage);
projectWrapper.append(imageSection);

// Creating Content Container

var contentContainer = document.createElement('div');
contentContainer.classList.add('content-container');

var productTitle = document.createElement('h3');
productTitle.classList.add('product-title');
productTitle.innerHTML = productData.name;

var productBrand = document.createElement('p');
productBrand.classList.add('product-brand');
productBrand.innerHTML = productData.brand;

var productPrice = document.createElement('p');
productPrice.classList.add('product-price');
productPrice.innerHTML = `Price: Rs <span class = "payment">${productData.price}</span>`

var descriptionHeading = document.createElement('p');
descriptionHeading.classList.add('description-heading');
descriptionHeading.innerHTML = `Description`;

var description = document.createElement('p');
description.classList.add('description');
description.innerHTML = productData.description;

var productPreviewHeading = document.createElement('p');
productPreviewHeading.classList.add('product-preview-heading');
productPreviewHeading.innerHTML = `Product Preview`;

// Creating Image Grid

var productPreviewImage = document.createElement('div');
productPreviewImage.classList.add('product-preview-images');

function productPreview (i) {
  var imagesData = productData.photos;
  var images = document.createElement('img');
  images.classList.add('images');
  if(i===0) {
    images.classList.add('active');
  }
  images.src = imagesData[i];
  productPreviewImage.appendChild(images);
}

for (i=0; i<productData.photos.length; i++) {
  productPreview(i);
}

var addToCart = document.createElement('button');
addToCart.classList.add('cart-button');
addToCart.innerHTML = "Add to Cart";

// Appending Content Containers
contentContainer.appendChild(productTitle);
contentContainer.appendChild(productBrand);
contentContainer.appendChild(productPrice);
contentContainer.appendChild(descriptionHeading);
contentContainer.appendChild(description);
contentContainer.appendChild(productPreviewHeading);
contentContainer.appendChild(productPreviewImage);
contentContainer.appendChild(addToCart);
projectWrapper.appendChild(contentContainer);



// Appending in Main Section

projectContainer.appendChild(projectWrapper);


var imageActive = document.querySelector('.images');
for (var i = 0; i<=imageActive.length; i++) {
  try {
    imageActive[i].addEventListener('click', function () {
        var active = document.getElementsByClassName('active');
        active[0].className = active[0].className.replace("active", "");
        this.className += " active";
    });
  } catch (e) {
      console.log(e + 'Error');
  }
  
}

const topImage = document.querySelector(".main-image"); 
const mainImages = document.querySelectorAll(".images");

for (let i = 0; i < mainImages.length; i++) {
  mainImages[i].addEventListener("click", function () {
    var testimages = productData.photos[0];
    console.log(testimages);
    const mainBorders = document.querySelector(".active"); 
    mainBorders.classList.remove("active"); 

    mainImages[i].classList.add("active"); 
        topImage.src = mainImages[i].src;
  });
}