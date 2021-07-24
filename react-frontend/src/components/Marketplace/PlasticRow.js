import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

export default function PlasticRow() {
    return (
        <div className="productRow row">
            <Card
                style={{ margin: 30 }}
                className="productType col-3 px-sm-1 ml-5"
            >
                <CardImg
                    top
                    width="100%"
                    src="https://environmental-conscience.com/wp-content/uploads/2020/07/garbage-can-1423840_640.jpg?ezimgfmt=ng:webp/ngcb55"
                    alt="Plastic"
                />
                <CardBody>
                    <CardTitle tag="h3">Plastics</CardTitle>
                    <CardSubtitle tag="b" className="mb-2 text-muted">
                        Did you know?
                    </CardSubtitle>
                    <CardText>
                        Each plastic bag will take between 500 and 1,000 years
                        to decompose in landfill.
                    </CardText>
                </CardBody>
            </Card>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                grabCursor={true}
                navigation={true}
                className="plasticRow col-8"
            >
                <SwiperSlide style={{ backgroundColor: "blue", maxWidth: 400 }}>
                    Slide 1
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: "blue", maxWidth: 200 }}>
                    Slide 1
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: "blue", maxWidth: 400 }}>
                    Slide 1
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: "blue", maxWidth: 400 }}>
                    Slide 1
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: "blue", maxWidth: 400 }}>
                    Slide 1
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
