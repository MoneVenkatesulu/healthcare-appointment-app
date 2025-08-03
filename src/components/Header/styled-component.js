import { Link } from "react-router-dom";

import Styled from "styled-components";

const NavItemLink = Styled(Link)`
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.$matchedPage ? "#0d6efd" : "#828384"};
    font-weight: ${props => props.$matchedPage ? "bold" : "normal"};

`

export default NavItemLink;