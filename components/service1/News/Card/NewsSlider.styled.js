import styledComponents from "styled-components";

export const Container = styledComponents.div`
    width:100%;
    margin: 10% 0 20% 0;

    @media screen only and (min-width: 768px) {
        width: 90%;
    }

    @media screen only and (min-width: 1600px) {
        width: 80%;
    }
`;
