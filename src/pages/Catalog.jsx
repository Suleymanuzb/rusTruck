import Container from "../components/Container/Container";
import TruckCards from "../components/TruckCategories/TruckCards";
import TruckSliders from "../components/TruckCategories/TruckSliders";

const Catalog = ({ currentLang }) => {
    const catalogItems = currentLang?.header?.megaMenu?.categories?.types;

    return (
        <section>
            <Container>
                <div className='grid grid-cols-4 gap-7'>
                    {catalogItems.map((category, i) => {
                        return (
                            <TruckCards
                                key={`catalog item ${i + 1}`}
                                category={category}
                                currentlang={currentLang}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Catalog;
