import React from "react";
import ErrorSummaryProps from "./ErrorSummary.types";

export const ErrorSummary = ({
  titleText,
  errorList,
  descriptionText,
  titleHtml,
  descriptionHtml,
  classes,
  attributes,
  disableAutoFocus,
}: ErrorSummaryProps) => {
  return (
    <>
      <div className="govuk-error-summary" data-module="govuk-error-summary">
        <div role="alert">
          <h2 className="govuk-error-summary__title">There is a problem</h2>
          <div className="govuk-error-summary__body">
            <ul className="govuk-list govuk-error-summary__list">
              <li>
                <a href="#example-error-1">The date your passport was issued must be in the past</a>
              </li>

              <li>
                <a href="#example-error-2">Enter a postcode, like AA1 1AA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorSummary;
