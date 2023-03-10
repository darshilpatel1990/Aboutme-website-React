import { Row, Col, Carousel, CarouselControl, CarouselItem, CarouselIndicators } from "reactstrap";
import { useState } from "react";
import { CarouselItems } from "../../app/shared/Carouselitems";

const Photodisplay = () => {

    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);

    const lastItemindex = CarouselItems.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = (activeIndex === 0) ? lastItemindex : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = (activeIndex === lastItemindex) ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    // Carousel Item Data
    const CarouselItemData = CarouselItems.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
                id="carouselItem"
            >
                <img className="imageCRSL" src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Row className="my-5">
            <Col xs='12'>
                <h3 className="bodyh3 text-center mb-5">Along the way...</h3>
            </Col>
            <Col md='8' className="mx-auto">
                <Carousel
                    activeIndex={activeIndex}
                    next={nextButton}
                    previous={previousButton}
                >
                    <CarouselIndicators 
                        items={CarouselItems}
                        activeIndex={activeIndex}
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIndex(newIndex);
                        }}
                    />
                    {CarouselItemData}
                    <CarouselControl 
                        directionText="Prev"
                        direction="prev" 
                        onClickHandler={previousButton} 
                    />
                    <CarouselControl 
                        directionText="Next"
                        direction="next" 
                        onClickHandler={nextButton} 
                    />
                </Carousel>
            </Col>
        </Row>
    );
};

export default Photodisplay;