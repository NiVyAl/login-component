class sendInput {
	constructor() {
		this.data = {}
	}
	
	handleChange = (e) => {
		this.data[e.target.id] = e.target.value;
		if (e.target.value === "") {
			delete this.data[e.target.id];
		}
	}
}

export default new sendInput()