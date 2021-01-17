import React, { Component } from "react";
import "./category_styles.css";

class AddCategory extends Component{

	state = {
		id: '',
		type: '',
		icon: '', //url
		iconColor: '',
		name: '',
		description: ''
	}





setInformation = async (e) =>{
	e.preventDefault();
	const inpN = e.target.elements.name.value;
	const inpD = e.target.elements.description.value;
	await this.setState({name: e.target.elements.name.value});
	await this.setState({description: e.target.elements.description.value});
	await this.setState({id: this.props.getID()})	
	console.log(this.state.name);
	console.log(this.state.description);
	console.log(this.state.id);	
};


render(){
	return (
		<div>
		<form className='addCategory' onSubmit={this.setInformation}>
			<h2>New category</h2>
			<div className='categoryName'>
				<p>name:</p>
				<input className='inpName' type='text' name='name'/>				
			</div>
			<div className='categoryDescription' >
				<p>Description:</p>
				<input className='inpDescr' type='text'  name='description'/>				
			</div>
			<button type='submit' className='btnAddNew'>add new category</button>
		</form>
		</div>
		)
}

}

export default AddCategory;