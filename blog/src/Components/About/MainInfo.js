import React from 'react'
import styles from "../CSS/MainInfo.module.css"

const MainInfo = () => {
  return (
    <div class={styles.mainInfoContainer}>
      <section id={styles.section1}>
      <div className={styles.sunDiv}>
        <h1 className={styles.title}>The Sun</h1>
        <p className={styles.theSun}>
        The Sun from the Latin sol, solis, god Sol invictus or sun,
        in turn from the Proto-Indo-European root sauel, light is a star of
        G-type of the main sequence and luminosity class V found
        at the center of the solar system and constitutes the largest source of radiation
        electromagnetic of this planetary system. It is an almost perfect sphere
        plasma, with an internal convective movement that generates a magnetic field
        through a dynamo process. About three quarters of the mass of
        Sol consist of gases such as hydrogen; the rest is mainly helium,
        with much smaller amounts of elements, including oxygen,
        carbon, neon and iron.
        It was formed approximately 4.6 billion years ago from the collapse
        gravitation of matter within a region of a large molecular cloud.
        Most of this matter accumulated in the center, while the rest
        It flattened into an orbiting disk that became the solar system. Mass
        central became increasingly denser and hotter, giving rise over time to the
        initiation of nuclear fusion in its core. It is believed that almost all stars
        They are formed by this process. The Sun is more or less of intermediate age and has not
        changed drastically since more than four billion years ago, and will continue
        being quite stable for another 5 billion years. However,
        After hydrogen fusion in its core has stopped, the Sun
        It will undergo important changes and become a red giant. It is estimated that
        the Sun will then become large enough to engulf the orbits
        currents of Mercury, Venus and possibly Earth.
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
        Mercury is the planet in the solar system closest to the Sun and the smallest.
        It is part of the so-called inner planets and lacks natural satellites like Venus.
        Very little was known about its surface until the Mariner 10 planetary probe was sent and
        observations with radar and radio telescopes. It was later studied by NASA's MESSENGER probe and
        currently the spacecraft of the European Space Agency (ESA) called BepiColombo, launched in October
        2018, is in flight towards Mercury where it will arrive in 2025 and is expected to provide new knowledge
        about the origin and composition of the planet, as well as its geology and magnetic field.
        Formerly it was thought that Mercury always presented the same face to the Sun (captured rotation), a situation similar to the
        case of the Moon with the Earth; That is, its rotation period was equal to its translation period, both of 88 days.
        However, in 1965 radar pulses were sent towards Mercury, which definitively demonstrated that its period
        The rotation period was 58.7 days, which is ⅔ of its translation period. This is no coincidence, and is a situation called
        orbital resonance.
        Being a planet whose orbit is lower than that of the Earth, we observe it periodically passing in front of the Sun, a phenomenon that is
        called astronomical transit. Observations of its orbit over many years showed that the perihelion rotates 43" of arc
        more per century than predicted by Newtonian classical mechanics. This discrepancy led a French astronomer, Urbain Le Verrier,
        to think that there was a planet even closer to the Sun, which they called Vulcan, which disturbed the orbit of Mercury. Now it is known
        that Vulcan does not exist; The correct explanation of the behavior of Mercury's perihelion is found in the general theory of
        Einstein relativity.
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
        Venus is the second planet in the solar system in order of proximity
        to the Sun and the third smallest after Mercury and Mars. As
        Like Mercury, it lacks natural satellites. It is named in honor
        to Venus, the Roman goddess of love in Ancient Greece, Aphrodite. To the
        Being the second brightest natural object after the Moon, it may
        be seen in a clear night sky with the naked eye. Appears at
        dawn and at dusk. Due to the distances of the orbits
        of Venus and the Earth from the Sun, Venus is never visible more than three
        hours before sunrise or three hours after sunset.
        It is an inner planet of rocky and terrestrial type,
        often called Earth's sister planet, since both
        They are similar in size, mass and composition, although completely
        different in thermal and atmospheric matters the average temperature of
        Venus is 463.85°C. Its orbit is an ellipse with an eccentricity of
        less than 1%, forming the most circular orbit of all the planets;
        it barely exceeds that of Neptune. Its atmospheric pressure is 90 times higher
        to the terrestrial; It is, therefore, the highest atmospheric pressure of all
        the rocky planets of the solar system. It is yellowish in color due to
        its atmosphere, which is composed mostly of carbon dioxide (CO2),
        hydrogen sulfide (H2S) and nitrogen (N2).
        Despite being located further from the Sun than Mercury, Venus has the largest atmosphere
        hot of the solar system; This is because it is mainly composed
        by greenhouse gases, such as carbon dioxide, trapping much
        more heat from the Sun. It currently lacks liquid water and its conditions in
        surface are considered incompatible with known life, although in
        Recent discoveries have found phosphine on its nebular surface,
        a molecule that on Earth is generated by microbes, which gives clues
        of a possible existence of life. However, the Goddard Institute for Studies
        Space scientists from NASA and others have postulated that in the past Venus may have had
        ocean with as much water as the Earth and meet habitable conditions
        planetary.
        </p>
        <div className={styles.sImgDiv3}>
        <img src={require("../../Assets/venus.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      <section id={styles.section4}>
      <div className={styles.sunDiv4}>
        <h1 className={styles.title4}>Earth</h1>
        <p className={styles.theSun}>
        The Earth (from the Latin Terra, Roman deity equivalent to Gaia, Greek goddess of femininity and fertility) is a planet in the solar system.
        which revolves around its star – the Sun – in the third innermost orbit. It is the densest and the fifth largest of the eight planets of the planet.
        Solar system. It is also the largest of the four terrestrial or rocky ones.
        The Earth formed approximately 4.55 billion years ago, and life emerged about a billion years later. It is home to millions
        of species, including human beings and currently the only astronomical body where the existence of life is known. The atmosphere and
        Other abiotic conditions have been significantly altered by the planet's biosphere, favoring the proliferation of organisms
        aerobes, as well as the formation of an ozone layer that, together with the Earth's magnetic field, blocks harmful solar radiation, allowing
        thus life on Earth. The physical properties of the Earth, the geological history and its orbit have allowed life to continue to exist.
        It is estimated that the planet will continue to be capable of supporting life for another 500 million years, since according to current forecasts,
        After that time, the increasing luminosity of the Sun will end up causing the extinction of the biosphere.
        The Earth's surface or crust is divided into several tectonic plates that slide over the magma for periods of several million
        of years. The surface is covered by continents and islands; These have several lakes, rivers and other sources of water, which together with the oceans
        of salt water that represent about 71% of the surface constitute the hydrosphere. No other planet is known to have this balance
        of liquid water, which is essential for any type of known life. The Earth's poles are mostly covered in ice
        solid (Antarctic ice cap) or ice cap (Arctic ice cap). The interior of the planet is geologically active, with a thick
        relatively solid mantle layer, a liquid outer core that generates a magnetic field, and a solid inner core composed of approximately
        88% iron.
        The Earth interacts gravitationally with other objects in space, especially the Sun and Moon. Currently, the Earth completes a
        orbits the Sun each time it makes 366.26 turns on its axis, which is equivalent to 365.26 solar days or one sidereal year. The axis of
        Earth's rotation is inclined 23.4° with respect to the perpendicular to its orbital plane, which produces seasonal variations
        on the surface of the planet with a period of one tropical year (365.24 solar days). The Earth has only one natural satellite, the Moon, which
        began orbiting the Earth 4.53 billion years ago; This produces the tides, stabilizes the inclination of the Earth's axis and gradually reduces
        the speed of rotation of the planet. Approximately 3.8 to 4.1 billion years ago, during the so-called late heavy bombardment, numerous
        Asteroids impacted the Earth, causing significant changes to most of its surface.
        Both the minerals of the planet and the products of the biosphere provide resources that are used to sustain the world's human population.
        Its inhabitants are grouped into about 200 independent sovereign states, which interact through diplomacy, travel, trade
        and military action. Human cultures have developed many ideas about the planet, including the personification of a deity, the belief
        on a flat Earth or the Earth as the center of the universe, and a modern perspective of the world as an integrated environment that requires management.
        </p>
        <div className={styles.sImgDiv4}>
        <img src={require("../../Assets/earth.webp")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      <section id={styles.section5}>
      <div className={styles.sunDiv5}>
        <h1 className={styles.title5}>Mars</h1>
        <p className={styles.theSun}>
        Mars is the fourth planet in order of distance from the Sun and the second smallest in the solar system, after Mercury. 
        It received its name in homage to the homonymous god of war in Roman mythology (Ares in Greek mythology), and is also known as 
        "the red planet" due to the reddish appearance that iron oxide gives it. predominant on its surface. Mars is the inner planet 
        farthest from the Sun. It is a telluric planet with a thin atmosphere of carbon dioxide, and has two small, irregularly shaped satellites, 
        Phobos and Deimos (sons of the Greek god), which could be captured asteroids similar to the Trojan asteroid (5261) Eureka. Its surface characteristics 
        are reminiscent of both the craters of the Moon and the valleys, deserts and polar caps of the Earth.
        The rotation period and seasonal cycles are similar to those of the Earth, since the tilt is what generates the seasons. Mars is home to Mount 
        Olympus, the largest and tallest known mountain and volcano in the solar system, and the Valles Marineris, one of the largest canyons in the 
        solar system. The flat Boreal basin in the northern hemisphere covers 40% of the planet and may be characteristic of a gigantic impact. Although 
        on the surface it might look like a dead planet, it is not. Its dune fields continue to be rocked by the Martian wind, its polar caps change with 
        the seasons, and there even appear to be some small seasonal flows of water.
        Mars can be easily observed with the naked eye from Earth, as well as its reddish color. Its apparent magnitude reaches -2.97 and is surpassed 
        only by Jupiter, Venus, the Moon and the Sun. Ground-based optical telescopes are normally limited to resolutions of approximately 300 km (190 mi) 
        away, when Earth and Mars are closer, due to the Earth's atmosphere.
        </p>
        <div className={styles.sImgDiv5}>
        <img src={require("../../Assets/mars.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      <section id={styles.section6}>
      <div className={styles.sunDiv6}>
        <h1 className={styles.title6}>Jupiter</h1>
        <p className={styles.theSun}>
        Jupiter is the largest planet in the solar system and the fifth in order of distance from the Sun.3 It is a gas giant 
        that is part of the so-called outer planets. It is named after the Roman god Jupiter (Zeus in Greek mythology). It is 
        one of the brightest natural objects in a clear night sky, surpassed only by the Moon, Venus and sometimes Mars.
        It is the planet that offers the greatest brightness throughout the year depending on its phase. It is, furthermore, after the Sun, 
        the largest celestial body in the solar system, with a mass almost two and a half times that of the other planets combined (with a mass 318 
        times greater than that of the Earth and three times greater than that of Saturn, in addition to being, in terms of volume, 1321 times larger 
        than Earth). It is also the oldest planet in the solar system, being even older than the Sun; This discovery was made by researchers from the
        University of Münster in Germany.
        Jupiter is a massive gaseous body, made up mainly of hydrogen and helium, lacking a defined interior surface. Notable among the atmospheric 
        details is the Great Red Spot (a huge anticyclone located in the tropical latitudes of the southern hemisphere), the structure of clouds in 
        dark bands and bright areas, and the global atmospheric dynamics determined by intense zonal winds alternating in latitude and with speeds up 
        to 140 m/s (504 km/h).
        </p>
        <div className={styles.sImgDiv6}>
        <img src={require("../../Assets/jupiter.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      <section id={styles.section7}>
      <div className={styles.sunDiv7}>
        <h1 className={styles.title7}>Saturn</h1>
        <p className={styles.theSun}>
        Saturn is the sixth planet in the solar system counting from the Sun, the second in size and mass after Jupiter and the only one with a 
        ring system visible from Earth. Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets. The most 
        characteristic aspect of Saturn is its bright, large rings. Before the invention of the telescope, Saturn was the most distant of the known 
        planets and, to the naked eye, did not appear bright or interesting.
        The first to observe the rings was Galileo in 1610,1 but the low inclination of the rings and the low resolution of his telescope made him 
        think at first that they were large satellites. Christiaan Huygens, with better means of observation, was able to clearly observe the rings 
        in 1659. James Clerk Maxwell, in 1859, mathematically demonstrated that the rings could not be a single solid object but must be the grouping 
        of millions of smaller particles.2 The particles that make up Saturn's rings rotate at a speed of 48,000 km/h, 15 times faster than a bullet.
        </p>
        <div className={styles.sImgDiv7}>
        <img src={require("../../Assets/saturn.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      <section id={styles.section8}>
      <div className={styles.sunDiv8}>
        <h1 className={styles.title8}>Uranus</h1>
        <p className={styles.theSun}>
        Uranus is the seventh planet in the solar system, the third largest, and the fourth most massive. It is named after the Greek sky divinity 
        Uranus (from ancient Greek Οὐρανός), the father of Cronus (Saturn) and the grandfather of Zeus (Jupiter). Although it is detectable with the 
        naked eye in the night sky, it was not classified as a planet by ancient astronomers due to its low luminosity and the slowness of its orbit.
        William Herschel announced its discovery on March 13, 1781, expanding the then-known borders of the solar system, for the first time in modern 
        history. Uranus is also the first planet discovered through a telescope.Uranus is similar in composition to Neptune, and both have a different 
        composition from the other two gas giants (Jupiter and Saturn). For this reason, astronomers sometimes classify them in a different category, 
        the ice giants. The atmosphere of Uranus, although similar to that of Jupiter and Saturn in being composed mainly of hydrogen and helium, 
        contains a higher proportion of both "ice" and water, ammonia and methane, along with traces of hydrocarbons.9 note 5 It has the coldest 
        planetary atmosphere in the solar system, with a minimum temperature of 49 K (-224 °C). Likewise, it has a very complex cloud structure, 
        arranged in levels, where the lowest clouds are believed to be composed of water and the highest clouds of methane. In contrast, the interior 
        of Uranus is composed mainly of ice and rock.
        Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous satellites. The Uranus system has a unique configuration 
        with respect to the other planets since its axis of rotation is very inclined, almost to its plane of revolution around the Sun. Therefore, 
        its north and south poles are located where most of the other planets have an equator.14 Seen from Earth, Uranus's rings appear to surround the 
        planet like a target, and that the satellites rotate around it like the hands of a clock, although in 2007 and 2008, the rings appeared sideways. 
        On January 24, 1986, Voyager 2 images showed Uranus as a planet with no special visible light features and even no bands of clouds or storms 
        associated with the other giants.14 However, Earth-based observers have seen signs of seasonal changes and an increase in meteorological activity 
        in recent years as Uranus approaches its equinox. Wind speeds on Uranus can reach or even exceed 250 m/s (900 km/h).
        </p>
        <div className={styles.sImgDiv8}>
        <img src={require("../../Assets/uranus.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
      <section id={styles.section9}>
      <div className={styles.sunDiv9}>
        <h1 className={styles.title9}>Neptune</h1>
        <p className={styles.theSun}>
        Neptune is the eighth planet in distance from the Sun and the farthest in the solar system. It is part of the so-called outer planets, 
        and within these, it is one of the icy giants, and it is the first that was discovered thanks to mathematical predictions. Its name was 
        given in honor of the Roman god of the sea - Neptune - and it is the fourth planet in diameter and the third largest in mass. Its mass is 
        seventeen times that of Earth and slightly greater than that of its "twin" planet Uranus, which has fifteen Earth masses and is not as dense. 
        On average, Neptune orbits the Sun at a distance of 30.1 au. Its astronomical symbol is ♆, a stylized version of the trident of the god Neptune.
        After the discovery of Uranus, it was observed that the orbits of Uranus, Saturn and Jupiter did not behave as predicted by Kepler's and Newton's 
        laws. Adams and Le Verrier independently calculated the position of a hypothetical planet, Neptune, which was finally found by Galle on September 
        23, 1846, less than one degree from the position calculated by Le Verrier. It was later realized that Galileo had already observed Neptune in 1612, 
        but had mistaken it for a star.
        Neptune is a dynamic planet, with spots that recall the storms of Jupiter. The largest, the Great Dark Spot, was similar in size to Earth, but 
        in 1994 it disappeared and another one has formed. The strongest winds of any planet in the solar system are found on Neptune.
        Neptune has a composition quite similar to that of the planet Uranus, and both have compositions that differ greatly from the other gas 
        giants, Jupiter and Saturn. Neptune's atmosphere, like those of Jupiter and Saturn, is composed primarily of hydrogen and helium, along with 
        traces of hydrocarbons and possibly nitrogen. It contains a higher proportion of ice, such as water (H2O), ammonia (NH3) and methane (CH4). 
        Scientists often categorize Uranus and Neptune as ice giants to emphasize the distinction between them and the gas giants Jupiter and Saturn. 
        The interior of Neptune, like that of Uranus, is composed primarily of ice and rock. The traces methane in the outer peripheral regions contribute 
        to the vivid blue appearance of this planet.
        </p>
        <div className={styles.sImgDiv9}>
        <img src={require("../../Assets/neptune.png")} className={styles.sunIMG}/>
        </div>
      </div>
      </section>
    </div>

  )
}

export default MainInfo