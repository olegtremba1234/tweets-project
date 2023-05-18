import { LogoImage, LogoContainer } from "./Logo.Styled"
import go_it_logo from "../../images/Logo.svg";

const Logo = () => {
    return (
        <>
            <LogoContainer>
                <LogoImage src={go_it_logo} alt="GoIT Logo" />
            </LogoContainer>
        </>

    )
}

export default Logo