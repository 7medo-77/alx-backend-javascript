function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  [`budgetincome-${getCurrentYear()}`] = income;
  [`budgetgdp-${getCurrentYear()}`] = gdp;
  [`budgetcapita-${getCurrentYear()}`] = capita;

  return budget;
}
