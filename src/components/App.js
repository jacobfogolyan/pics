import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

	state = { images: [] };

onSearchSubmit = async term => {
	//state.images is going to be an array so we can use `map`
	const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: "Client-ID 47edb515c9f5a6cbdfdcabdeaa4e826ddb0fc6ca8132c66f3a2e7c2135c79fce"
			}
		});
		this.setState({ images: response.data.results })
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
			    <SearchBar onSubmit={ this.onSearchSubmit }/>
				Found: { this.state.images.length } images
			</div>
			);
		}
};

export default App;