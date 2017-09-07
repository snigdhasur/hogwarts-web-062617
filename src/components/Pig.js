import React from 'react';
import PigDisplayModal from './PigDisplayModal'

const Pig = (props) => {
	return (
		<div className="ui four wide column card">

				<div className="image">
			      <img src={props.imgName} alt=""/>
			    </div>
			    <div className="content" >
			      <div className="header"><h1>{props.pig.name}</h1></div>
			    </div>
			    <div className="extra content">
    				<PigDisplayModal pig={props.pig} imgName={props.imgName}/>
  				</div>
 
		</div>
	)
}



export default Pig;