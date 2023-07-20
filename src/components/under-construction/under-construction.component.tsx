import './under-construction.styles.scss';
import { useTranslation } from 'react-i18next';


function UnderConstruction() {

    const { t } = useTranslation();

    return(
        <div className="page-under-construction"> 

            <span className="page-under-construction__text">
                {t("underConstruction")}
            </span>

            <small className="page-under-construction__footer">
                @ {new Date().getFullYear()} Mariana De Luca Reis 
            </small>
        </div>
    )
}

export default UnderConstruction;