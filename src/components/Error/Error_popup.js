import useError from "../../hooks/Use_error";

function ErrorPopup(){
    const error = useError();

    return(
        <div id="errorPopup" className={`${error.errorText ? "visible" : "hidden"}` }>Err: {error.errorText}</div>
    );
}

export default ErrorPopup;