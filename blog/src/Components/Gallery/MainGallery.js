import React from 'react'
import styles from "../CSS/MainGallery.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


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
          <a href="#image01"><img src={require("../../Assets/img01.jpg")} alt=""/></a>
          <a href="#image02"><img src={require("../../Assets/img02.jpg")} alt=""/></a>
          <a href="#image03"><img src={require("../../Assets/img03.jpg")} alt=""/></a>
          <a href="#image04"><img src={require("../../Assets/img04.jpg")} alt=""/></a>
          <a href="#image05"><img src={require("../../Assets/img05.jpg")} alt=""/></a>
          <a href="#image06"><img src={require("../../Assets/img06.jpg")} alt=""/></a>
          <a href="#image07"><img src={require("../../Assets/img07.jpg")} alt=""/></a>
          <a href="#image08"><img src={require("../../Assets/img08.jpg")} alt=""/></a>
          <a href="#image09"><img src={require("../../Assets/img09.jpg")} alt=""/></a>
        </section>

        <article className={styles.lightBox} id="image01">
          <a href="#image09" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img01.jpg")} alt=""/>
          <a href='#image02' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image02">
          <a href="#image01" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img02.jpg")} alt=""/>
          <a href='#image03' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image03">
          <a href="#image02" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img03.jpg")} alt=""/>
          <a href='#image04' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image04">
          <a href="#image03" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img04.jpg")} alt=""/>
          <a href='#image05' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image05">
          <a href="#image04" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img05.jpg")} alt=""/>
          <a href='#image06' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image06">
          <a href="#image05" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img06.jpg")} alt=""/>
          <a href='#image07' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image07">
          <a href="#image06" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img07.jpg")} alt=""/>
          <a href='#image08' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image08">
          <a href="#image07" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img08.jpg")} alt=""/>
          <a href='#image09' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <article className={styles.lightBox} id="image09">
          <a href="#image08" className={styles.next}><FontAwesomeIcon icon={faArrowLeft}/></a>
          <img src={require("../../Assets/img09.jpg")} alt=""/>
          <a href='#image01' className={styles.next}><FontAwesomeIcon icon={faArrowRight}/></a>
          <a href="#" className={styles.close}>X</a>
        </article>
        <script src="https://kit.fontawesome.com/b62bfedd44.js" crossorigin="anonymous"></script>
    </div>
  )
}

export default MainGalery