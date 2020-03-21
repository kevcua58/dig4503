class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault();

        let element = document.querySelector("#pokeName");

        fetch("/api/pokemon/name/" + element.value)
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
                <h2>Name</h2>
                <form onSubmit={this.readName}>
                    <input id="pokeName" type="text" placeholder="Enter Pokemon Name"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;