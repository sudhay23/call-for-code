import PlasticRow from "./PlasticRow";
import MetalRow from "./MetalRow";
import OtherRow from "./OtherRow";
const MainSection = () => {
    return (
        <section className="mainSection">
            <PlasticRow />
            <MetalRow />
            <OtherRow />
        </section>
    );
};

export default MainSection;
