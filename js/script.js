const benefitCard1 = document.querySelector(".benefit-card:nth-child(1) ");
const benefitCard2 = document.querySelector(".benefit-card:nth-child(2)");
const benefitCard3 = document.querySelector(".benefit-card:nth-child(3)");
const benefitCard4 = document.querySelector(".benefit-card:nth-child(4)");
const benefit1 = document.querySelector(".benefit1");
const benefit2 = document.querySelector(".benefit2");
const benefit3 = document.querySelector(".benefit3");
const benefit4 = document.querySelector(".benefit4");

benefitCard1.addEventListener("mouseover", () => { benefit1.src="./img/benefits/ben1_active.svg" });
benefitCard1.addEventListener("mouseout", () => { benefit1.src="./img/benefits/ben1.svg" });
benefitCard2.addEventListener("mouseover", () => { benefit2.src="./img/benefits/ben2_active.svg" });
benefitCard2.addEventListener("mouseout", () => { benefit2.src="./img/benefits/ben2.svg" });
benefitCard3.addEventListener("mouseover", () => { benefit3.src="./img/benefits/ben3_active.svg" });
benefitCard3.addEventListener("mouseout", () => { benefit3.src="./img/benefits/ben3.svg" });
benefitCard4.addEventListener("mouseover", () => { benefit4.src="./img/benefits/ben4_active.svg" });
benefitCard4.addEventListener("mouseout", () => { benefit4.src="./img/benefits/ben4.svg" });