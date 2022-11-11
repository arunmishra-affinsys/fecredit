// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_analytics"),
  },
  {
    title: "Accounts",
    path: "/dashboard/account",
    icon: icon("ic_user"),
  },
  {
    title: "Credit Card",
    path: "/dashboard/creditcard",
    icon: icon("ic_cart"),
    items: [
      "Millenia Cards",
      "Credit Cards",
      "Debit Cards",
      "Prepaid Cards",
      "Forex Cards",
      "Commercial Credit Cards",
    ],
  },
  {
    title: "Debit Card",
    path: "/dashboard/debitcard",
    icon: icon("ic_cart"),
  },
  {
    title: "Insurance",
    path: "/dashboard/insurance",
    icon: icon("ic_blog"),
  },
  {
    title: "Deposits",
    path: "/dashboard/deposits",
    icon: icon("ic_cart"),
  },
  {
    title: "Loan",
    path: "/dashboard/loan",
    icon: icon("ic_cart"),
  },
  // {
  //   title: "login",
  //   path: "/login",
  //   icon: icon("ic_lock"),
  // },

  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: icon("ic_disabled"),
  // },
];

export default navConfig;
