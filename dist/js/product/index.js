// Code untuk Ban
var swiperWrapperTier = document.getElementById('swiperWrapperTier');

// Data JSON Ban
var cardDataTier = [
  {
    title: 'Dunlop',
    description: 'Ban Mobil Dunlop D80V4 - 205/65 R15',
    imageSrc: '../dist/img/sales/ban/1.png',
    price: 'Rp. 1.000.000',
  },
  {
    title: 'Bridgestone',
    description: 'Ban Mobil Bridgestone Ecopia EP150 - 205/65 R',
    imageSrc: '../dist/img/sales/ban/2.png',
    price: 'Rp. 1.579.000',
  },
  {
    title: 'Bridgestone',
    description: 'Ban Mobil Bridgestone Ecopia EP150 - 205/65 R',
    imageSrc: '../dist/img/sales/ban/3.png',
    price: 'Rp. 1.555.000',
  },
  {
    title: 'Bridgestone',
    description: 'Ban Mobil Bridgestone Ecopia EP150 - 205/65 R',
    imageSrc: '../dist/img/sales/ban/4.jpg',
    price: 'Rp. 2.579.000',
  },
  {
    title: 'Bengkel BOS',
    description: 'Ban Mobil Bridgestone Ecopia EP150 - 205/65 R',
    imageSrc: '../dist/img/sales/ban/5.png',
    price: 'Rp. 1.672.000',
  },
  {
    title: 'Bridgestone',
    description: 'Ban Mobil Bridgestone Ecopia EP150 - 205/65 R',
    imageSrc: '../dist/img/sales/ban/6.jpg',
    price: 'Rp. 1.300.000',
  },
  {
    title: 'Bengkel BOS',
    description: 'Ban Mobil GT Champiro Ecotec - 175/65 R14 - G',
    imageSrc: '../dist/img/sales/ban/7.jpeg',
    price: 'Rp. 1.530.000',
  },
  {
    title: 'Bengkel BOS',
    description: 'Ban Mobil GT Champiro Ecotec - 185/65 R15 - G',
    imageSrc: '../dist/img/sales/ban/8.png',
    price: 'Rp. 1.129.000',
  },
];

// Convert JSON to String untuk Ban
var jsonData = JSON.stringify(cardDataTier);

