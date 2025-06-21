/* eslint-disable no-nested-ternary */
import { useCallback } from "react";
import { Helmet } from "react-helmet";
import { useLocalStorage } from "react-use";

import "../../elements/index.css";
import {
  UserForm,
  OrganisationForm,
  ChooseAccountType,
  HotelAdminForm,
} from "./components";

export const Register = () => {
  const [organisationName, setOrganisationName, removeOrganisationName] =
    useLocalStorage("organisationName", null, {
      raw: true,
    });
  const [accountType, setAccountType, removeAccountType] = useLocalStorage(
    "accountType",
    null,
    {
      raw: true,
    }
  );

  const onClickNext = useCallback(
    (newOrganisationName) => {
      setOrganisationName(newOrganisationName);
    },
    [setOrganisationName]
  );

  const onClickAccountType = useCallback(
    (selectedAccountType) => {
      setAccountType(selectedAccountType);
    },
    [setAccountType]
  );

  const onNavigateBack = useCallback(() => {
    removeOrganisationName();
  }, [removeOrganisationName]);

  const onNavigateBackToChooseType = useCallback(() => {
    removeAccountType();
  }, [removeAccountType]);

  return (
    <div className="no-gutters row auth-container">
      <Helmet>
        <title>Register | Restaurant Table Booking</title>
      </Helmet>
      <div className="auth-bg" />
      <div className="auth-bg bg2" />
      <div className="auth-bg bg3" />
      {!accountType ? (
        <ChooseAccountType onClickAccountType={onClickAccountType} />
      ) : null}
      {accountType !== "User" ? (
        !organisationName ? (
          <OrganisationForm
            onClickNext={onClickNext}
            onNavigateBack={onNavigateBack}
            onNavigateBackToChooseType={onNavigateBackToChooseType}
          />
        ) : (
          <HotelAdminForm
            onNavigateBack={onNavigateBack}
            onNavigateBackToChooseType={onNavigateBackToChooseType}
            accountType={accountType}
          />
        )
      ) : (
        <UserForm
          onNavigateBack={onNavigateBackToChooseType}
          accountType={accountType}
        />
      )}
    </div>
  );
};
