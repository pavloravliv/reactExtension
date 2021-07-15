import { useState, useEffect } from 'react';

function useGetData(path) {
  const [inputData, setData] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(`http://localhost:3000/${path ?? 'items'}`)
      .then((response) => response.json())
      .then((incomingData) => {
        setData(incomingData);
      });
  }, [path]);

  // const items = data.map(itemData => <Item key={itemData.id} itemData={itemData} />);
  return inputData;
}
export default useGetData;
