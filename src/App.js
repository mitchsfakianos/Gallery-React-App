import 'index.css';
import apiKey from 'config.js';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from 'Nav';
import SearchForm from 'SearchForm';
import DataContainer from 'DataContainer';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search: [],
			cat: [],
			sunset: [],
			rainbow: [],
			load: true
		}
	}

	componentDidMount() {  // performing search to have photos already up when the home page is loaded
	    this.performSearch();
	    this.catSearch();
	    this.sunSearch();
	    this.rainbowSearch();
	}

	// perform search updates search array for the results from the fetch api into the search state
	performSearch = (query) => {
		fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&tags=" + query + "&per_page=24&format=json&nojsoncallback=1")
		  .then(response => response.json())
		  .then(responseData => {
		  	this.setState({ search: responseData.photos.photo, load: false })
		  })
		  .catch(error => {
		  	console.log('Error fetching and parsing data', error);
		  });
	}

	catSearch = (query = "cats") => {
		fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&tags=" + query + "&per_page=24&format=json&nojsoncallback=1")
		  .then(response => response.json())
		  .then(responseData => {
		  	this.setState({ cat: responseData.photos.photo, load: false })
		  })
		  .catch(error => {
		  	console.log('Error fetching and parsing data', error);
		  });
	}

	sunSearch = (query = "sunset") => {
		fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&tags=" + query + "&per_page=24&format=json&nojsoncallback=1")
		  .then(response => response.json())
		  .then(responseData => {
		  	this.setState({ sunset: responseData.photos.photo, load: false })
		  })
		  .catch(error => {
		  	console.log('Error fetching and parsing data', error);
		  });
	}

	rainbowSearch = (query = "rainbow") => {
		fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&tags=" + query + "&per_page=24&format=json&nojsoncallback=1")
		  .then(response => response.json())
		  .then(responseData => {
		  	this.setState({ rainbow: responseData.photos.photo, load: false })
		  })
		  .catch(error => {
		  	console.log('Error fetching and parsing data', error);
		  });
	}

	render() {
		return(
			<BrowserRouter>
			  <div className="container">
			    <SearchForm onSearch={this.performSearch}/>
			    <Nav />	
			    <Switch>
			      <Route path="/search/:query" component=
			      { () =>
			      	(this.state.load)
			      	? <p>Loading...</p>
			      	: <DataContainer data={this.state.search}/>
			      } />
			      <Route exact path='/' render={() => <Redirect to='/cats'/>}/>
			      <Route exact path="/cats" component= 
			      { () =>
			      	(this.state.load)
			      	? <p>Loading...</p>
			      	: <DataContainer data={this.state.cat}/>
			      } />
			      <Route exact path="/sunsets" component= 
			      { () =>
			      	(this.state.load)
			      	? <p>Loading...</p>
			      	: <DataContainer data={this.state.sunset}/>
			      } />
			      <Route exact path="/rainbow" component= 
			      { () =>
			      	(this.state.load)
			      	? <p>Loading...</p>
			      	: <DataContainer data={this.state.rainbow}/>
			      } />
			    </Switch>
			  </div>
			</BrowserRouter>
		);
	}
}