for (var i = 0; i < cardDataTier.length; i++) {
  var card = cardDataTier[i];

  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  var cardElement = document.createElement('div');
  cardElement.classList.add('card');

  var anchorElement = document.createElement('a');
  anchorElement.href = '#';

  var imageElement = document.createElement('img');
  imageElement.classList.add('card-image');
  imageElement.src = card.imageSrc;
  imageElement.alt = '';

  var contentElement = document.createElement('div');
  contentElement.classList.add('mt-5');

  var titleElement = document.createElement('h5');
  titleElement.classList.add('card-title');
  titleElement.textContent = card.title;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-description');
  descriptionElement.textContent = card.description;

  var priceElement = document.createElement('p');
  priceElement.classList.add('card-price');
  priceElement.textContent = card.price;

  contentElement.appendChild(titleElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(priceElement);
  anchorElement.appendChild(imageElement);
  anchorElement.appendChild(contentElement);
  cardElement.appendChild(anchorElement);
  swiperSlide.appendChild(cardElement);
  swiperWrapperTier.appendChild(swiperSlide);
}

/////////////////////////////////////////

// Code untuk Oli
var swiperWrapperOil = document.getElementById('swiperWrapperOil');

// Data JSON Oli
var cardDataOil = [
  {
    title: 'X-ten',
    description: 'Oli Mobil X-Ten Modern 15W-40 @Liter Gratis',
    imageSrc: '../dist/img/sales/oli/1.png',
    price: 'Rp. 68.400',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/oli/2.png',
    price: 'Rp. 179.000',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/oli/3.png',
    price: 'Rp. 255.000',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/oli/4.png',
    price: 'Rp. 79.000',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/oli/5.png',
    price: 'Rp. 72.000',
  },
  {
    title: 'Daihatsu',
    description: 'Oli mobil Daihatsu 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/oli/6.png',
    price: 'Rp. 400.000',
  },
  {
    title: 'Seikon',
    description: 'Oli mobil Seikon 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/oli/7.png',
    price: 'Rp. 230.000',
  },
  {
    title: 'ECSTAR',
    description: 'Oli mobil ECSTAR 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/oli/8.png',
    price: 'Rp. 229.000',
  },
];

// Convert JSON to String untuk Oli
var jsonData = JSON.stringify(cardDataOil);

for (var i = 0; i < cardDataOil.length; i++) {
  var card = cardDataOil[i];

  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  var cardElement = document.createElement('div');
  cardElement.classList.add('card');

  var anchorElement = document.createElement('a');
  anchorElement.href = '#';

  var imageElement = document.createElement('img');
  imageElement.classList.add('card-image');
  imageElement.src = card.imageSrc;
  imageElement.alt = '';

  var contentElement = document.createElement('div');
  contentElement.classList.add('mt-5');

  var titleElement = document.createElement('h5');
  titleElement.classList.add('card-title');
  titleElement.textContent = card.title;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-description');
  descriptionElement.textContent = card.description;

  var priceElement = document.createElement('p');
  priceElement.classList.add('card-price');
  priceElement.textContent = card.price;

  contentElement.appendChild(titleElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(priceElement);
  anchorElement.appendChild(imageElement);
  anchorElement.appendChild(contentElement);
  cardElement.appendChild(anchorElement);
  swiperSlide.appendChild(cardElement);
  swiperWrapperOil.appendChild(swiperSlide);
}

/////////////////////////////////////////

// Code untuk Sparepart
var swiperWrapperSparepart = document.getElementById('swiperWrapperSparepart');

// Data JSON Sparepart
var cardDataSparepart = [
  {
    title: 'X-ten',
    description: 'Oli Mobil X-Ten Modern 15W-40 @Liter Gratis',
    imageSrc: '../dist/img/sales/sparepart/1.png',
    price: 'Rp. 68.400',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/sparepart/2.png',
    price: 'Rp. 179.000',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/sparepart/3.png',
    price: 'Rp. 255.000',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/sparepart/4.png',
    price: 'Rp. 79.000',
  },
  {
    title: 'X-ten',
    description: 'OLI X-TEN RORED HDA 90 GL-5 PL1',
    imageSrc: '../dist/img/sales/sparepart/5.png',
    price: 'Rp. 72.000',
  },
  {
    title: 'Daihatsu',
    description: 'Oli mobil Daihatsu 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/sparepart/6.png',
    price: 'Rp. 400.000',
  },
  {
    title: 'Seikon',
    description: 'Oli mobil Seikon 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/sparepart/7.png',
    price: 'Rp. 230.000',
  },
  {
    title: 'ECSTAR',
    description: 'Oli mobil ECSTAR 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/sparepart/8.png',
    price: 'Rp. 229.000',
  },
  {
    title: 'ECSTAR',
    description: 'Oli mobil ECSTAR 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/sparepart/9.png',
    price: 'Rp. 229.000',
  },
  {
    title: 'ECSTAR',
    description: 'Oli mobil ECSTAR 10W-30 SM/CF - 1 Liter - G',
    imageSrc: '../dist/img/sales/sparepart/10.png',
    price: 'Rp. 229.000',
  },
];

// Convert JSON to String untuk Sparepart
var jsonData = JSON.stringify(cardDataSparepart);

for (var i = 0; i < cardDataSparepart.length; i++) {
  var card = cardDataSparepart[i];

  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  var cardElement = document.createElement('div');
  cardElement.classList.add('card');

  var anchorElement = document.createElement('a');
  anchorElement.href = '#';

  var imageElement = document.createElement('img');
  imageElement.classList.add('card-image');
  imageElement.src = card.imageSrc;
  imageElement.alt = '';

  var contentElement = document.createElement('div');
  contentElement.classList.add('mt-5');

  var titleElement = document.createElement('h5');
  titleElement.classList.add('card-title');
  titleElement.textContent = card.title;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-description');
  descriptionElement.textContent = card.description;

  var priceElement = document.createElement('p');
  priceElement.classList.add('card-price');
  priceElement.textContent = card.price;

  contentElement.appendChild(titleElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(priceElement);
  anchorElement.appendChild(imageElement);
  anchorElement.appendChild(contentElement);
  cardElement.appendChild(anchorElement);
  swiperSlide.appendChild(cardElement);
  swiperWrapperSparepart.appendChild(swiperSlide);
}

/////////////////////////////////////////

// Swiper in Card
const swiper = new Swiper('.swiper', {
  // Default parameters
  spaceBetween: 4,
  // loop: true,
  slidesPerGroup: 1,
  grabCursor: true,
  centerSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

// Menampilkan data JSON di console
// console.log(jsonData);
