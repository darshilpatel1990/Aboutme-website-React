import { Row, Col } from "reactstrap";
import nature from '../../app/assets/img/nature.jpg';
import lakelouise from '../../app/assets/img/lakelouise.JPG';
import banff from '../../app/assets/img/banff.png';
import Banfftrip from '../../app/assets/img/Banfftrip.JPG';

const Photodisplay = () => {
    return (
        <Row className="my-5">
            <Col xs='12'>
                <h3 className="bodyh3 text-center mb-3">Along the way...</h3>
            </Col>
            <Col md='8' className="mx-auto">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                  /      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={nature} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Banfftrip} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={lakelouise} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={banff} alt="Fourth slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Col>
        </Row>
    );
};

export default Photodisplay;