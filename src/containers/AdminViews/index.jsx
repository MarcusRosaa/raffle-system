import * as S from "./styles";

import AdminViewsHeader from "../AdminViewsHeader";

import { useViews } from "../../contexts/ViewsContext";

const AdminViews = () => {
  const { viewActive } = useViews();

  return (
    <S.AdminViews>
      <AdminViewsHeader />
      <S.AdminViewsContainer>{viewActive.viewComponent}</S.AdminViewsContainer>
    </S.AdminViews>
  );
};

export default AdminViews;
