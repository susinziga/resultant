import React from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const MethodologySection = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <TitleContainer>
        <SectionTitle>{t('360potencial:methodology_title')}</SectionTitle>
      </TitleContainer>
      <TextContainer>
        <SectionText>{t('360potencial:methodology_text')}</SectionText>
      </TextContainer>
    </SectionContainer>
  );
};

export default MethodologySection;

// Styled components
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 0;
  margin: 2rem auto;
  width: 80%;
  border-bottom: 1px solid #333;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  margin-right: auto; /* Push the title container to the left */

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 0; /* Reset for mobile */
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Neusa";
  margin: 0;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-left: auto; /* Push the text container to the right */
  max-width: 50%; /* Limit the width to maintain layout */

  @media (max-width: 768px) {
    margin-left: 0; /* Reset for mobile */
    max-width: 100%;
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  line-height: 1.6;
  margin: 0;
`;
