/**
 * Проверяет наличие выбранных привилегий у пользователя
 * @param {array} necessaryPrivileges Требуемые привилегии
 * @returns {boolean} Наличие у пользователя привилегии
 */

function checkAccessibility(necessaryPrivileges) {
	try {
		let privileges = JSON.parse(localStorage.getItem("privilege"))
		if (privileges == null)
			return false;

		for (let i of privileges) {
			for (let j of necessaryPrivileges)
				if (i === j)
					return true
		}
		return false;
	}
	catch(e) {
		return false;
	}
}

export default checkAccessibility;