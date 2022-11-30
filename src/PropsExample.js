import React from 'react'
class PropsExample extends React.Component{
	render(){
		return(
			<div>
			this is class component
			<p>name:{this.props.name}</p>
			<p>age:{this.props.age}</p>
			</div>
		)
	}
}
export default PropsExample