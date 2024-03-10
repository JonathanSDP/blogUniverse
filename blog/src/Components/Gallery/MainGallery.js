import React from 'react'
import styles from "../CSS/MainGallery.module.css";

const MainGalery = () => {
  return (
    <div className={styles.container}>
        <section className={styles.headerBG}></section>
        <div className={styles.title}>
            <h1 className={styles.galeryTitle}>
                Gallery
            </h1>
        </div>
        <span className={styles.line}></span>
        <section className={styles.gallerySection}>
          <a href="#image1"><img src={require("../../Assets/img01.jpg")} alt=""/></a>
          <a href="#image2"><img src={require("../../Assets/img02.jpg")} alt=""/></a>
          <a href="#image3"><img src={require("../../Assets/img03.jpg")} alt=""/></a>
          <a href="#image4"><img src={require("../../Assets/img04.jpg")} alt=""/></a>
          <a href="#image5"><img src={require("../../Assets/img05.jpg")} alt=""/></a>
          <a href="#image6"><img src={require("../../Assets/img06.jpg")} alt=""/></a>
          <a href="#image7"><img src={require("../../Assets/img07.jpg")} alt=""/></a>
          <a href="#image8"><img src={require("../../Assets/img08.jpg")} alt=""/></a>
          <a href="#image9"><img src={require("../../Assets/img09.jpg")} alt=""/></a>
        </section>

        <article className={styles.lightBox} id={styles.image1}>
          <a href=""></a>
        </article>
    </div>
  )
}

export default MainGalery