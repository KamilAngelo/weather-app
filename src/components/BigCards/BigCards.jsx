import React from 'react'
import styles from './BigCards.module.css'
import { BigCard } from '../BigCard/BigCard'

export function BigCards({ weathers }) {
  return (
    <div className={styles.container}>
      <BigCard weather={weathers[4]}/>
      <BigCard weather={weathers[5]}/>
      <BigCard weather={weathers[6]}/>
    </div>
  )
}
