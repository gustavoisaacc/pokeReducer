import { Button } from "antd";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = !isFavorite ? AiOutlineStar : AiFillStar;
  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StarButton;
