import React, { useState } from 'react';

import { token } from '@atlaskit/tokens';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';

const InlineEditableTextfieldDefault = ({text}) => {
  const [editValue, setEditValue] = useState(text);

  const validate = (value) => {
    if (value.length <= 6) {
      return 'Please enter a value greater than 6 characters';
    }
    return undefined;
  };

  return (
    <div
      style={{
        padding: `${token('space.100', '8px')} ${token(
          'space.100',
          '8px',
        )} ${token('space.600', '48px')}`,
      }}
    >
      <InlineEditableTextfield
        defaultValue={editValue}
        label="Description"
        onConfirm={(value) => setEditValue(value)}
        placeholder="Click to enter text"
        validate={undefined}
      />
    </div>
  );
};
export default InlineEditableTextfieldDefault;