import React from "react";
import * as S from "./styles";

import { ResumeViewProvider } from "./views/ResumeView/context";
import { SweepstakesViewProvider } from "./views/SweepstakesView/context";
import { BuyersViewProvider } from "./views/BuyersView/context";

import AdminMenu from "../../containers/AdminMenu";
import AdminViews from "../../containers/AdminViews";

export default function Dashboard() {
  return (
    <S.AdminDashboard>
      <AdminMenu />
      <ResumeViewProvider>
        <SweepstakesViewProvider>
          <BuyersViewProvider>
            <AdminViews />
          </BuyersViewProvider>
        </SweepstakesViewProvider>
      </ResumeViewProvider>
    </S.AdminDashboard>
  );
}
