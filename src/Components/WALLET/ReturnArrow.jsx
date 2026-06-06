import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../../assets/Icon";

const ReturnArrow = () => {
  const navigate = useNavigate();
  return (
    <button>
      <BackArrowIcon />
    </button>
  );
};
export default ReturnArrow;
