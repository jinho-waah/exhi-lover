import React from "react";
import DetailTemplate from "../component/detail/DetailTemplate";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { color = "#FE6E22" } = location.state || {};
  return <DetailTemplate color={color} />;
};

export default React.memo(DetailPage);
