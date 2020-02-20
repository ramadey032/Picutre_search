import React from 'react';


export default class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label><h3>Image Search</h3></label>
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}