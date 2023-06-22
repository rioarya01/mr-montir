// Code untuk Mobil
var swiperWrapperCar = document.getElementById('swiperWrapperCar');

// Data JSON Mobil
var cardDataCar = [
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Mobil Berkala BMW',
    imageSrc: '../dist/img/service/mobil/1.jpg',
    price: 'Rp. 900.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Mobil Berkala Ford',
    imageSrc: '../dist/img/service/mobil/2.png',
    price: 'Rp. 800.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Mobil Berkala Hevrolet Diesel 40k',
    imageSrc: '../dist/img/service/mobil/3.png',
    price: 'Rp. 1.800.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Service Tune Up Honda 5 Free Check-Up 58 Kom',
    imageSrc: '../dist/img/service/mobil/4.png',
    price: 'Rp. 2.800.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Service Tune Up hyundai 8 Free Check-Up 58 Kom',
    imageSrc: '../dist/img/service/mobil/5.jpg',
    price: 'Rp. 2.300.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Service Tune Up Nissan 6 Free Check-Up 58 Kom',
    imageSrc: '../dist/img/service/mobil/6.png',
    price: 'Rp. 1.700.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Mobil Berkala Suzuki Diesel 80',
    imageSrc: '../dist/img/service/mobil/7.jpg',
    price: 'Rp. 1.550.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Service Tune Up Toyota 4 Free Check-Up 58 Kom',
    imageSrc: '../dist/img/service/mobil/8.png',
    price: 'Rp. 1.800.000',
  },
];

// Convert JSON to String untuk Mobil
var jsonData = JSON.stringify(cardDataCar);

for (var i = 0; i < cardDataCar.length; i++) {
  var card = cardDataCar[i];

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
  swiperWrapperCar.appendChild(swiperSlide);
}

/////////////////////////////////////////

// Code untuk Motor
var swiperWrapperMotorcycle = document.getElementById(
  'swiperWrapperMotorcycle'
);

// Data JSON Motor
var cardDataMotorcycle = [
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Motor Berkala BMW',
    imageSrc: '../dist/img/service/motor/1.png',
    price: 'Rp. 1.500.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Motor Berkala Honda',
    imageSrc: '../dist/img/service/motor/2.png',
    price: 'Rp. 800.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Motor Berkala Kawasaki',
    imageSrc: '../dist/img/service/motor/3.jpg',
    price: 'Rp. 1.000.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Motor Berkala Suzuki',
    imageSrc: '../dist/img/service/motor/4.png',
    price: 'Rp. 700.000',
  },
  {
    title: 'MR. MONTIR',
    description: 'Paket Servis Motor Berkala Vespa',
    imageSrc: '../dist/img/service/motor/5.png',
    price: 'Rp. 2.500.000',
  },
];

// Convert JSON to String untuk Motor
var jsonData = JSON.stringify(cardDataMotorcycle);

for (var i = 0; i < cardDataMotorcycle.length; i++) {
  var card = cardDataMotorcycle[i];

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
  swiperWrapperMotorcycle.appendChild(swiperSlide);
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
