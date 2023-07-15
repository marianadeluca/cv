import './under-construction.styles.scss';

function UnderConstruction() {

    return(
        <div className="page-under-construction"> 
        
            <span className="page-under-construction__text">
                this page is under construction.
            </span>

            <small className="page-under-construction__footer">
                @ {new Date().getFullYear()} Mariana De Luca Reis 
            </small>
        </div>
    )
}

export default UnderConstruction;