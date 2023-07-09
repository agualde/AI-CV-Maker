import { useState } from 'react';

import { css, jsx } from '@emotion/react';

import TextArea from '@atlaskit/textarea';
import {
  fontSize as getFontSize,
  // eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
  gridSize as getGridSize,
} from '@atlaskit/theme/constants';
import { token } from '@atlaskit/tokens';

import InlineEdit from '@atlaskit/inline-edit';

const fontSize = getFontSize();
const gridSize = getGridSize();
const minRows = 2;
const textAreaLineHeightFactor = 2.5;

const readViewContainerStyles = css({
  minHeight: `${gridSize * textAreaLineHeightFactor * minRows}px`,
  padding: token('space.075', '6px'),
  lineHeight: `${(gridSize * textAreaLineHeightFactor) / fontSize}`,
  wordBreak: 'break-word',
});

const InlineEditCustomTextareaExample = () => {
  const [editValue, setEditValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setEditText(editText + '\n');
    }
  };

  return (
    <div
      style={{
        padding: `${token('space.100', '8px')} ${token(
          'space.100',
          '8px',
        )} ${token('space.600', '48px')}`,
        width: '70%',
      }}
    >
      <InlineEdit
        defaultValue={editValue}
        label="Inline edit textarea (keeps edit view on blur)"
        editView={({ errorMessage, ...fieldProps }, ref) => (
          // @ts-ignore - textarea does not pass through ref as a prop
          <TextArea {...fieldProps} ref={ref}  onKeyPress={handleKeyPress}/>
        )}
        readView={() => (
          <div css={readViewContainerStyles}>
            {editValue || 'Click to enter a value'}
          </div>
        )}
        onConfirm={setEditValue}
        keepEditViewOpenOnBlur
        readViewFitContainerWidth
      />
    </div>
  );
};

export default InlineEditCustomTextareaExample;

