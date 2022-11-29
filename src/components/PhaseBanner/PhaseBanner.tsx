
    import React from 'react';
    import PhaseBannerProps from './PhaseBanner.types';
    
    export const PhaseBanner = ({
      tag,
      html,
      text,
      classes,
      attributes,
    }: PhaseBannerProps) => {
      return (
<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service - your <a href="#" class="govuk-link">feedback</a> will help us to improve it.
    </span>
  </p>
</div>
  );
    }
    
    export default PhaseBanner;