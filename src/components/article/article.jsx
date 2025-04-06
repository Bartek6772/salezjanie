import "./article.scss";

const Article = ({title, image, children, noShadow, id}) => {
    return (
        <article className="article" id={id}>
            <div className="text">
                {(title != "") && <h3>{title}</h3>}
                {children}
            </div>
            <div className={"image" + (noShadow ? " no-shadow" : "")}>
                <img src={image} />
            </div>
        </article>
    )
}

const ArticleReversed = ({title, image, children, noShadow, id}) => {
    return (
        <article className="article" id={id}>
            <div className={"image" + (noShadow ? " no-shadow" : "")}>
                <img src={image} />
            </div>
            <div className="text">
                {(title != "") && <h3>{title}</h3>}
                {children}
            </div>
        </article>
    )
}

const DoubleArticle = ({title, children, id}) => {
    return (
        <article className="article double" id={id}>
            <div className="text">
                {(title != "") && <h3>{title}</h3>}
                <div>
                    {children}
                </div>
            </div>
        </article>
    )
}

export default Article;
export {
    ArticleReversed,
    DoubleArticle
}
