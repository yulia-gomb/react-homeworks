import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9fdfd;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;

export const TextSection = styled.div`
    max-width: 600px;
`;

export const Heading = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    color: var(--color-grey);
    margin-bottom: 20px;
    line-height: 1;
`;

export const Highlight = styled.span`
    color: var(--color-blue);
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 1.1rem;
    color: var(--color-grey);
    margin-bottom: 30px;
`;

export const TrustPilot = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

export const TrustPilotText = styled.div`
    font-size: 0.9rem;
    color: var(--color-grey);
    margin-left: 5px;
`;

export const ImageSection = styled.span`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
`;

export const FoodImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;
