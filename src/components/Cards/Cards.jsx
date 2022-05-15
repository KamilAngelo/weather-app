import React from 'react'
import styles from './Cards.module.css'
import Bigcard from '../Bigcard/Bigcard'

export default function Cards({ weathers }) {
  return (
    <div className={styles.container}>
      <Bigcard weather={weathers[4]}/>
      <Bigcard weather={weathers[5]}/>
      <Bigcard weather={weathers[6]}/>
    </div>
  )
}
