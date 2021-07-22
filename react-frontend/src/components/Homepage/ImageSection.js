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
                <h1>What it is...</h1>
                <br />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum totam culpa rem. Modi, adipisci. Quasi, voluptatibus.
                    Veritatis inventore eius velit sint aut non necessitatibus,
                    vel vero esse omnis, deleniti perspiciatis.
                </p>
            </div>
        </section>
    );
};

export default ImageSection;
