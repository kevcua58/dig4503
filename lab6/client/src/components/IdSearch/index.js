import React from 'react';

class IdSearch extends React.Component {
    readID(event) {
        event.preventDefault();

        let element = document.querySelector("#pokeID");

        fetch("/id/" + element.value)
        .then((res) => {
             return res.json();
        })
        .then((processed) => {
            let report = document.querySelector("#reportingArea");

            if(processed.error) {
                report.innerHTML = processed.error;
            }
            else {
                report.innerHTML = processed.name;
            }
        });
    }
    render() {
        return(
            <div>
                <h2>ID</h2>     
                <form onSubmit={this.readID}>
                    <input id="pokeID" type="text" placeholder="Enter Pokemon ID"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;