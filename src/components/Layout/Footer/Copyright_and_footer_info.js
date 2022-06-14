import Copyright from "./Copyright";
import FooterInfo from "./Footer_info";

function CopyrightAndFooterInfo({ about }){
    return(
        <div id="copyrightAndFooterInfo">
            <FooterInfo />
            <Copyright about={about} />
        </div>
    );
}

export default CopyrightAndFooterInfo;