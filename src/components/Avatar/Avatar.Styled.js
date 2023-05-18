import styled from "styled-components";

export const Border = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  top: 50%;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarImage = styled.img`

  z-index: 1;
  width: 62px;
  height: 62px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;
