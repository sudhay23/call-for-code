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
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                grabCursor={true}
                className="otherRow col-8"
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
                            src="https://d3pcsg2wjq9izr.cloudfront.net/files/39876/products/623003/39876_2_202007242359517930351.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">50kgs</CardTitle>
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
                            src="https://d3pcsg2wjq9izr.cloudfront.net/files/39876/products/623003/39876_2_202007242359517930351.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">50kgs</CardTitle>
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
                            src="https://d3pcsg2wjq9izr.cloudfront.net/files/39876/products/623003/39876_2_202007242359517930351.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">50kgs</CardTitle>
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
                            src="https://d3pcsg2wjq9izr.cloudfront.net/files/39876/products/623003/39876_2_202007242359517930351.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">50kgs</CardTitle>
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
                            src="https://d3pcsg2wjq9izr.cloudfront.net/files/39876/products/623003/39876_2_202007242359517930351.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">50kgs</CardTitle>
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
                            src="https://d3pcsg2wjq9izr.cloudfront.net/files/39876/products/623003/39876_2_202007242359517930351.jpg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">50kgs</CardTitle>
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
