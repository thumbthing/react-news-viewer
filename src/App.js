import { useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const reponse = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(reponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;