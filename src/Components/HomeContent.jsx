import React from 'react';
import Button from '@mui/material/Button';
//import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
//import { useState } from 'react';


function HomeContent() {
    const date = new Date();
    return (
        <>
            {/* Hero */}
            <section id="home-top" className="pt-5 bt-5">
                <div className="container">
                    <div className="circle"> </div>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <OwlCarousel className='owl-theme' loop items={1} margin={25}>
                                <div class="item flex">
                                    <div class="left mtop">
                                        <h1>Reparation Voiture & Maintenance</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div class="button">
                                            <button class="btn1">Voir plus</button>
                                            <button class="btn2">Contact</button>
                                        </div>
                                    </div>
                                    <div class="right mtop">
                                        <img src="/assets/images/home.png" alt="img" />
                                    </div>
                                </div>
                                <div class="item flex">
                                    <div class="left mtop">
                                        <h1>Reparation Voiture & Maintenance</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div class="button">
                                            <button class="btn1">Voir plus</button>
                                            <button class="btn2">Contact</button>
                                        </div>
                                    </div>
                                    <div class="right mtop">
                                        <img src="/assets/images/home.png" alt="img" />
                                    </div>
                                </div>
                                <div class="item flex">
                                    <div class="left mtop">
                                        <h1>Reparation Voiture & Maintenance</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div class="button">
                                            <button class="btn1">Voir plus</button>
                                            <button class="btn2">Contact</button>
                                        </div>
                                    </div>
                                    <div class="right mtop">
                                        <img src="/assets/images/home.png" alt="img" />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Col>
                    </Row>

                </div>
            </section>
            {/* Hero */}

            <Container className="page-content">
                <Container><br /><br /><br /><br /><br /><br /></Container>
                <section id="why-us" className="pt-5 bt-5">
                    <Container>
                        <h1>Pourquoi nous choisir ?</h1>

                        <div className="content grid mtop">
                            <div className="box">
                                <img src="/assets/images/w1.png" alt="img" />
                                <h3>Equipe Qualifiée </h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/w2.png" alt="img" />
                                <h3>Materiaux De Qualité </h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/w3.png" alt="img" />
                                <h3>Meilleur Service </h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
                <Container><br /><br /><br /><br /><br /><br /></Container>
                <section id="our-services" className="pt-5 bt-5">
                    <Container>
                        <h2>Nos Services</h2>

                        <div className="content grid mtop">
                            <div className="box">
                                <img src="/assets/images/s1.png" alt="img" />
                                <h3>Maintenance à domicile</h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/s4.png" alt="img" />
                                <h3>Changement Jante</h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/s3.png" alt="img" />
                                <h3>Pression Pneu</h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/s2.png" alt="img" />
                                <h3>Changement Pneu</h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/s6.png" alt="img" />
                                <h3>Réparation Pneu</h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                            <div className="box">
                                <img src="/assets/images/s5.png" alt="img" />
                                <h3>Maintenance Génerale</h3>
                                <p>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <Button variant="contained"
                                    sx={{ background: "#222", color: "#fff", "&:hover": { background: "#555", color: "#fff" } }}>
                                    <span className="d-flex align-items-center justify-content-between">Voir plus <LabelImportantIcon /></span>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
                <Container><br /><br /><br /><br /><br /><br /></Container>
                <section id="about-us" className="pt-5 bt-5">
                    <Container className="flex">
                        <div className="circle"></div>
                        <div className="left top">
                            <img src="/assets/images/a.png" alt="img" />
                        </div>
                        <div className="right top">
                            <h1>A propos de nous </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <button className="btn2">VOir plus</button>
                        </div>
                    </Container>
                </section>
                <Container><br /><br /><br /><br /><br /><br /></Container>
                <section id="testimonials" className="pt-5 bt-5">
                    <Container>
                        <h1>Ce qu'ils disent de nous </h1>
                        <p>Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to </p>

                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <OwlCarousel className='owl-theme' loop items={1}>
                                    <div className="item flex">
                                        <div className="image">
                                            <div className="img">
                                                <img src="/assets/images/c1.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="heading flex1">
                                                <div className="para">
                                                    <h3>John Doe</h3>
                                                    <h5>CUSTOMER</h5>
                                                </div>
                                                <div className="para">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                    <div className="item flex">
                                        <div className="image">
                                            <div className="img">
                                                <img src="/assets/images/c2.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="heading flex1">
                                                <div className="para">
                                                    <h3>Daniel Brown</h3>
                                                    <h5>CUSTOMER</h5>
                                                </div>
                                                <div className="para">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                    <div className="item flex">
                                        <div className="image">
                                            <div className="img">
                                                <img src="/assets/images/c3.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="heading flex1">
                                                <div className="para">
                                                    <h3>MORO JINK</h3>
                                                    <h5>CUSTOMER</h5>
                                                </div>
                                                <div className="para">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container><br /><br /><br /><br /><br /><br /></Container>
                <section id="contact-us" className="pt-5 bt-5">
                    <Container className="flex">
                        <div className="circle"> </div>
                        <div className="left">
                            <h1>Restons en contact</h1>
                            <form>
                                <input type="text" placeholder="Votre Nom" />
                                <input type="text" placeholder="Votre Email" />
                                <input type="text" placeholder="Votre Numéro téléphone" />
                                <textarea rows="5" cols="80">Message</textarea>
                                <button className="btn2">Envoyer</button>
                            </form>
                        </div>
                        <div className="right">
                            <div className="img">
                                <img src="/assets/images/contact.png" alt="img" />
                            </div>
                        </div>

                    </Container>
                </section>

            </Container>
            <Container><br /><br /><br /><br /><br /><br /></Container>

            {/* START FOOTER*/}
            <div className="footer">
                <footer>
                    <div class="container top">
                        <div className="content grid">
                            <div className="box flex">
                                <i><PlaceIcon /></i>
                                <span>Ouagadougou, secteur 17</span>
                            </div>
                            <div className="box flex">
                                <i><PhoneIcon /></i>
                                <span>+226 70xxxxxx</span>
                            </div>
                            <div className="box flex">
                                <i><MailIcon /></i>
                                <span>edanzoung@outlook.fr</span>
                            </div>
                            <div className="box flex">
                                <input type="text" placeholder="Votre adresse email" />
                                <Button Button variant="contained"
                                    size="small" color="primary"
                                    sx={{ background: "#FF6F3D", color: "#fff", "&:hover": { background: "#ffa789", color: "#fff" } }}>
                                    &nbsp;&nbsp;Souscrire&nbsp;&nbsp;</Button>
                            </div>
                        </div>

                        <div className="soical mtop">
                            <div className="logo">
                                <img style={{ width: "180px", height: "100px" }} src="/assets/car-gear_2.png" alt="img" />
                            </div>
                            <ul>
                                <li> <i className="fab fa-facebook-f"></i></li>
                                <li> <i className="fab fa-instagram"></i></li>
                                <li> <i className="fab fa-twitter"></i></li>
                                <li> <i className="fab fa-youtube"></i></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
            {/* END FOOTER*/}

            <div className="legal">
                <p>Copyright &copy; {date.getFullYear()}&nbsp;| Tout droit reservé</p>
            </div>



        </>
    )
}

export default HomeContent;