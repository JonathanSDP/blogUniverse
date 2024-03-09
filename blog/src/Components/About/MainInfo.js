import React from 'react'
import styles from "../CSS/MainInfo.module.css"

const MainInfo = () => {
  return (
    <div class={styles.mainInfoContainer}>
      <section id={styles.section1}>
      <div className={styles.sunDiv}>
        <h1 className={styles.title}>The Sun</h1>
        <p className={styles.theSun}>
        El Sol del latín sol, solis, dios Sol invictus o sol, 
        a su vez de la raíz protoindoeuropea sauel, luz es una estrella de 
        tipo-G de la secuencia principal y clase de luminosidad V que se encuentra
        en el centro del sistema solar y constituye la mayor fuente de radiación 
        electromagnética de este sistema planetario. Es una esfera casi perfecta 
        de plasma, con un movimiento convectivo interno que genera un campo magnético 
        a través de un proceso de dinamo. Cerca de tres cuartas partes de la masa del 
        Sol constan de gases como el hidrógeno; el resto es principalmente helio, 
        con cantidades mucho más pequeñas de elementos, incluyendo el oxígeno, 
        carbono, neón y hierro.
        Se formó hace aproximadamente 4600 millones de años a partir del colapso 
        gravitacional de la materia dentro de una región de una gran nube molecular. 
        La mayor parte de esta materia se acumuló en el centro, mientras que el resto 
        se aplanó en un disco en órbita que se convirtió en el sistema solar. La masa 
        central se volvió cada vez más densa y caliente, dando lugar con el tiempo al 
        inicio de la fusión nuclear en su núcleo. Se cree que casi todas las estrellas 
        se forman por este proceso. El Sol es más o menos de edad intermedia y no ha 
        cambiado drásticamente desde hace más de cuatro mil millones de años, y seguirá 
        siendo bastante estable durante otros 5000 millones de años más. Sin embargo, 
        después de que la fusión del hidrógeno en su núcleo se haya detenido, el Sol 
        sufrirá cambios importantes y se convertirá en una gigante roja. Se estima que 
        el Sol se volverá entonces lo suficientemente grande como para engullir las órbitas 
        actuales de Mercurio, Venus y posiblemente la Tierra.
        </p>
        <div className={styles.sImgDiv}>
        <img src={require("../../Assets/sun.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      {/* <hr className={styles.hr}/> */}
      <section id={styles.section2}>
      <div className={styles.sunDiv2}>
        <h1 className={styles.title2}>Mercury</h1>
        <p className={styles.theSun}>
        Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. 
        Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus. 
        Se conocía muy poco sobre su superficie hasta que fue enviada la sonda planetaria Mariner 10 y se hicieron 
        observaciones con radar y radiotelescopios. Posteriormente fue estudiado por la sonda MESSENGER de la NASA y 
        actualmente la astronave de la Agencia Europea del Espacio (ESA) denominada BepiColombo, lanzada en octubre 
        de 2018, se halla en vuelo rumbo a Mercurio a donde llegará en 2025 y se espera que aporte nuevos conocimientos 
        sobre el origen y composición del planeta, así como de su geología y campo magnético.
        Antiguamente se pensaba que Mercurio siempre presentaba la misma cara al Sol (rotación capturada), situación similar al 
        caso de la Luna con la Tierra; es decir, que su periodo de rotación era igual a su periodo de traslación, ambos de 88 días. 
        Sin embargo, en 1965 se mandaron impulsos de radar hacia Mercurio, con lo cual quedó definitivamente demostrado que su periodo 
        de rotación era de 58,7 días, lo cual es ⅔ de su periodo de traslación. Esto no es coincidencia, y es una situación denominada 
        resonancia orbital.
        Al ser un planeta cuya órbita es inferior a la de la Tierra, lo observamos pasar periódicamente delante del Sol, fenómeno que se 
        denomina tránsito astronómico. Observaciones de su órbita a través de muchos años demostraron que el perihelio gira 43" de arco 
        más por siglo de lo predicho por la mecánica clásica de Newton. Esta discrepancia llevó a un astrónomo francés, Urbain Le Verrier,
        a pensar que existía un planeta aún más cerca del Sol, al cual llamaron Vulcano, que perturbaba la órbita de Mercurio. Ahora se sabe 
        que Vulcano no existe; la explicación correcta del comportamiento del perihelio de Mercurio se encuentra en la teoría general de la 
        relatividad de Einstein.
        </p>
        <div className={styles.sImgDiv2}>
        <img src={require("../../Assets/mercury.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      {/* <hr className={styles.hr}/> */}
      <section id={styles.section3}>
      <div className={styles.sunDiv3}>
        <h1 className={styles.title3}>Venus</h1>
        <p className={styles.theSun}>
        Venus es el segundo planeta del sistema solar en orden de proximidad 
        al Sol y el tercero más pequeño después de Mercurio y Marte. Al igual 
        que Mercurio, carece de satélites naturales. Recibe su nombre en honor 
        a Venus, la diosa romana del amor en la Antigua Grecia, Afrodita. Al 
        ser el segundo objeto natural más brillante después de la Luna, puede 
        ser visto en un cielo nocturno despejado a simple vista. Aparece al 
        despuntar el día y al atardecer. Debido a las distancias de las órbitas 
        de Venus y la Tierra desde el Sol, Venus nunca es visible más de tres 
        horas antes del amanecer o tres horas después del ocaso.
        Se trata de un planeta interior de tipo rocoso y terrestre, 
        llamado con frecuencia el planeta hermano de la Tierra, ya que ambos 
        son similares en cuanto a tamaño, masa y composición, aunque totalmente 
        diferentes en cuestiones térmicas y atmosféricas la temperatura media de 
        Venus es de 463,85 °C. Su órbita es una elipse con una excentricidad de 
        menos del 1 %, formando la órbita más circular de todos los planetas; 
        apenas supera la de Neptuno. Su presión atmosférica es 90 veces superior 
        a la terrestre; es, por lo tanto, la mayor presión atmosférica de todos 
        los planetas rocosos del sistema solar. Es de color amarillento debido a 
        su atmósfera, que está compuesta en su mayoría por dióxido de carbono (CO2), 
        ácido sulfhídrico (H2S) y nitrógeno (N2).
        Pese a situarse más lejos del Sol que Mercurio, Venus posee la atmósfera más 
        caliente del sistema solar; esto se debe a que está principalmente compuesta 
        por gases de efecto invernadero, como el dióxido de carbono, atrapando mucho 
        más calor del Sol. Actualmente carece de agua líquida y sus condiciones en 
        superficie se consideran incompatibles con la vida conocida, aunque en 
        descubrimientos recientes se ha encontrado fosfina en su superficie nebular, 
        una molécula que en la Tierra es generada por microbios, lo que da indicios 
        de una posible existencia de vida. No obstante, el Instituto Goddard de Estudios 
        Espaciales de la NASA y otros han postulado que en el pasado Venus pudo tener 
        océano con tanta agua como el terrestre y reunir condiciones de habitabilidad 
        planetaria.
        </p>
        <div className={styles.sImgDiv3}>
        <img src={require("../../Assets/venus.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
    </div>

  )
}

export default MainInfo