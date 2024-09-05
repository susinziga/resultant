import React, { useState } from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Button from "../../basic_components/button/Button";
import useSize from "../../custom_hooks/useSize";

const PillarsMeasuring = (props) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const { isDesktop } = useSize();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define translations for the headings and texts
  const heading = t("360potencial:measuring_title");

  const pillarsContent = [
    { title: t("360potencial:measuring_pillarTitle1"), text: t("360potencial:measuring_pillarText1") },
    { title: t("360potencial:measuring_pillarTitle2"), text: t("360potencial:measuring_pillarText2") },
    { title: t("360potencial:measuring_pillarTitle3"), text: t("360potencial:measuring_pillarText3") },
    { title: t("360potencial:measuring_pillarTitle4"), text: t("360potencial:measuring_pillarText4") },
    { title: t("360potencial:measuring_pillarTitle5"), text: t("360potencial:measuring_pillarText5") },
  ];

  return isDesktop() ? (
    <PillarsContainer {...props}>
      <PillarsFlex>
        {pillarsContent.map((pillar, index) => (
          <PillarCard
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            hovered={hoveredIndex === index}
          >
            <PillarTitle>{pillar.title}</PillarTitle>
            <PillarText hovered={hoveredIndex === index}>{pillar.text}</PillarText>
          </PillarCard>
        ))}
      </PillarsFlex>
     
    </PillarsContainer>
  ) : (
    <PillarsContainerMobile {...props}>
      <HeadingContainer>
        <Heading>{heading}</Heading>
      </HeadingContainer>
      {pillarsContent.map((pillar, index) => (
        <PillarCardMobile key={index}>
          <PillarTitle>{pillar.title}</PillarTitle>
          <PillarText>{pillar.text}</PillarText>
        </PillarCardMobile>
      ))}
  
    </PillarsContainerMobile>
  );
};

// Styled components for desktop version
const PillarsContainer = styled.div`
  margin: 3rem auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const PillarsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const PillarCard = styled.div`
  background-color: ${(props) => (props.hovered ? "#F9F4F0" : "white")};
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  width: calc(50% - 1rem);
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const PillarTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const PillarText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: lighter;
  color: #282828;
  transition: opacity 0.3s ease;
`;

// Styled components for mobile version
const PillarsContainerMobile = styled(PillarsContainer)`
  flex-direction: column;
`;

const PillarCardMobile = styled(PillarCard)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const PillarButton = styled.a`
  background-color: var(--secondary-color);
  padding: 5% 10%;
  width: 100%;
  display: block;
  text-align: center;
  color: var(--white);
  border-radius: var(--border-primary);
  &:hover {
    background-color: var(--primary-color);
  }
`;

export default PillarsMeasuring;
