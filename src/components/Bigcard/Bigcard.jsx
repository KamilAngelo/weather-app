import React from 'react'
import styles from './BigCard.module.css'
import clsx from 'clsx';
import '../../App.css';

export function BigCard({ weather }) {
    const today = new Date()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[today.getDay()];
    const time = day+", "+((today.getHours().toString().length) < 2 ? "0"+today.getHours() : today.getHours()) + ':' + ((today.getMinutes().toString().length) < 2 ? "0"+today.getMinutes() : today.getMinutes());
 
    let design = {
        background:'',
        image:''
    }
    switch (weather.description) {
        case 'Patchy rain possible':
            design.background = 'background1'
            design.image = 'Sun cloud little rain.svg'
            break
        case 'Sunny':
            design.background = 'background2'
            design.image = 'bolt-isolated 2.svg'
            break
        case 'Partly cloudy':
            design.background = 'background3'
            design.image = 'Moon cloud fast wind.svg'
            break
        case 'Snowing':
            design.background = 'background4'
            design.image = 'Big snow.svg'
            break
        case 'Raining':
            design.background = 'background5'
            design.image = 'Big rain drops.svg'
            break
        default:
            design.background = 'background6'
            design.image = 'Cloud 3 zap.svg'

    }
    
    return (
    <div className={styles.container}>
        <img className={styles.img} src={`/icons/`+design.image} alt="big snow" />
        <div className={clsx(styles.background, `${design.background}` )}>
            <p className={clsx(styles.p, styles.pcity)}>{weather.city}</p>
            <p className={clsx(styles.p, styles.pweather)}>{time}</p>
            <p className={clsx(styles.p, styles.pweather)}>{weather.description}</p>
            <p className={clsx(styles.p, styles.temperature)}>{weather.temperature}</p>
        </div>
    </div>
  )
}
