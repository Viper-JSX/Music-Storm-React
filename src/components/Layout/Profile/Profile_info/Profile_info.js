import useUser from "../../../../hooks/useUser";
import LogoutButton from "./Logout_button";
import ProfileImage from "./Profile_image";

function ProfileInfo({ handleLogout }){
    const user = useUser();

    return(
        <div class="profileInfo">
            <ProfileImage imageURL={user.iconURL} />
            <br />
            {user.nickname}
            <LogoutButton handleLogout={handleLogout} />
        </div>
    );
}

export default ProfileInfo;