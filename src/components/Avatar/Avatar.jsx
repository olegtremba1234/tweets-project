import { AvatarImage, Border } from "./Avatar.Styled"
import UserAvatar from "../../images/Hansel.png"

const Avatar = () => {
    return (
        <>
            <Border />
            {/* <AvatarBorder> */}
            <AvatarImage src={UserAvatar} alt="User Avatar" />
            {/* </AvatarBorder> */}
        </>
    )
}
export default Avatar