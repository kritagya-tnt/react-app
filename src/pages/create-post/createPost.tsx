import { CreateForm } from "./createForm"
import {auth} from "../../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth";
import { Main } from "../main/Main";
export const CreatePost = ()=>{
    const [user] = useAuthState(auth);
    //const navigate = useNavigate();
    if(user)
        return <div className="createPost">
        <CreateForm />
    </div>
    else 
        return <Main />
}