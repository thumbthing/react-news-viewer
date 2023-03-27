import { useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const reponse = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=18aabb9a7f614975a1160cd8fb1b1296',
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
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default App;