const sideBarMenu = {
	sideBarBtnHandler: () => {
		const body = document.body;
		const sideBar = document.querySelector(".main-sidebar");
		const sideBarBtn = document.querySelector(".main-sidebar__btn");
		const display = document.querySelector(".main-display")

		sideBarBtn.addEventListener("click", (e) => {
			e.preventDefault();
			body.classList.toggle("main-sidebar--opened")
		})
	},
}

export const sideBarBtnHandler = sideBarMenu.sideBarBtnHandler;