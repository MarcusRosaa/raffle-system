import { useState } from "react";
import moment from "moment";

const useDateValidation = () => {
  const validateDate = (dateString) => {
    const dateFormat = "DD/MM/YY";
    const isValidDate = moment(dateString, dateFormat, true).isValid();

    return isValidDate;
  };

  return [validateDate];
};

export default useDateValidation;
