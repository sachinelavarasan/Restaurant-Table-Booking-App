/* eslint-disable react/prop-types */
import React from "react";

import { useNavigate } from "react-router";
import { FooterContainer } from "./elements";
import { Button } from "../../../../../../components/common";

// const DELAY = 500;

export const Footer = ({ isAddCourseLoading, onSubmit }) => {
  const history = useNavigate();

  const onButtonCancel = () => {
    history(`/admin/courses/active-courses`, { replace: true });
  };

  return (
    <FooterContainer>
      <div className="footer-container fixed-bottom">
        <div className="footer">
          <div />
          <div className="button-container">
            <Button
              className="button cancel-button mr-3"
              isFullWidth={false}
              onClick={onButtonCancel}
              label="Cancel"
              id="cancel-course-button"
            />
            <Button
              className="button"
              isFullWidth={false}
              isLoading={isAddCourseLoading}
              label="Save"
              onClick={onSubmit}
              id="add-course-button"
            />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
