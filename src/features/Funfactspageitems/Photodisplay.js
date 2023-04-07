import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import nature from '../../app/assets/img/nature.jpg';
import lakelouise from '../../app/assets/img/lakelouise.JPG';
import banff from '../../app/assets/img/banff.png';
import Banfftrip from '../../app/assets/img/Banfftrip.JPG';

export default class Photodisplay extends Component {
    render() {
        return (
            <Row className="my-5">
                <Col xs='12'>
                    <h3 className="bodyh3 text-center mb-5">Along the way...</h3>
                </Col>
                <Col xs='11' md='8' className="mx-auto">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3500}
                        className="pb-5"
                    >
                        <div>
                            <img
                                src={nature}
                                alt="nature"
                                className="carouselItem"
                            />
                        </div>
                        <div>
                            <img
                                src={lakelouise}
                                alt="lakelouise"
                                className="carouselItem"
                            />
                        </div>
                        <div>
                            <img
                                src={banff}
                                alt="banff"
                                className="carouselItem"
                            />
                        </div>
                        <div>
                            <img
                                src={Banfftrip}
                                alt="Banfftrip"
                                className="carouselItem"
                            />
                        </div>
                    </Carousel>
                </Col>
            </Row>
        )
    };
};
