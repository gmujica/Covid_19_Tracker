import React from 'react'
// Components
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
//import coronaImage from './images/corona.jpg'
import Header from './components/general/Header'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ 
            data: fetchedData 
        })
        
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)

        console.log(country)
        console.log(fetchedData)

        this.setState({
            data: fetchedData,
            country: country
        })
        
    }

    render() {
        const { data, country } = this.state
        //<img className={styles.image} src={coronaImage} alt="COVID-19" />
        return (
            <div className={styles.container}>
                <Header />   
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App