import React from 'react'

const GreaseSelect = (props) => {
	return ( <div>

				<label for="greased?">Grease level </label>
				<select onChange={props.onChange} defaultValue='all' id="greased?">
				      <option value='all'>All</option>
				      <option value={true}>Greased</option>
				      <option value={false}>Ungreased</option>
				</select>
			</div>
		)
}

export default GreaseSelect;