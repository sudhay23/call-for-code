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
                <h1>Welcome to our platform</h1>
                <br />
                <p>
                Items labelled "waste" can be used for various purposes.
                Our platform tries to implement the following hierarchy for waste management. 
                Source reduction and reuse recycling or composting energy recovery and treatment and disposal 
                in the decreasing order of preference.
                </p>
            </div>
        </section>
    );
};

export default ImageSection;
