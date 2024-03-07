import React from 'react'
import styles from '../CSS/MainHome.module.css'

const MainHome = () => {
  return (
    <div id={styles.mainContainer}>
      <section id={styles.firstSection}>
      </section>
      <section id={styles.secondSection}>
        <h2 className={styles.titleS2}>Bienvenidos</h2>
        <img src={require("../../Assets/Eclipse.jpg")} className={styles.eclipseImg}/>
      </section>

    </div>
  )
}

export default MainHome