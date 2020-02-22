import React from 'react';


export default class SearchBar extends React.Component {
    state = { inputValue: '' }

    onFormSubmit= (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label><h3>Image Search</h3></label>
                        <input type="text"
                            placeholder="Search..."
                            value={this.state.inputValue}
                            onChange={e => this.setState({ inputValue: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}