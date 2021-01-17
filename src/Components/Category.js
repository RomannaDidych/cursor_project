import React, { Component } from "react";
import "./category_styles.css";
import ic from './icons/category/food_light.png';
import menu from './icons/menu.png' 

class Category extends Component{

	/*state = {
		id: '',
		type: '',
		icon: ic, //url
		iconColor: '',
		name: '',
		description: ''
	}*/



	render(){
		return (
			<div className= 'categoryRow'>
				<div className = 'category' onClick={()=> console.log(ic)}>
				<img className= 'icon' src={this.state.icon}  alt ='icon' /> 									
					<div className= 'name'>
						<p>food</p>
					</div>
				</div>
				<div className= 'description'>
					<p>bought on the market</p>
				</div>				
				<div className= 'action'>
					<button type='button' className= 'btnAction'>
						<img className= 'menu' src={menu} alt ='menu' />
					</button>
				</div>
			</div>			
			)
	}

}

export default Category


//<i class="fas fa-pizza-slice"></i>