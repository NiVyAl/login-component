function checkLog() {
	if (!localStorage.getItem("log")) {
		window.location.href = "/"
	}
}

export default checkLog