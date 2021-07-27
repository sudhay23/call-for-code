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
                    <CardSubtitle tag="p" className="mb-2 text-muted">
                        Did you know?
                    </CardSubtitle>
                    <CardText tag="h6">
                        Each plastic bag will take between 500 and 1,000 years
                        to decompose in landfill.
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
                className="plasticRow col-8"
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
                            src="https://plastrading.com/wp-content/uploads/2020/05/plastrading-The-role-of-the-plastic-industry-to-the-South-African-economy.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">20kgs</CardTitle>
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
                            src="https://plastrading.com/wp-content/uploads/2020/05/plastrading-The-role-of-the-plastic-industry-to-the-South-African-economy.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">20kgs</CardTitle>
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
                            src="https://plastrading.com/wp-content/uploads/2020/05/plastrading-The-role-of-the-plastic-industry-to-the-South-African-economy.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">20kgs</CardTitle>
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
                            src="https://plastrading.com/wp-content/uploads/2020/05/plastrading-The-role-of-the-plastic-industry-to-the-South-African-economy.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">20kgs</CardTitle>
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
                            src="https://plastrading.com/wp-content/uploads/2020/05/plastrading-The-role-of-the-plastic-industry-to-the-South-African-economy.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">20kgs</CardTitle>
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
                            src="https://plastrading.com/wp-content/uploads/2020/05/plastrading-The-role-of-the-plastic-industry-to-the-South-African-economy.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">20kgs</CardTitle>
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
