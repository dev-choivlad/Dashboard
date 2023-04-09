const sideBarMenu = {
	sidebarBtnHandler: () => {
		const body = document.body;
		const sideBar = document.querySelector(".sidebar");
		const sideBarBtn = document.querySelector(".sidebar__btn");

		console.log(sideBarBtn)

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

export const sidebarBtnHandler = sideBarMenu.sidebarBtnHandler;
export const menuItemClickHandler = sideBarMenu.menuItemClickHandler;