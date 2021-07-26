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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum totam culpa rem. Modi, adipisci. Quasi, voluptatibus.
                    Veritatis inventore eius velit sint aut non necessitatibus,
                    vel vero esse omnis, deleniti perspiciatis. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Minima quisquam
                    maxime hic eius iure exercitationem? Laborum natus ipsum
                    optio ipsa placeat. Impedit quas necessitatibus eveniet
                    doloribus reiciendis, minima quam illo? Magnam ut
                    reprehenderit, est aliquid obcaecati dolorum voluptate atque
                    repellat illum aperiam a maxime vitae quisquam hic
                    aspernatur. Voluptate recusandae nam sint rerum, officia
                    facilis vitae sequi a error! Aspernatur?
                </p>
            </div>
        </section>
    );
};

export default ImageSection;
