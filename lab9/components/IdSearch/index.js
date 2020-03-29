import styles from '../ExampleComponent/ExampleComponent.module.css';

class IdSearch extends React.Component {
    readID(event) {
        event.preventDefault();

        let element = document.querySelector("#pokeID");

        fetch("/api/pokemon/id/" + element.value)
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
            <div className={styles.body}>
                <h2 className={styles.subheadings}>Search by ID</h2>
                <form onSubmit={this.readID}>
                    <input id="pokeID" className={styles.input} type="text" placeholder="Enter Pokemon ID"></input>
                    <button className={styles.submit_button}>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;