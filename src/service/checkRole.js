// if (JSON.parse(localStorage.getItem("privilege"))) { //если в localStorage хранятся привилегии
// 	const privilege = JSON.parse(localStorage.getItem("privilege"));
// 	this.setState({role: checkRole(privilege)}); // заганяем в this.state.role роль пользователя
// }

function checkRole(privilege) {
	let role = "";
	for (let i of privilege) {
		if (i === "REVIEW_PRIVILEGE") {
			role = "review";
		}
		
		if (i === "WRITE_PRIVILEGE") {
			role = "writer";
		}
		
		if (i === "ADD_PRIVILEGE") {
			role = "secretary";
		}
	}
	return role;
}

export default checkRole;