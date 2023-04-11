const sideBarMenu = {
	sidebarBtnHandler: () => {
		const body = document.body;
		const sideBar = document.querySelector(".sidebar");
		const sideBarBtn = document.querySelector(".sidebar__btn");

		sideBarBtn.addEventListener("click", (e) => {
			e.preventDefault();
			sideBar.classList.toggle("sidebar--closed")
		})
	},

	menuItemClickHandler: () => {
		const menuLinks = document.querySelectorAll(".nav-menu__link");
		menuLinks[0].classList.add("nav-menu__link--active");

		menuLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();

				for (let i = 0; i < menuLinks.length; i++) {
					menuLinks[i].classList.remove("nav-menu__link--active");
				}

				e.currentTarget.classList.add("nav-menu__link--active");
			})
		})
	}
}

const widgets = {
	showDateAndTime: () => {
		const dateTimeDiv = document.querySelector(".date-time")
		let today = new Date().toLocaleString();
		console.log(today);

		dateTimeDiv.innerHTML = `<span>${today}</span>`
	},
}

export const sidebarBtnHandler = sideBarMenu.sidebarBtnHandler;
export const menuItemClickHandler = sideBarMenu.menuItemClickHandler;
export const showDateAndTime = widgets.showDateAndTime;