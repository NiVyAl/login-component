import ApiService from "../service/ApiService";

class sendInput {
	constructor() {
		this.data = {}
	}
	
	submit = async (e) => {
		e.preventDefault();
		await ApiService.addArticle1(this.data)
		.then(res => {
			return res
		})
		.catch(error => {
			return error
		});  
	}
	
	handleChange = (e) => {
		this.data[e.target.id] = e.target.value;
	}
}

export default new sendInput()