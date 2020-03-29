import styles from '../ExampleComponent/ExampleComponent.module.css';

class TypeSearch extends React.Component {
    readType = () => {
        let element = document.querySelector("#pokeType");

        fetch("/api/pokemon/type/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            this.props.callback(processed);

            // let report = document.querySelector("#reportingArea");

            // if(processed.error) {
            //     report.innerHTML = processed.error;
            // }
            // else {
            //     report.innerHTML = processed.name;
            // }
        });
    }

    render() {
        return(
            <div className={styles.body}>
                <h2 className={styles.subheadings}>Search by Type</h2>
                <input id="pokeType" className={styles.input} type="text" placeholder="Enter Pokemon Type"></input>
                <button onClick={this.readType} className={styles.submit_button}>Submit</button>
            </div>
        );
    }
}

export default TypeSearch;