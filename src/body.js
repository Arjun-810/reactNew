import React, { Component } from 'react';
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, { Jumbotron, Button, Card, Image, Carousel } from 'react-bootstrap'
// get our fontawesome imports0
import 'font-awesome/css/font-awesome.min.css';
// import logo from 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

class Body extends Component {

    render() {

        return (
            // -------Welcome-Section------
            <div>
                <Jumbotron style={{ textAlign: "center", background: 'black', color: 'white' }}>
                    <h1 style={{ fontWeight: 'bold', color: '#3EE1A0' }}>HABBIT</h1>
                    <h3>
                        Welcom to the habbitat of hobbies for life
                </h3>
                    <p>
                        <Button className='btn mt-3'>Let's explore!</Button>
                    </p>
                </Jumbotron>
                {/* ---------Register-Section---------- */}

                <div className='section1'>
                    <h2>Quarantine workshops starting in</h2>
                    <h4>Try out our hobbies through interactive live sessions from mentors this May! </h4>'
                <Button className='wshop mt-3' style={{ background: 'white' }}>Register For the Workshop!</Button>

                </div>
                {/* -----------Explore-section---------- */}
                <div className="container section2">
                    <div className="row">
                        <div className="imgHobbies" style={{ marginLeft: "80px" }}>
                            <Image style={{ borderRadius: "50px" }} src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid width="300px" />
                            <div className="heading">
                                <h3>Value hobbies</h3>
                                <Button className="exploreMore mt-3">Explore!</Button>
                            </div>
                        </div>
                        <div className="imgHobbies" style={{ marginLeft: "80px" }}>
                            <Image style={{ borderRadius: "50px" }} src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid width="300px" />
                            <div className="heading">
                                <h3>Creative hobbies</h3>
                                <Button className="exploreMore mt-3">Explore!</Button>
                            </div>
                        </div>
                        <div className="imgHobbies" style={{ marginLeft: "80px" }}>
                            <Image style={{ borderRadius: "50px" }} src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=pexels-soumil-kumar-735911.jpg&fm=jpg" fluid width="300px" />
                            <div className="heading">
                                <h3>Technical hobbies</h3>
                                <Button className="exploreMore mt-3">Explore!</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------Instagram-Visit---------------- */}
                <div className="container section3">
                    <div className="row">
                        <div className="col-md-1 col-2 mt-2">
                            <i className="fa fa-instagram fa-3x" />
                        </div>
                        <div className="col-10">
                            <h5><b>just_hobby_it</b></h5>
                            <p>Habbit is an online learning communityfor people Who seek to learn, and grow every day-something,anything,anywhere.</p>
                        </div>
                    </div>
                </div>
                {/* ----------------Instagram-Posts-------------- */}
                <div className="container section4">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/3622517/pexels-photo-3622517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/3817583/pexels-photo-3817583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/3817672/pexels-photo-3817672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/4116926/pexels-photo-4116926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/4039159/pexels-photo-4039159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>

                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/3825175/pexels-photo-3825175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>

                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2086361.jpg&fm=jpg" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/74512/pexels-photo-74512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/3817583/pexels-photo-3817583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/1560008/pexels-photo-1560008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 insta-img">
                            <Image src="https://images.pexels.com/photos/2549355/pexels-photo-2549355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid rounded />
                        </div>
                    </div>
                </div>
                {/* -----------------Carousel1---------------------- */}
                <div className="container section5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: "70px" }}
                                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide" height="500px" width="500px" fluid
                            />
                            <Carousel.Caption>
                                <div className="heading1">
                                    <h1><strong>Beinners Guid to Nutrition</strong></h1>
                                    <h4>Capture the calore Game by Priytham Maanthini</h4>
                                </div>
                                <button className="btn btncaro">Know More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: "70px" }}
                                src="https://images.pexels.com/photos/899238/pexels-photo-899238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide" height="500px" width="500px" fluid
                            />
                            <Carousel.Caption>
                                <div className="heading1">
                                    <h1><strong>Full Pockets-Art</strong></h1>
                                    <h4>Capture the doddling scene by Raga</h4>
                                </div>
                                <button className="btn btncaro">Know More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: "70px" }}
                                src="https://images.pexels.com/photos/269630/pexels-photo-269630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide" height="500px" width="500px" fluid
                            />
                            <Carousel.Caption>
                                <div className="heading1">
                                    <h1><strong>The Fundamnetals to crack Poker</strong></h1>
                                    <h4>Beat the odds with kasish Malothra</h4>
                                </div>
                                <button className="btn btncaro">Know More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* -----------------Carousel2---------------------- */}
                <div className="container section5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: "70px" }}
                                src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide" height="500px" width="500px" fluid
                            />
                            <Carousel.Caption>
                                <div className="heading1">
                                    <h1><strong>Missing hobby?</strong></h1>
                                    <h4>we're missing out on a unique hobby/skill that ou wnat us to add  to our  habbitat</h4>
                                </div>
                                <button className="btn btncaro">Know More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: "70px" }}
                                src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide" height="500px" width="500px" fluid
                            />
                            <Carousel.Caption>
                                <div className="heading1">
                                    <h1><strong>Suscribe to our Nwesletter</strong></h1>
                                    <h4>We here at habbit are suckers of change, growth, and love. Wanna hear in our occasional shower thoughts, and growth updates, over a cuppa tea, coffee, or hot cocoa?</h4>
                                </div>
                                <button className="btn btncaro">Know More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: "70px" }}
                                src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide" height="500px" width="500px" fluid
                            />
                            <Carousel.Caption>
                                <div className="heading1">
                                    <h1><strong>Makeup Art</strong></h1>
                                    <h4>Get your Strokes with Pooja jain</h4>
                                </div>
                                <button className="btn btncaro">Know More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* -------------------Footter---------------------------- */}
                <div className="section6">
                    <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                    <i className="fa fa-instagram fa-2x" />
                    <i className="fa fa-facebook fa-2x" />
                    <i className="fa fa-youtube fa-2x" />
                    <i className="fa fa-twitter fa-2x" />
                    <i className="fa fa-google fa-2x" />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
