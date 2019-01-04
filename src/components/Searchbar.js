import React from 'react';

class Searchbar extends React.Component {
    state = {term: ''};

    onChangeMyInputYo = (event) => {
        this.setState({ term: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.term)
    };

    render(){
        return (
        <div className="search-bar  ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Video Search:</label>
                    <input 
                    type="text"
                    value={this.state.term} 
                    onChange={this.onChangeMyInputYo}
                    placeholder="Search Term Goes Here"
                    />
                </div>
            </form>
        </div>
        ) 
    }
}

export default Searchbar