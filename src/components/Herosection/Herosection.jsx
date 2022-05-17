import React from 'react'
import { Card } from '../Card/Card'
import styles from './Herosection.module.css'

export function Herosection({ weathers }) {

  return (
    <div className={styles.container}>
        <div className={styles.leftside}>
            <div className={styles.weatherdosection}>
                <button className={styles.weatherdobutton}>
                    <p>Weatherdo</p>
                    <div className={styles.weathercloudydiv}><img src='./fluent_weather-cloudy-20-filled.svg' alt="weather-cloudy"/></div>
                </button>
            </div>
            <div className={styles.modernise}>
                <p className={styles.firstp}>Modernise<br />with the <span className={styles.cloudspan}>Cloud</span><br />that comes to you</p>
                <p className={styles.secondp}>We’re helping to spread happiness with our ‘drink happy, spread happy’ smoothies…read about how ethically sourcing moringa has had a positive impact on farmers and communities.</p>
            </div>
            <div className={styles.search}>
                <button className={styles.searchbutton}>
                    <p>Search your city</p>
                    <img src='./akar-icons_search.svg' alt='akar_icons'/>
                </button>
            </div>

        </div>

        <div className={styles.rightside}>
            <div className={styles.herocards}>
                <Card weather={weathers[0]} />
                <Card weather={weathers[1]} />
                <Card weather={weathers[2]} />
                <Card weather={weathers[3]} />
            </div>
            <div className={styles.rectanglebackground}>
                <img src='./Design.svg' alt='design' className={styles.design}/>
            </div>
        </div>
    </div>
  )
}
