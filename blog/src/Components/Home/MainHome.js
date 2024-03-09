import React from 'react'
import styles from '../CSS/MainHome.module.css'

const MainHome = () => {
  return (
    <div id={styles.mainContainer}>
      <section id={styles.secondSection}>
        <div className={styles.sun}></div>
        <div className={styles.mercuryOutline}>
          <div className={styles.mercury}>
            <p className={styles.planets}>Mercury</p>
          </div>
        </div>
        <div className={styles.venusOutline1}>
          <div className={styles.venus}>
            <p className={styles.planets}>Venus</p>
          </div>
        </div>
        <div className={styles.earthOutline1}>
          <div className={styles.earth}>
            <div className={styles.earthCircle}>
              <div className={styles.earthInner}></div>
            </div>
            <p className={styles.planets}>Earth</p>
          </div>
        </div>
        <div className={styles.marsOutline1}>
          <div className={styles.mars}>
            <p className={styles.planets}>Mars</p>
          </div>
        </div>
        <div className={styles.jupiterOutline1}>
          <div className={styles.jupiter}>
            <p className={styles.planets}>Jupiter</p>
          </div>
        </div>
        <div className={styles.saturnOutline1}>
          <div className={styles.saturn}>
            <p className={styles.planets}>Saturn</p>
          </div>
        </div>
        <div className={styles.uranusOutline1}>
          <div className={styles.uranus}>
            <p className={styles.planets}>Uranus</p>
          </div>
        </div>
        <div className={styles.neptuneOutline1}>
          <div className={styles.neptune}>
            <p className={styles.planets}>Neptune</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MainHome