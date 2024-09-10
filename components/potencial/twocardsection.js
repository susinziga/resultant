import React from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import { SubmitButton } from "../service1/PlanSection/Plan.styled";

const TwoCardsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionTitle>{t("360potencial:results_title")}</SectionTitle>
      <CardsContainer>
        <Card
          style={{
            backgroundColor: "#CFEDFC",
          }}
        >
          <CardNumber>1.</CardNumber>
          <CardText>{t("360potencial:results_text1")}</CardText>
        </Card>
        <Card
          ž
          style={{
            backgroundColor: "#DCEDFA",
          }}
        >
          <CardNumber>2.</CardNumber>
          <CardText>{t("360potencial:results_text2")}</CardText>
        </Card>
      </CardsContainer>
      {/* <Button>{t("360potencial:results_button")}</Button> */}
      <SubmitButton href="../../services/siok/ponudba-siok" className="section">
        {t("360potencial:results_button")}
      </SubmitButton>
    </SectionContainer>
  );
};

export default TwoCardsSection;

// Styled components
const SectionContainer = styled.div`
  margin: 2rem auto;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Neusa";
  margin-bottom: 1.5rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background-color: #e0f4ff;
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1;
  text-align: left;
  min-width: 200px;
`;

const CardNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

const Button = styled.a`
  background-color: #00aaff;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077cc;
  }
`;
