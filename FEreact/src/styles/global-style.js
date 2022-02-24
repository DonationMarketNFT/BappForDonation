import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
    }
    a {
        color:inherit;
        text-decoration:none;
    }
    a:hover {
        color:inherit;
    }
    body {
        background-color: rgb(248, 248, 248);
    }
`;
