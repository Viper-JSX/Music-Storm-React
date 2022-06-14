import UserContext from "../context/User_context";
import ErrorContext from "../context/Error_context";
import { useContext } from "react";

function useError(){
    return useContext(ErrorContext);
}

export default useError;