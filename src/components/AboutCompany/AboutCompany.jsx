import aboutCompanyImage from "../../assets/images/aboutComapny/aboutCompany.png";
import Button from "../Button/Button";
import Container from "../Container/Container";

const AboutCompany = ({ currentLang }) => {
    return (
        <Container className='pt-20'>
            <div className='flex flex-col min-[1200px]:flex-row'>
                <div className='flex flex-col items-start  sm:w-[75%] min-[1200px]:w-[45%]'>
                    <h1
                        className='font-medium text-[42px] leading-[1.19] mb-5.5'
                        dangerouslySetInnerHTML={{
                            __html: currentLang.aboutCompany.intro.title,
                        }}
                    ></h1>
                    {currentLang.aboutCompany.intro.paragraphs.map(
                        (p, index) => {
                            return (
                                <div key={index}>
                                    <p
                                        className={`text-lg ${p.text.includes("Наша компания") ? "mb-10" : "mb-16"}`}
                                    >
                                        {p.text}
                                    </p>
                                </div>
                            );
                        },
                    )}
                    <Button
                        variant='btn_big_more'
                        arrow='right'
                        className='hidden lg:flex items-center [&>span]:text-4xl text-xl font-light [&>span]:ml-2 [&>span]:font-thin'
                    >
                        {currentLang.aboutCompany.intro.button}
                    </Button>
                </div>
                {/* ask!!! */}
                <div className='flex w-full justify-end'>
                    <img
                        className='w-full max-[1000px]:w-[80%] max-[800px]:w-[90%]  max-[600px]:w-full max-[1200px]:w-[70%]'
                        src={aboutCompanyImage}
                        alt=''
                    />
                </div>
            </div>
        </Container>
    );
};

export default AboutCompany;
