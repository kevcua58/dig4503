import React from "react";

class YearSearch extends React.Component {
    yearSearchFormSubmit = () => {
        let year = document.querySelector('#yearSearch').value;

        if(year.length === 0) {
            year = "0";
        }

        fetch("http://localhost:80/movies/year/" + year)
        .then((res) => {return res.json()})
        .then((processed) => {
            this.props.callback(processed);
        });
    }

    render() {
        return(
            <div>
                <h2>Search for Movies by their Year:</h2>
                <input type="text" id="yearSearch" onKeyUp={this.yearSearchFormSubmit}></input>
            </div>
        );
    }
}

export default YearSearch;