import "./button.scss";

const Button = ({children, scrollTo, dark}) => {

    const handleScroll = () => {
        if(scrollTo != null)
            scrollTo.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={"button " + (dark ? "dark" : "")}onClick={handleScroll}>
            <div className="text">
                {children}
            </div>
        </div>
    )
}

export default Button;