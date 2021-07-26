import homeBg from "../../files/homeBg.jpg";

const ImageSection = () => {
    return (
        <section className="imageSection">
            <img
                src={homeBg}
                className="bgImage"
                alt="Background Pile of Waste"
            />
            <div className="description">
                <h1>Reuse, Reduce, Recycle</h1>
                <br />
                <p>
                <b>wUse</b> is the platform that helps in finding the right consumer for one’s waste. This platform will be based on the idea of producers of waste which can be categorised as Reusable/Recyclable making listings where reusable waste (the kind of waste that can be directly reused or used with minimal processing) can find it’s consumer through an auction where the producer gets a fair price. Recyclable waste on the other hand can be directly routed to the nearest recycling unit who can perform further processing on such waste. The platform also can provide intelligent suggestions on the usage of eco-friendly alternative products that the user might not be aware of at the time of user registration.                </p>
            </div>
        </section>
    );
};

export default ImageSection;
