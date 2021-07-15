import React from 'react';

const PrettyPrintJson = React.memo(({ itemData }) => (
  <div>
    <pre>{JSON.stringify(itemData, null, 2)}</pre>
  </div>
));

export default PrettyPrintJson;
