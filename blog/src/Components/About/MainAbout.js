import React from 'react'
import styles from "../CSS/MainAbout.module.css"

const MainAbout = () => {
  return (
    <div class='main-about-container'>
        <div id={styles.aboutContainerTt}>
            <h1 id={styles.abTitle}>About</h1>
        </div>
        <div className={styles.imgDiv}>
            <img src={require("../../Assets/main-photo.jpg")}/>
        </div>
    </div>

  )
}

export default MainAbout