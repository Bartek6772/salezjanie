import "./article.scss";

const Article = ({title, image, children, noShadow}) => {
    return (
        <article className="article">
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

const ArticleReversed = ({title, image, children, noShadow}) => {
    return (
        <article className="article">
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

const DoubleArticle = ({title, children}) => {
    return (
        <article className="article double">
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
