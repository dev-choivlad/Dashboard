const html = document.documentElement

function FLS(message) {
	setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

export function isWebp() {
	// Webp support check
	const testWebp = (callback) => {
		const webP = new Image()

		webP.onload = webP.onerror = () => callback(webP.height === 2)
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebp((support) => {
		const className = support ? 'webp' : 'no-webp'
		html.classList.add(className)

		FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
	})
}