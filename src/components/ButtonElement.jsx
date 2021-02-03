import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "transparent" : "#60c3d1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#60c3d1" : "#090909")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px solid #60c3d1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#60c3d1" : "#090909")};
    color: ${({ dark }) => (dark ? "#090909" : "#00e1ff")};
  }
`;
