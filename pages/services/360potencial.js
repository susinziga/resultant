import React from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import HeadingSection1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Quote from "../../components/service1/Quote/QuoteSection1_service1";
import CardSection from "../../components/service1/CardSection/CardTable_service1";
import Plan from "../../components/service1/PlanSection/Plan_service1";
import { useRouter } from "next/router";
import { BodyText3, Title2 } from "../../basic_components/texts/Texts";

// Define styled components

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f4f0;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  margin: 5% auto;
  max-width: 80%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CardImage = styled.img`
  width: 50%;
  border-radius: 16px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const CardContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const CardButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 2px solid #b89859; /* Match the border color */
  color: #b89859; /* Match the text color */
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px; /* Rounded corners */
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b89859; /* Hover effect */
    color: #fff;
  }
`;

const ArrowIcon = styled.img`
  margin-left: 0.5rem;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 15% 0;
  text-align: center;
  background: #f6fbfe;
  padding-top: 5%;
  position: relative;
`;

const Title = styled.h2`
  margin-top: 5%;
  margin-bottom: 2%;
  font-family: "Neusa";
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0% 5%;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  margin: auto;
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ExperienceContainer = styled.div`
  width: 90%;
  margin: auto;
  position: relative;

  @media only screen and (min-width: 768px) {
    padding-top: 5%;
  }
`;

const BulletHeading = styled(BodyText3)`
  font-weight: 500;
  font-family: "Neusa";
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

const FlexHeadingContainer = styled.div`
  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const ControlContainer = styled.div`
  margin-bottom: 10%;
  @media only screen and (min-width: 768px) {
    padding-right: 20%;
  }
  @media only screen and (min-width: 992px) {
    padding-right: 30%;
  }
`;

const Subtext = styled.p`
  font-size: 1.2rem;
  font-family: "Neusa";
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 992px) {
    padding-right: 15%;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1600px) {
    padding-right: 10%;
  }
`;

const FlexDesktop = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const ExperienceTitle = styled(Title2)`
  margin: 20% 0 10% 0;
  font-family: "Neusa";
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    margin: 0;
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 5%;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

const FlexDesktopText = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
`;

const List = styled.ul`
  width: 100%;
  list-style-type: disc;
  padding-left: 5%;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

const Bullet = styled.li`
  margin: 4% 0;
  font-size: 1.25rem;
  font-family: "Neusa";
  font-weight: 400;
  line-height: 31px;

  @media only screen and (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

const BackgroundVector = styled.img`
  position: absolute;
  top: 0;
  left: 8%;
  z-index: -100;
  width: 70%;
  top: -18%;

  @media only screen and (min-width: 992px) {
    width: 60%;
    top: -18%;
  }

  @media only screen and (min-width: 1600px) {
    left: 15%;
    width: 50%;
    top: -18%;
  }
`;

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  background-color: #fafafa;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  margin: 5% auto;
  max-width: 80%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const InfoCardImage = styled.img`
  width: 50%;
  border-radius: 16px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const InfoCardContent = styled.div`
  width: 50%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const InfoCardHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const InfoCardText = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

const InfoCardButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 2px solid #b89859;
  color: #b89859;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: #b89859;
    color: #fff;
  }
`;

const InfoCardButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #ffd700;
  color: #6b5400;
  font-weight: bold;
  border-radius: 50%;
  margin-left: 0.5rem;
  font-size: 0.75rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default to one column */
  gap: 2rem;
  padding: 2rem;
  margin: auto;
  width: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on larger screens */
  }
`;

const PracticeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: #fff;
  border: 2px solid #e8e8e8;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  width: 100%; /* Full width for grid items */
  text-align: left;
  transition: transform 0.3s ease; /* Smooth hover effect */

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const PracticeCardHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const PracticeCardText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  white-space: normal; /* Ensure text is not truncated */
  overflow: visible; /* Prevent text from being cut off */
  text-overflow: clip; /* Avoid adding ellipsis */
  display: block; /* Ensure it behaves like a block element */
`;

const PracticeCardButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 2px solid #b89859;
  color: #b89859;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  position: relative;

  &:hover {
    background-color: #b89859;
    color: #fff;
  }
