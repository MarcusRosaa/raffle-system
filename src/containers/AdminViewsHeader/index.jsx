import * as S from "./styles";
import { HeaderIconButton } from "../../utils/inputs";
import { HiOutlineBell, HiOutlineCog } from "react-icons/hi";

import { Popover, Position, Menu, Avatar } from "evergreen-ui";

import { useViews } from "../../contexts/ViewsContext";

const AdminViewsHeader = () => {
  const { viewActive } = useViews();

  const userName = "Henrique Garcia";

  return (
    <S.AdminViewsHeader>
      <S.AdminViewsHeaderTitle>{viewActive.viewTitle}</S.AdminViewsHeaderTitle>
      <S.AdminViewsHeaderConfigs>
        <HeaderIconButton icon={<HiOutlineCog className="resize" />} />
        <HeaderIconButton
          isActive
          icon={<HiOutlineBell className="resize" />}
        />
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item onSelect={() => {}}>Minha Conta</Menu.Item>
                <Menu.Item onSelect={() => {}}>Gerenciar Pagamentos</Menu.Item>
              </Menu.Group>
              <Menu.Divider />
              <Menu.Group>
                <Menu.Item onSelect={() => {}} intent="danger">
                  Sair
                </Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <S.UserDetails>
            <S.UserDetailsName>
              <b>Olá, </b>
              {userName}
            </S.UserDetailsName>
            <Avatar name={userName} size={32} marginLeft={8} />
          </S.UserDetails>
        </Popover>
      </S.AdminViewsHeaderConfigs>
    </S.AdminViewsHeader>
  );
};

export default AdminViewsHeader;
