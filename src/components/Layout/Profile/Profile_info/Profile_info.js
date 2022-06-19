import useUser from "../../../../hooks/useUser";
import LogoutButton from "./Logout_button";
import ProfileImage from "./Profile_image";

function ProfileInfo({ handleLogout }){
    const user = useUser();

    return(
        <div className="profileInfo">
            <ProfileImage imageURL={user.iconURL} />
            <br />
            <span>{user.nickname}</span>
            <br />
            <LogoutButton handleLogout={handleLogout} />
        </div>
    );
}

export default ProfileInfo;