import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

export default function MetalRow() {
    return (
        <div className="productRow row">
            <Card
                style={{ margin: 30, height: "430px" }}
                className="productType col-3 px-sm-1 ml-5"
            >
                <CardImg
                    top
                    width="100%"
                    src="https://media.istockphoto.com/photos/old-rusty-corroded-car-parts-in-car-scrapyard-car-recyclingwrecking-picture-id868926884?k=6&m=868926884&s=612x612&w=0&h=8JfHJEPBY1qE46vO76C-xnYsR2XwnI0PFmLrR3gqQno="
                    alt="Metals"
                />
                <CardBody>
                    <CardTitle tag="h3">Metals</CardTitle>
                    <CardSubtitle tag="b" className="mb-2 text-muted">
                        Did you know?
                    </CardSubtitle>
                    <CardText>
                        Using recycled aluminum scrap requires 92% less energy
                        than virgin material.
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
                className="metalRow col-8"
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
