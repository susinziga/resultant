import { Title, Text } from "./ArticleTextBlock.styled";

const ArticleTextBlock = ({ title, text, className }) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
  );
};

export default ArticleTextBlock;
