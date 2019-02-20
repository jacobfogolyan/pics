import React from 'react';

class SearchBar extends React.Component {

	state = {
		term: ''
	};

	onFormSubmit = event => {
		//prevents form from automatically submitting itself.
		event.preventDefault();
		this.props.onSubmit(this.state.term);
		console.log(this.state.term);

	}

	render() {
		//onChange is a special Property
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={ this.state.term }
							onChange={ e => this.setState({ term: e.target.value }) }
						/>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;