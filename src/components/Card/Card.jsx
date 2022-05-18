import React from 'react'
import styles from './Card.module.css'
import clsx from 'clsx';
import '../../App.css';
import dayjs from 'dayjs'

export function Card({ weather }) {
    const getDate = (day) => {
        return `${day.format('dddd')}, ${day.format('H')}:${day.format('mm')}`
    }
    const time = getDate(dayjs())
  
    const getDesigns = (desc, small=true) => {
        switch (desc) {
            case 'Patchy rain possible':
                return {
                    background: 'background1',
                    image: 'Sun cloud little rain.svg',
                    small: small
                }
            case 'Sunny':
                return {
                    background: 'background2',
                    image: 'bolt-isolated 2.svg',
                    small: small
                }
            case 'Partly cloudy':
                return {
                    background: 'background3',
                    image: 'Moon cloud fast wind.svg',
                    small: small
                }
            case 'Snowing':
                return {
                    background: 'background4',
                    image: 'Big snow.svg',
                    small: small
                }
            case 'Raining':
                return {
                    background: 'background5',
                    image: 'Big rain drops.svg',
                    small: small
                }
            default:
                return {
                    background: 'background6',
                    image: 'Cloud 3 zap.svg',
                    small: small
                }

        }
    }
    const design = getDesigns(weather.description)
    
    return (
    <div className={styles.container}>
        <img className={styles.img} src={`/icons/`+design.image} alt="big snow" />
        <div className={clsx(styles.background, `${design.background}`)}>
            <p className={clsx(styles.p, styles.pcity)}>{weather.city}</p>
            <p className={clsx(styles.p, styles.pweather)}>{time}</p>
            <p className={clsx(styles.p, styles.pweather)}>{weather.description}</p>
            <p className={clsx(styles.p, styles.temperature)}>{weather.temperature}</p>
        </div>
    </div>
  )
}
