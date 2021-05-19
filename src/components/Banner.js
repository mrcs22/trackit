import styled from "styled-components";

import bannerImg from "../images/banner.svg";

const Img = styled.img`
  display: block;
  width: 180px;
  margin: 0 auto;
  margin-top: 68px;
  margin-bottom: 32px;
`;

export default function Banner() {
  return <Img src={bannerImg}></Img>;
}
