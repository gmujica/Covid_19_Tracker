import React from 'react'
// Components
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        console.log(fetchedData);

        this.setState({ 
            data: fetchedData 
        })
        
    }

    render() {
        const { data } = this.state

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App