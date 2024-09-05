import React, { useState } from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const ExpandableSection = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: t("360potencial:measuring_item1_title"),
      text: t("360potencial:measuring_item1_text"),
    },
    {
      title: t("360potencial:measuring_item2_title"),
      text: t("360potencial:measuring_item2_text"),
    },
    {
      title: t("360potencial:measuring_item3_title"),
      text: t("360potencial:measuring_item3_text"),
    },
    {
      title: t("360potencial:measuring_item4_title"),
      text: t("360potencial:measuring_item4_text"),
    },
    {
      title: t("360potencial:measuring_item5_title"),
      text: t("360potencial:measuring_item5_text"),
    },
    {
      title: t("360potencial:measuring_item6_title"),
      text: t("360potencial:measuring_item6_text"),
    },
    {
      title: t("360potencial:measuring_item7_title"),
      text: t("360potencial:measuring_item7_text"),
    },
    {
      title: t("360potencial:measuring_item8_title"),
      text: t("360potencial:measuring_item8_text"),
    },
    {
      title: t("360potencial:measuring_item9_title"),
      text: t("360potencial:measuring_item9_text"),
    },
    {
      title: t("360potencial:measuring_item10_title"),
      text: t("360potencial:measuring_item10_text"),
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionContainer>
      <SectionHeading>{t("360potencial:measuring_sectionTitle")}</SectionHeading>
      {sections.map((section, index) => (
        <SectionItem key={index}>
          <SectionHeader onClick={() => handleToggle(index)}>
            {section.title}
            <ToggleIcon>{expandedIndex === index ? "–" : "+"}</ToggleIcon>
          </SectionHeader>
          {expandedIndex === index && (
            <SectionContent>{section.text}</SectionContent>
          )}
        </SectionItem>
      ))}
    </SectionContainer>
  );
};

export default ExpandableSection;

// Styled components
const SectionContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  width: 100%;
  background-color: #F6FBFE;
  border-radius: 8px;
`;

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SectionItem = styled.div`
  border: 1px solid #00476730; 
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #F6FBFE;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
`;

const SectionContent = styled.div`
  padding: 0rem 1rem 1.5rem 1rem;
  font-size: 0.9rem;
  color: #333;
`;

