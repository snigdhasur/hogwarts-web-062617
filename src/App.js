import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Pigs from './components/Pigs'
import Hogs from './porkers_data'
import GreaseSelect from './components/GreaseSelect'
import Sort from './components/Sort'

class App extends Component {
  
  constructor() {
  	super();


  	this.state ={
  		pigs: [],
  		greaseSelected: 'all',
  		sorted: "none"
  	}

  }

  componentDidMount() {
  	this.setState({pigs: Hogs})
  }

  
  handleGreaseSelect = (event) => {
  	this.setState({greaseSelected: event.target.value})
  	if (event.target.value === 'all') {
  		switch(this.state.sorted){
  			case "none":
  				this.setState({pigs: Hogs})
  				break;
  			case "name":
  				 const newArrayPigs = Hogs.map(pig => pig)
				 const nameSortPigs = newArrayPigs.sort(function compare(a, b) {
					  if (a.name < b.name) {
					    return -1;
					  }
					  if (a.name > b.name) {
					    return 1;
					  }
					  // a must be equal to b
					  return 0;
					  }
					)
  				this.setState({pigs: nameSortPigs})
  				break;
  			case "weight":
  				const allPigs = Hogs.map(pig => pig)
				const weightSortPigs = allPigs.sort(function compare(a, b) {
					  return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
					})
  				this.setState({pigs: weightSortPigs})
  				break;
  			default:
  				console.log("hello")
  		}

  	} else {
  		

  		switch(this.state.sorted){
  			case "none":
  				const selectedPigs = Hogs.filter(pig => pig.greased.toString() === event.target.value) 
  				this.setState({pigs: selectedPigs})
  				break;
  			case "name":

  				 const newArrayPigs = Hogs.map(pig => pig)
				 const nameSortPigs = newArrayPigs.sort(function compare(a, b) {
					  if (a.name < b.name) {
					    return -1;
					  }
					  if (a.name > b.name) {
					    return 1;
					  }
					  // a must be equal to b
					  return 0;
					  }
					)
  				const nameSelectedPigs = nameSortPigs.filter(pig => pig.greased.toString() === event.target.value) 
  				this.setState({pigs: nameSelectedPigs})
  				break;
  			case "weight":
  				const newArrayPigs3 = Hogs.map(pig => pig)
				const weightSortPigs = newArrayPigs3.sort(function compare(a, b) {
					  return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
					})
  				const weightSelectedPigs = weightSortPigs.filter(pig => pig.greased.toString() === event.target.value) 
  				this.setState({pigs: weightSelectedPigs})
  				break;
  			default:
  				console.log("hello")
  		}

  	}
  }

  handleSort = (event) => {
  	console.log(event.target.value)
  	this.setState({sorted: event.target.value})
  	// if handleGreaeSelect does NOT fire
  	
  		switch(event.target.value) {
	    case "none":
	    	if(this.state.greaseSelected === "all"){
  		
  				this.setState({pigs: Hogs})
  			} else {
  			    const greaseSelectPigs = Hogs.filter(pig => pig.greased.toString() === this.state.greaseSelected) 
  				this.setState({pigs: greaseSelectPigs})
  			}  
	        break;
	    case "name":
	    	if(this.state.greaseSelected === "all"){
	    		console.log("I'm in name + all")
  				 const againPigs = Hogs.map(pig => pig)
				 const nameSortPigsAgain = againPigs.sort(function compare(a, b) {
					  if (a.name < b.name) {
					    return -1;
					  }
					  if (a.name > b.name) {
					    return 1;
					  }
					  // a must be equal to b
					  return 0;
					  }
					)
  				this.setState({pigs: nameSortPigsAgain})
  			} else {
  			    const greaseSelectPigs = Hogs.filter(pig => pig.greased.toString() === this.state.greaseSelected) 
	    		const nameSortPigs2 = greaseSelectPigs.sort(function compare(a, b) {
					  if (a.name < b.name) {
					    return -1;
					  }
					  if (a.name > b.name) {
					    return 1;
					  }
					  // a must be equal to b
					  return 0;
					  }
					)

  				this.setState({pigs: nameSortPigs2})
  			}  
  			break;
	    case "weight":
	        if(this.state.greaseSelected === "all"){
  		
  				const allHogs = Hogs.map(pig => pig)
				const weightSortPigsAgain = allHogs.sort(function compare(a, b) {
					  return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
					})
				this.setState({pigs: weightSortPigsAgain})
  			} else {
  			    const greaseSelectPigs = Hogs.filter(pig => pig.greased.toString() === this.state.greaseSelected) 
	    		const weightSortPigs2 = greaseSelectPigs.sort(function compare(a, b) {
					   return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
					  }
					)
	    		this.setState({pigs: weightSortPigs2})

  			}  

	    	break;
	    default:
	    	console.log("hola")
		}
  	
  }


  render() {
    console.log("render pigs", this.state.pigs)
    console.log("render grease selection", this.state.greaseSelected)
    return (
      <div className="App">
          <Nav />
          <Sort onSort={this.handleSort} value={this.state.sorted}/>
          <GreaseSelect onChange={this.handleGreaseSelect} value={this.state.greaseSelected}/>
          <br></br>
          <Pigs pigs={this.state.pigs} greaseSelected={this.state.greaseSelected} sorted={this.state.sorted}/>
      </div>
    )
  }
}



export default App;
