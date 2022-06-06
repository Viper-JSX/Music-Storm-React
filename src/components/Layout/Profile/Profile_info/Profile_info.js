import useUser from "../../../../hooks/useUser";
import ProfileImage from "./Profile_image";

function ProfileInfo(){
    const user = useUser();

    return(
        <div class="profileInfo">
            <ProfileImage imageURL={user.iconURL} />
            <br />
            {user.nickname}
        </div>
    );
}

export default ProfileInfo;