import { useNavigate } from "react-router-dom";

import { Wrapper } from "./styles";
import { Result as AntdResult } from "antd";

import Button from "../button";

const STATUS = {
  404: {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    action: "Back Home",
  },
  403: {
    status: "403",
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
    action: "Go Back",
  },
  500: {
    status: "500",
    title: "500",
    subTitle: "Sorry, something went wrong.",
    action: "Try Again",
  },
};

const Result = ({ status = "404", onClick }) => {
  const navigate = useNavigate();

  const {
    status: code,
    title,
    subTitle,
    action,
  } = STATUS[status] || STATUS[404];

  const handleClick = () => {
    onClick ? onClick() : navigate("/klyria-agency/");
  };

  return (
    <Wrapper>
      <AntdResult
        status={code}
        title={title}
        subTitle={subTitle}
        extra={
          <Button onClick={handleClick} aria-label={action} title={action}>
            {action}
          </Button>
        }
      />
    </Wrapper>
  );
};

export default Result;
