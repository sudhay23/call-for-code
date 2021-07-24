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

export default function OtherRow() {
    return (
        <div className="productRow row">
            <Card
                style={{ margin: 30, height: "450px" }}
                className="productType col-3 px-sm-1 ml-5"
            >
                <CardImg
                    top
                    width="100%"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a3/NRCSSC97008_-_South_Carolina_%285991%29%28NRCS_Photo_Gallery%29.jpg"
                    alt="Others"
                />
                <CardBody>
                    <CardTitle tag="h3">Others</CardTitle>
                    <CardSubtitle tag="b" className="mb-2 text-muted">
                        Did you know?
                    </CardSubtitle>
                    <CardText>
                        The number of disposable nappies each baby gets through
                        weighs the same as a family car!
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
                className="otherRow col-8"
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
