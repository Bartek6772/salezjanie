import "./button.scss";

const Button = ({children, scrollTo}) => {

    const handleScroll = () => {
        if(scrollTo != null)
            scrollTo.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="button" onClick={handleScroll}>
            <div className="text">
                {children}
            </div>
        </div>
    )
}

export default Button;