import React from 'react';
import { ButtonContainer, OfferContainer, FormContainer, SubmitButton, HeadingLine, BackgroundVector } from './OfferForm.styled';
import Input from '../../../basic_components/input/Input'
import Checkbox from './Checkbox_offer';

import MultipleCheckbox from './MultipleCheckbox_offer';


const inputProps1 = [
  {label: "Ime podjetja"},
  {label: "Naslov"},
  {label: "Kontaktna oseba"},
  {label: "Email naslov kontaktne osebe"},
  {label: "Tel. stevilka  "}
]

const inputProps2 = [
  {label: "Število zaposlenih"},
  {label: "Število vprašalnikov na daljavo(e-vprašalnik)"},
  {label: "Število vprašalnikov v tiskalni obliki"},
]

const checkboxProps = [
  {label: "Ali želite predstavitev rezultatov upravi:"},
  {label: "Ali želite primerjavo rezultatov med vodji in zaposlenimi:"},
]


const OfferForm_offer = () => {
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