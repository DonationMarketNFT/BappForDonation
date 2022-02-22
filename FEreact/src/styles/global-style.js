import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        color:inherit;
        text-decoration:none;
    }
    a:hover {
        color:inherit;
    }
`;
