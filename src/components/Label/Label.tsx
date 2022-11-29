
    import React from 'react';
    import LabelProps from './Label.types';
    
    export const Label = ({
      text,
      classes,
      isPageHeading,
      html,
      htmlFor,
      attributes,
    }: LabelProps) => {
      return (
<label class="govuk-label">
  National Insurance number
</label>
  );
    }
    
    export default Label;