import Container from "../Container/Container";
import Button from "../Button/Button";

const AnyQuestions = ({ currentLang }) => {
    return (
        <div className='bg-[rgb(242,242,242)]'>
            <Container>
                <div>
                    <div>
                        <h2>{currentLang.anyQuestions.extraQuest}</h2>
                        <p>{currentLang.anyQuestions.leaveContact}</p>
                    </div>
                    <form>
                        {currentLang.anyQuestions.inputs.map((input, index) => {
                            return (
                                <div key={index}>
                                    <label htmlFor={input.htmlFor}>
                                        {input.label}
                                    </label>
                                    <input
                                        type='text'
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            );
                        })}
                        <Button>{currentLang.anyQuestions.sendButton}</Button>
                    </form>
                </div>

                <div>{/* truck */}</div>
            </Container>
        </div>
    );
};

export default AnyQuestions;
