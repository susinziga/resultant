import React from "react";
import {
  BodyText2,
  BodyText3,
  Title2,
} from "../../../../basic_components/texts/Texts";

import * as Styled from "./Testimonial.styled";

const Testimonial = ({ testimonial }) => {
  const { title, text, name, role } = testimonial;
  return (
    <Styled.TestimonialContainer>
      <Title2>{title}</Title2>
      <p>
        <BodyText2>{text}</BodyText2>
      </p>
      <BodyText2>{name}</BodyText2>
      <BodyText3>{role}</BodyText3>
    </Styled.TestimonialContainer>
  );
};

export default Testimonial;
