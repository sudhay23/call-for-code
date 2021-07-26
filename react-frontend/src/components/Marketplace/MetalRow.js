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
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                grabCursor={true}
                className="metalRow col-8"
            >
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                    }}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="https://www.rubicon.com/wp-content/uploads/2021/06/ferrous-and-non-ferrous-metals.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">100kgs</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Location: <span>Dublin</span>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        <b>Listing ID:</b> #1234
                                    </li>
                                    <li>
                                        <b>User:</b> JohnDoe
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                    }}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="https://www.rubicon.com/wp-content/uploads/2021/06/ferrous-and-non-ferrous-metals.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">100kgs</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Location: <span>Dublin</span>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        <b>Listing ID:</b> #1234
                                    </li>
                                    <li>
                                        <b>User:</b> JohnDoe
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                    }}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="https://www.rubicon.com/wp-content/uploads/2021/06/ferrous-and-non-ferrous-metals.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">100kgs</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Location: <span>Dublin</span>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        <b>Listing ID:</b> #1234
                                    </li>
                                    <li>
                                        <b>User:</b> JohnDoe
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                    }}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="https://www.rubicon.com/wp-content/uploads/2021/06/ferrous-and-non-ferrous-metals.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">100kgs</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Location: <span>Dublin</span>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        <b>Listing ID:</b> #1234
                                    </li>
                                    <li>
                                        <b>User:</b> JohnDoe
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                    }}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="https://www.rubicon.com/wp-content/uploads/2021/06/ferrous-and-non-ferrous-metals.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">100kgs</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Location: <span>Dublin</span>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        <b>Listing ID:</b> #1234
                                    </li>
                                    <li>
                                        <b>User:</b> JohnDoe
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                    }}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="https://www.rubicon.com/wp-content/uploads/2021/06/ferrous-and-non-ferrous-metals.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">100kgs</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Location: <span>Dublin</span>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        <b>Listing ID:</b> #1234
                                    </li>
                                    <li>
                                        <b>User:</b> JohnDoe
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
