import { faker } from "@faker-js/faker";
import { sample } from "lodash";
/* eslint-disable */
// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "Allmiles",
  "Amazon",
  "Classic",
  "Corporate Platinum",
  "Corporate",
  "Corporate_premium",
  "Costco BankBuddy Credit Card",
  "diners2",
  "diners_black",
  "diners_clubmiles",
  "diners_club_premium",
  "diners",
  "diners_privilege",
  "disney_titanium",
  "doctor",
  "doctor_regal",
  "doctor_superia",
  "emi",
  "Emirates Platinum Credit Card",
  "emirates",
  "Emirates Titanium Credit Card",
  "freedom",
  "golf",
  "indigo",
  "infinite",
  "MC_Prepaid_1280x720_0",
  "millennia",
  "moneyback",
  "platinum_edge",
  "platinum_plus",
  "Platinum Golf Credit Card",
  "regalia",
  "save_max",
  "save_smart",
  "silver_disney",
  "smartsave",
  "South West Credit Card",
  "superia",
  "teacher",
  "titanium_edge",
  "Total BankBuddy Credit Card",
  "travel",
  "Uber BankBuddy Bank Credit Card",
  "visa_signature",
  "Walmart BankBuddy Bank Signature Card",
  "women",
  "world_mastercard",
];

const CREDIT_CARDS = [
  "allmiles.png",
  "amazon.png",
  "classic.png",
  "corporate_platinum.png",
  "corporate.png",
  "corporate_premium.png",
  "costco.png",
  "diners2.png",
  "diners_black.png",
  "diners_clubmiles.png",
  "diners_club_premium.png",
  "diners.png",
  "diners_privilege.png",
  "disney_titanium.png",
  "doctor.png",
  "doctor_regal.png",
  "doctor_superia.png",
  "emi.png",
  "emirates_platinum.png",
  "emirates.png",
  "emirates_titanium.png",
  "freedom.png",
  "golf.png",
  "indigo.png",
  "infinite.png",
  "MC_Prepaid_1280x720_0.jpg",
  "millennia.png",
  "moneyback.png",
  "platinum_edge.png",
  "platinum_plus.png",
  "platinum.png",
  "regalia.png",
  "save_max.png",
  "save_smart.png",
  "silver_disney.png",
  "smartsave.png",
  "southwest.png",
  "superia.png",
  "teacher.png",
  "titanium_edge.png",
  "total.png",
  "travel.png",
  "uber.png",
  "visa_signature.png",
  "walmart.png",
  "women.png",
  "world_mastercard.png",
];

