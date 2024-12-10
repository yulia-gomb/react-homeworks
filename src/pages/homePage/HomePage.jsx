import {
    Container,
    Content,
    Description,
    FoodImage,
    Heading,
    ImageSection,
    TextSection,
    TrustPilot,
    TrustPilotText,
    Highlight
} from "./HomePage.styled.js";
import Button from "../../components/button/Button.jsx";
import { useNavigate } from "react-router-dom";
import homeImage from '../../assets/images/home.png';

const HomePage = () => {
    const navigate = useNavigate();

    const handlePlaceAnOrderClick = () => {
        navigate("/menu");
    };

    return (
        <Container>
            <Content>
                <TextSection>
                    <Heading>
                        Beautiful food & takeaway, <Highlight>delivered</Highlight> to your door.
                    </Heading>
                    <Description>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry`s standard dummy text ever since the 1500.
                    </Description>
                    <Button label="Place an Order" onClick={handlePlaceAnOrderClick} variant="primary" />
                    <TrustPilot>
                        <Highlight>★ Trustpilot</Highlight>
                        <TrustPilotText><Highlight>4.8 out of 5</Highlight> based on 2000+ reviews</TrustPilotText>
                    </TrustPilot>
                </TextSection>
                <ImageSection>
                    <FoodImage src={homeImage} alt="Food" />
                </ImageSection>
            </Content>
        </Container>
    );
};

export default HomePage;
