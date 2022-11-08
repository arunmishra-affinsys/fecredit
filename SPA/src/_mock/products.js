import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
/* eslint-disable */
// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Allmiles',
  'Amazon',
  'Classic',
  'Corporate Platinum',
  'Corporate',
  'Corporate_premium',
  'Costco BankBuddy Credit Card',
  'diners2',
  'diners_black',
  'diners_clubmiles',
  'diners_club_premium',
  'diners',
  'diners_privilege',
  'disney_titanium',
  'doctor',
  'doctor_regal',
  'doctor_superia',
  'emi',
  'Emirates Platinum Credit Card',
  'emirates',
  'Emirates Titanium Credit Card',
  'freedom',
  'golf',
  'indigo',
  'infinite',
  'MC_Prepaid_1280x720_0',
  'millennia',
  'moneyback',
  'platinum_edge',
  'platinum_plus',
  'Platinum Golf Credit Card',
  'regalia',
  'save_max',
  'save_smart',
  'silver_disney',
  'smartsave',
  'South West Credit Card',
  'superia',
  'teacher',
  'titanium_edge',
  'Total BankBuddy Credit Card',
  'travel',
  'Uber BankBuddy Bank Credit Card',
  'visa_signature',
  'Walmart BankBuddy Bank Signature Card',
  'women',
  'world_mastercard',
];

const CREDIT_CARDS = [
  'allmiles.png',
  'amazon.png',
  'classic.png',
  'corporate_platinum.png',
  'corporate.png',
  'corporate_premium.png',
  'costco.png',
  'diners2.png',
  'diners_black.png',
  'diners_clubmiles.png',
  'diners_club_premium.png',
  'diners.png',
  'diners_privilege.png',
  'disney_titanium.png',
  'doctor.png',
  'doctor_regal.png',
  'doctor_superia.png',
  'emi.png',
  'emirates_platinum.png',
  'emirates.png',
  'emirates_titanium.png',
  'freedom.png',
  'golf.png',
  'indigo.png',
  'infinite.png',
  'MC_Prepaid_1280x720_0.jpg',
  'millennia.png',
  'moneyback.png',
  'platinum_edge.png',
  'platinum_plus.png',
  'platinum.png',
  'regalia.png',
  'save_max.png',
  'save_smart.png',
  'silver_disney.png',
  'smartsave.png',
  'southwest.png',
  'superia.png',
  'teacher.png',
  'titanium_edge.png',
  'total.png',
  'travel.png',
  'uber.png',
  'visa_signature.png',
  'walmart.png',
  'women.png',
  'world_mastercard.png',
];

const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/credit_cards/${CREDIT_CARDS[index]}`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['5% cashback', 'No hidden charges', 'Save upto 6000', 'Unlimited Lounge Access']),
  };
});

export default products;
