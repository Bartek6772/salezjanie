import "./page.scss";

const Page = ({title, children}) =>{
    return(
        <main className="subpage">

            <header className="header">
                <div className="container">
                    <h2>{title}</h2>
                </div>
            </header>

            <section>
                <div className="container">
                    {children}
                </div>
            </section>
        </main>
    )
}

const PageNoContainer = ({title, children}) =>{
    return(
        <main className="subpage">

            <header className="header">
                <div className="container">
                    <h2>{title}</h2>
                </div>
            </header>

            <section>
                {children}
            </section>
        </main>
    )
}


export default Page;
export{
    PageNoContainer,
}