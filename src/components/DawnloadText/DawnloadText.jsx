import { useTranslation, Trans } from "react-i18next";
import './DawnloadText.css';

function DawnloadText() {
      const { t } = useTranslation();
    
  return (
    <div className="download-text">
        <h1 className="download-text-title">
        <Trans
            i18nKey="mainTitle"
            components={{
            span: <span />,
            br: <br />,
            }}
        />
        </h1>
        <p>
        <Trans
            i18nKey="mainDesc"
            components={{
            br: <br />,
            }}
        />
        </p>
    </div>
  )
}

export default DawnloadText
