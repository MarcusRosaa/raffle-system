import * as S from "./styles";
import { GiCarKey } from "react-icons/gi";

import { useViews } from "../../contexts/ViewsContext";

const AdminMenu = () => {
  const { viewsMenuData, viewsMenuSettingsData, viewActive, handleChangeView } =
    useViews();

  return (
    <S.AdminMenu>
      <S.AdminMenuLogo>
        <GiCarKey />
        Gordinho Rifas
      </S.AdminMenuLogo>
      <S.AdminMenuContainer>
        <S.AdminMenuMain>
          {viewsMenuData?.map((menu) => (
            <S.AdminMenuButton
              key={menu.viewId}
              isActive={menu.viewId === viewActive.viewId}
              onClick={() => handleChangeView(menu)}
            >
              {menu.viewIcon}
              {menu.viewLabel}
            </S.AdminMenuButton>
          ))}
        </S.AdminMenuMain>
        <S.AdminMenuConfigs>
          {viewsMenuSettingsData?.map((menuSettings) => (
            <S.AdminMenuButton
              key={menuSettings.viewId}
              isActive={menuSettings.viewId === viewActive.viewId}
              onClick={() => handleChangeView(menuSettings)}
            >
              {menuSettings.viewIcon}
              {menuSettings.viewLabel}
            </S.AdminMenuButton>
          ))}
        </S.AdminMenuConfigs>
      </S.AdminMenuContainer>
    </S.AdminMenu>
  );
};

export default AdminMenu;
