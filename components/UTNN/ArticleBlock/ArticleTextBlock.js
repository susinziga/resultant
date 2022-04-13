import { Title } from "./ArticleTextBlock.styled";
import { BodyText2 } from "../../../basic_components/texts/Texts";

const ArticleTextBlock = ({ title, text, className }) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      <BodyText2>{text}</BodyText2>
    </div>
  );
};

export default ArticleTextBlock;
