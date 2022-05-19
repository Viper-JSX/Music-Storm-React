function ProfileImage({ imageURL }){
    console.log(imageURL)
    return(
        <img className="userProfileImage" src={imageURL} alt="user image" />
    );
}

export default ProfileImage;