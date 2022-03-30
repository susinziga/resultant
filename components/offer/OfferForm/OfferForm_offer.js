import React from 'react';
import { ButtonContainer, OfferContainer, FormContainer, SubmitButton, HeadingLine, BackgroundVector } from './OfferForm.styled';
import Input from '../../../basic_components/input/Input'
import Checkbox from './Checkbox_offer';

import MultipleCheckbox from './MultipleCheckbox_offer';
import useTranslation from "next-translate/useTranslation";


const OfferForm_offer = () => {
  const { t, lang } = useTranslation();

  const label1 =  t("offer:offer_multipleCheckboxLabel1");
  const label2 = t("offer:offer_multipleCheckboxLabel2");
  const label3 = t("offer:offer_multipleCheckboxLabel3");
  const label4 = t("offer:offer_multipleCheckboxLabel4");

  const inputProps1 = [
    {label: t("offer:offer_inputProp1")},
    {label:t("offer:offer_inputProp2")},
    {label: t("offer:offer_inputProp3")},
    {label: t("offer:offer_inputProp4")},
    {label: t("offer:offer_inputProp5")}
  ]
  
  const inputProps2 = [
    {label: t("offer:offer_secondInputProp1")},
    {label: t("offer:offer_secondInputProp2")},
    {label: t("offer:offer_secondInputProp3")},
  ]
  
  const checkboxProps = [
    {label: t("offer:offer_checkboxProp1")},
    {label: t("offer:offer_checkboxProp2")},
  ]

  return (<>
      <OfferContainer>
        <FormContainer>
        {
          inputProps1.map((input) => {
            return(<>
              <Input id="desktop" props={input} style={{marginBottom: "5%", fontSize: "2rem"}}></Input>
              </>
            )
          })
        }
        <HeadingLine></HeadingLine>
        {
          inputProps2.map((input) => {
            return(<>
              <Input id="desktop" props={input} style={{marginBottom: "5%", fontSize: "2rem"}}></Input>
              </>
            )
          })
        }
        <HeadingLine></HeadingLine>
        {
          checkboxProps.map((checkbox) => {
           
            return(<>
              <Checkbox props={checkbox}></Checkbox>
              </>
            )
          })
        }
        <HeadingLine></HeadingLine>
        <BackgroundVector src="./offer/backgroundVector.png"></BackgroundVector>
        <MultipleCheckbox></MultipleCheckbox>
        <ButtonContainer>
          <SubmitButton type="submit" value="Pošlji"></SubmitButton>
        </ButtonContainer>
        </FormContainer>
      </OfferContainer>
  </>
  )
}

export default OfferForm_offer;