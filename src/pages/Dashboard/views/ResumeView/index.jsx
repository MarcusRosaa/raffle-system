import * as S from "./styles";

import { useResumeView } from "./context";

const ResumeView = () => {
  const { view } = useResumeView();

  return <S.ResumeView></S.ResumeView>;
};

export default ResumeView;
