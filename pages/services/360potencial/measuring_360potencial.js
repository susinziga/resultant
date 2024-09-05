import Header from "../../../components/DNLA/subpages/Header";
import Middle from "../../../components/DNLA/subpages/Middle";
import useTranslation from "next-translate/useTranslation";
import PillarsMeasuring from "../../../components/potencial/pillars_potencial";
import { useRouter } from "next/router";
import ExpandableSection from "../../../components/potencial/expandables";
import styled from "styled-components";
import MethodologySection from "../../../components/potencial/methodology_section";
import TwoCardsSection from "../../../components/potencial/twocardsection";
const BoxContainer = styled.div`
  background-color: #f9f4f0;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxContent = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  width: 60%;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    width: 80%;
  }
`;
  
    
const measuring = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const pillarsContent = [
    { title: t("360potencial:measuring_pillarTitle1"), text: t("360potencial:measuring_pillarText1") },
    { title: t("360potencial:measuring_pillarTitle2"), text: t("360potencial:measuring_pillarText2") },
    { title: t("360potencial:measuring_pillarTitle3"), text: t("360potencial:measuring_pillarText3") },
    { title: t("360potencial:measuring_pillarTitle4"), text: t("360potencial:measuring_pillarText4") },
    { title: t("360potencial:measuring_pillarTitle5"), text: t("360potencial:measuring_pillarText5") },
  ];

  return (
    <>
      <Header title={t("360potencial:measuring_title")}></Header>
      <Middle
        img={"/360potencial/5dimenzij_desktop.webp"}
        text={t("360potencial:measuring_header_text")}
        title={t("360potencial:measuring_header_title")}
        withoutButton={true}
      ></Middle>

      <PillarsMeasuring style={{ marginTop: "3rem" }} />
      <ExpandableSection />
      <BoxContainer>
      <BoxContent>{t('360potencial:information_box_text')}</BoxContent>
    </BoxContainer>

    <MethodologySection />
    <TwoCardsSection />
              

    </>
  );
};

export default measuring;
