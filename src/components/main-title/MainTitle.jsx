import "./MainTitle.css"
                    
function MainTitle({ title, subtitle }) {

    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <h1 className="main-title">

               { title ? title : "Titulo por defecto" }

            </h1>

            {
                subtitle && (
                    <div className="main-subtitle">
                        { subtitle}
                    </div>
                )
            }

        </div>
    )
}

export default MainTitle;
