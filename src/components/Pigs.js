import React from 'react';
import Pig from './Pig'



const Pigs = (props) => {
	const regExp = /\s/gi
	// the above is the regular expression looking for a space and replacing it GLOBALLY instead of the first instance
	const pigsDivList = props.pigs.map((pig, index) => <Pig key={index} pig={pig} imgName={"./hog-imgs/" + pig.name.toLowerCase().replace(regExp, "_") + ".jpg"} />)
	return (
		<div className="ui grid container cards">
		 {pigsDivList}
		</div>
	)
}


export default Pigs;