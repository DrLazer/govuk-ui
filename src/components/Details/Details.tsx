
    import React from 'react';
    import DetailsProps from './Details.types';
    
    export const Details = ({
      summaryText,
      text,
      id,
      open,
      html,
      summaryHtml,
      classes,
      attributes,
    }: DetailsProps) => {
      return (
<details class="govuk-details" data-module="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
  );
    }
    
    export default Details;