const details = [
  {
    card_name: "SouthWest Credit Card",
    card_details:
      "Earn 2.5% Rewards spends on done via IndiGo website, mobile app and other platformsEarn 2% Rewards on Grocery, Dining and Entertainment.",
  },
  {
    card_name: "Emirates Platinum Credit Card",
    card_details:
      "Earn 5% on done via IndiGo website, mobile app and other platforms.Earn 3% Rewards on Grocery, Dining and Entertainment.",
  },
  {
    card_name: "Emirates Titanium Credit Card",
    card_details:
      "Welcome benefit of up to 30,000 InterMiles and earn 8 InterMiles or every Rs.150 spent2X InterMiles for flights booked on www.intermiles.com",
  },
  {
    card_name: "Uber BankBuddy Bank Credit Card",
    card_details:
      "Welcome benefit of up to 30,000.2X Miles.Welcome benefit of up to 30,000.2X Miles.Welcome benefit of up to 30,000.2X Miles.",
  },
  {
    card_name: "Total BankBuddy Bank Credit Card",
    card_details:
      "Earn 5% of your spends as Fuel Points at IndianOil outlets, shopping for groceries and bill paymentsEarn 1 Fuel Point for every Rs. 150 spent on other purchases",
  },
  {
    card_name: "Costco BankBuddy Bank  Credit Card",
    card_details:
      "Welcome benefit of up to 3,000 InterMiles and earn 4 InterMiles or every Rs.150 spent2X InterMiles for flights booked on www.intermiles.com",
  },
  {
    card_name: "Walmart BankBuddy Bank Signature",
    card_details:
      "Earn InterMiles on your purchases and accelerated miles on flights booked on www.intermiles.comFuel surcharge of 2.5% plus service tax will be replaced by Convenience fee of 1% (effective 01 Feb\u201917) plus GST (effective 01 Jul\u201917).",
  },
  {
    card_name: "Platinum Golf Credit Card",
    card_details:
      "25% off on movies and up to 20% off on dining (participating restaurants)Live GPS location based offers 365 days on Times Card WebApp",
  },
  {
    card_name: "Silver Disney Credit Card",
    card_details:
      "Live GPS location based offers 365 days on Times Card WebApp25% off on movies and up to 15% off on dining (participating restaurants)",
  },
  {
    card_name: "Titanium Disney Credit Card ",
    card_details:
      "2 Reward Points per Rs. 150 spent on all purchasesExciting Welcome Benefit : Snapdeal Vouchers worth Rs. 2000",
  },
  {
    card_name: "Amazon Credit Card",
    card_details:
      "2 Reward Points per Rs. 150 spent on all purchasesExciting Welcome Benefit : Snapdeal Vouchers worth Rs. 2000",
  },
  {
    card_name: "Millennia Credit Card",
    card_details:
      "5% CashBack on shopping via PAYZAPP & SmartBUY2.5% CashBack on all online spends 5% CashBack on shopping via PAYZAPP & SmartBUY2.5% CashBack on all online spends 5% CashBack on shopping via PAYZAPP & SmartBUY2.5% CashBack on all online spends",
  },
  {
    card_name: "EasyEMI Card",
    card_details:
      "Auto EMI conversion of spends above 05% CashBack on shopping via PayZapp and SmartBuy. 5% CashBack on shopping via PAYZAPP & SmartBUY2.5% CashBack on all online spends. 5% CashBack on shopping via PAYZAPP & SmartBUY2.5% CashBack on all online spends",
  },
  {
    card_name: "Infinite Credit Card",
    card_details:
      "Complimentary one-year Club Marriott membershipUnlimited airport lounge access across the globe. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Regal Credit Card",
    card_details:
      "Complimentary lounge access at over 1000 airports24x7 travel concierge services.Complimentary lounge access at over 1000 airports24x7 travel concierge services.Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Diners Club Black Credit Card",
    card_details:
      "Complimentary annual memberships of Club Marriott, Forbes, Amazon Prime, Zomato Gold, MMTDOUBLEBLACK and Times PrimeUnlimited complimentary worldwide Airport lounge access for Primary and Add On customers",
  },
  {
    card_name: "Diners Club Privilege Credit Card",
    card_details:
      "Complimentary annual memberships of Amazon Prime, Zomato Gold, MMTDOUBLEBLACK and Times PrimeComplimentary worldwide airport lounge access for Primary and Add On customers",
  },
  {
    card_name: "Regal First Credit Card",
    card_details:
      "Exclusive dining privileges with up to 15% discount at partner restaurants4 Reward Points for every  150 spent\n                  ",
  },
  {
    card_name: "Diners ClubMiles Credit Card",
    card_details:
      "Get up to 6 complimentary access to 700+ lounges worldwide annuallyRedeem Reward Points for bookings across 150+ airlines and a wide range of hotels",
  },
  {
    card_name: "Doctors Superia Credit Card",
    card_details:
      "3 Reward Points for every  150 spent and 50% more points on dining spendsReward Points can be exchanged for Miles (at 0.7 Miles for every point)",
  },
  {
    card_name: "Doctor's Regalia Credit Card",
    card_details:
      "Complimentary Airport Lounge Access through Priority Pass MembershipLowest Foreign Currency Mark-up Fee of 2% on international transactions\n                      ",
  },
  {
    card_name: "Teachers Platinum Credit Card",
    card_details:
      "Special gift of 500 Reward Points on Teacher's Day (5 Sept) every yearConvenient utility bill payment with SmartPay",
  },
  {
    card_name: "Superia Credit Card",
    card_details:
      "Save more while flying domestic with Air India, etc.Redeem points for Miles with 20+ international airlines",
  },
  {
    card_name: "All Miles Credit Card",
    card_details:
      "Free access to over 600 exclusive airport loungesThree reward points for every Rs. 150 spent, redeem points for air miles\n                      ",
  },
  {
    card_name: "Freedom Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "MoneyBack Credit Card",
    card_details:
      "2 Reward Points for every  150 spent; 2X Reward Points for shopping online Reward Points redemption as CashBack against Credit Card dues, exclusive gifts, or Air Miles. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Titanium Edge Credit Card",
    card_details:
      "Great cashback offers on everyday spends 2 Reward Points for every  150 spent; 50% more Reward Points at premium restaurants",
  },
  {
    card_name: "Platinum Edge Credit Card",
    card_details:
      "2 Reward Points for every  150 spent; 2X Reward Points for shopping online Reward Points redemption as CashBack against Credit Card dues, exclusive gifts, or Air Miles",
  },
  {
    card_name: "Solitaire Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Visa Signature Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "World MasterCard Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Diners Club Premium Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Diners Club Rewardz Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Platinum Plus Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Corporate Premium Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Corporate Platinum Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Best Price Save Smart Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above. Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
  {
    card_name: "Best Price Save Max Credit Card",
    card_details:
      "Earn 1 Reward Point on every 150 spent Enjoy Gift Voucher on annual spends of 90,000 and above.Complimentary lounge access at over 1000 airports24x7 travel concierge services.",
  },
];

const PRODUCT_COLOR = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

// ----------------------------------------------------------------------

const products = details.map((_, index) => {
  const setIndex = index;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/credit_cards/${CREDIT_CARDS[index]}`,
    name: _.card_name,
    details: _.card_details,
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale:
      setIndex % 3
        ? null
        : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample([
      "5% cashback",
      "No hidden charges",
      "Save upto 6000",
      "Unlimited Lounge Access",
    ]),
  };
});

export default products;
