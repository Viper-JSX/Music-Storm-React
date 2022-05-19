class Achievement{
	constructor(name, nameForCheck, target){
		this.name = name;
		this.nameForCheck = nameForCheck;
		this.target = target;
		this.completed = false;
	};

	complete(){
		this.complete = true;
	}
}

export default Achievement;