import "./article.scss";

const Article = ({title, image, children}) => {
    return (
        <article className="article">
            <div className="text">
                {(title != "") && <h3>{title}</h3>}
                {children}
            </div>
            <div className="image">
                <img src={image} />
            </div>
        </article>
    )
}

const ArticleReversed = ({title, image, children}) => {
    return (
        <article className="article">
            <div className="image">
                <img src={image} />
            </div>
            <div className="text">
                {(title != "") && <h3>{title}</h3>}
                {children}
            </div>
        </article>
    )
}

export default Article;
export {
    ArticleReversed
}
