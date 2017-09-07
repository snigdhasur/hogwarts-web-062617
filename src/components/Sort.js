import React from 'react'

const Sort = (props) => {
	return (

			<div>
				<label for="sortBy">Sort by </label>
				<select id="sortBy" onChange={props.onSort} defaultValue="none">
				      <option value="none"></option>
				      <option value="name">Name</option>
				      <option value="weight">Weight</option>
				</select>
			</div>

		)
}




export default Sort;