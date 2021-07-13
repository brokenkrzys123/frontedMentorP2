const burgerBtn = document.querySelector(".burger-btn");
const mobileNav = document.querySelector(".nav-mobile");
const navItemBtn = document.querySelectorAll(".nav-item__btn");
const listDrop = document.querySelectorAll(".list-drop");
const navArrowDown = document.querySelectorAll(".nav-item-arrow__down");
const navArrowUp = document.querySelectorAll(".nav-item-arrow__up");
burgerBtn.addEventListener("click", function () {
	mobileNav.classList.toggle("active");
});
/*
navItemBtn.forEach((item) =>
	item.addEventListener("click", () =>
		listDrop.forEach((item) => item.classList.toggle("active"))
	)
);*/