`;

const PotencialPage = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <HeadingSection1
        className="section"
        props={{
          upperTitle: t("360potencial:potencial_mainHeading"),
          paragraph: t("360potencial:potencial_mainParagraph"),
          headerImage1: "/DNLA/dnlaMainImageMobile.webp",
          headerImage2: "/DNLA/dnlaMainImageDesktop.webp",
        }}
      />

      <Quote className="section" props={t("360potencial:potencial_quoteParagraph")} />

      <CardSection
        className="section"
        cardProps1={[
          {
            heading: t("360potencial:potencial_card1Heading"),
            text: t("360potencial:potencial_card1Text"),
            color: "#AABFD1",
          },
          {
            heading: t("360potencial:potencial_card2Heading"),
            text: t("360potencial:potencial_card2Text"),
            color: "#CFEDFC",
          },
        ]}
        cardProps2={[
          {
            heading: t("360potencial:potencial_card3Heading"),
            text: t("360potencial:potencial_card3Text"),
            color: "#BED6E1",
          },
          {
            heading: t("360potencial:potencial_card4Heading"),
            text: t("360potencial:potencial_card4Text"),
            color: "#DCEDFA",
          },
        ]}
        button={true}
      />

      {/* First Plan Section with two columns */}
      <Plan
        className="section"
        hideButton={true}
        plan1={[
          { text: t("360potencial:plan_item1"), number: "1" },
          { text: t("360potencial:plan_item2"), number: "2" },
          { text: t("360potencial:plan_item3"), number: "3" },
          { text: t("360potencial:plan_item4"), number: "4" },
          { text: t("360potencial:plan_item5"), number: "5" },
          { text: t("360potencial:plan_item6"), number: "6" },
        ]}
        plan2={[
          { text: t("360potencial:plan2_item1"), number: "1" },
          { text: t("360potencial:plan2_item2"), number: "2" },
          { text: t("360potencial:plan2_item3"), number: "3" },
          { text: t("360potencial:plan2_item4"), number: "4" },
          { text: t("360potencial:plan2_item5"), number: "5" },
          { text: t("360potencial:plan2_item6"), number: "6" },
          { text: t("360potencial:plan2_item7"), number: "7" },
          { text: t("360potencial:plan2_item8"), number: "8" },
          { text: t("360potencial:plan2_item9"), number: "9" },
        ]}
        heading1={t("360potencial:plan_heading")}
        heading2={t("360potencial:plan2_heading")}
        bgImg
      />

      {/* Second Plan Section */}
      <Plan
        className="section"
        hideButton={true}
        plan1={[
          { text: t("360potencial:plan3_item1"), number: "1" },
          { text: t("360potencial:plan3_item2"), number: "2" },
          { text: t("360potencial:plan3_item3"), number: "3" },
          { text: t("360potencial:plan3_item4"), number: "4" },
          { text: t("360potencial:plan3_item5"), number: "5" },
          { text: t("360potencial:plan3_item6"), number: "6" },
        ]}
        heading1={t("360potencial:plan3_heading")}
        bgImg
      />

      {/* Additional Quote Section */}
      <Quote props={t("360potencial:potencial_additionalQuote")} />

      {/* Image Section Styled Similar to SIOK Service */}
      <Container>
        <Title>{t("360potencial:analiza_title1")}</Title>
        <Image src={"/360potencial/image1_sl.png"} alt={t("360potencial:image_alt_text")} />
        <Title>{t("360potencial:analiza_title2")}</Title>
        <ImageContainer>
          <Image src={"/360potencial/image2_sl.png"} alt={t("service1:service1_SIOKImageSub")} />
        </ImageContainer>
      </Container>

      

      {/* New Bullet Section */}
      <ExperienceContainer>
        <BackgroundVector className="desktop" src="/Service1/VectorA.webp"></BackgroundVector>
        <FlexDesktop>
          <FlexHeadingContainer>
            <ExperienceTitle>{t("360potencial:bulletSectionTitle")}</ExperienceTitle>
            <ControlContainer>
              <Subtext>{t("360potencial:bulletSubHeading")}</Subtext>
            </ControlContainer>
          </FlexHeadingContainer>
          <FlexDesktopText>
            <BulletHeading>{t("360potencial:bulletMainHeading")}</BulletHeading>
            <List>
              <Bullet>{t("360potencial:bullet_item1")}</Bullet>
              <Bullet>{t("360potencial:bullet_item2")}</Bullet>
              <Bullet>{t("360potencial:bullet_item3")}</Bullet>
              <Bullet>{t("360potencial:bullet_item4")}</Bullet>
              <Bullet>{t("360potencial:bullet_item5")}</Bullet>
              <Bullet>{t("360potencial:bullet_item6")}</Bullet>
            </List>
          </FlexDesktopText>
        </FlexDesktop>
      </ExperienceContainer>

      {/* Main Card Section */}
      <CardContainer>
        <CardImage src="/360potencial/image1_sl.png" alt="Card Image" />
        <CardContent>
          <CardHeading>{t("360potencial:card_heading")}</CardHeading>
          <CardText>{t("360potencial:card_text")}</CardText>
          <CardButton href="#">
            {t("360potencial:card_button_text")}
            <ArrowIcon src="/Service1/Caret_Right.webp" alt="Arrow Icon" />
          </CardButton>
        </CardContent>
      </CardContainer>

      {/* Grid of Practice Cards */}
      <h1 style={{
        fontFamily: "Neusa",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "regular",
        marginTop: "50px",
      }}>
        Katere dobre prakse naslavljamo in preverjamo z 360Potencial?
      </h1>
      <CardsGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <PracticeCardContainer key={index}>
            <PracticeCardHeading>
              {t(`360potencial:card_heading_${index}`)}
            </PracticeCardHeading>
            <PracticeCardText>
              {t(`360potencial:card_text_${index}`)}
            </PracticeCardText>
            {index !== 8 && (
              <PracticeCardButton href="#">
                {t(`360potencial:card_button_text_${index}`)}
              </PracticeCardButton>
            )}
          </PracticeCardContainer>
        ))}
      </CardsGrid>
    </>
  );
};

export default PotencialPage;
