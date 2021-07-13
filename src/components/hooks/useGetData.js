import { useState, useEffect } from 'react';

function useGetData() {
  const [inputData, setData] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((incomingData) => {
        setData(incomingData);
      });
  }, []);

  // const items = data.map(itemData => <Item key={itemData.id} itemData={itemData} />);
  return inputData;
}
export default useGetData;
