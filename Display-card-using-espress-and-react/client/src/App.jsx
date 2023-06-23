
//fetching data from express

// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [backendData, setBackendData] = useState({});

//   useEffect(() => {
//     fetch('/users')
//       .then(response => response.json())
//       .then(data => {
//         setBackendData(data);
//       });
//   }, []);

//   return (
//     <>
//       {typeof backendData.users === 'undefined' ? (
//         <p>Loading ...</p>
//       ) : (
//         backendData.users.map((user, i) => (
//           <p key={i}>{user}</p>
//         ))
//       )}
      
//     </>
//   );
// }

// export default App;


//fetching data from external api

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setList(json);
      });
  }, []);

  return (
    <div className="App">

        {list.map(item => (
          <div key={item.id} className="card">
            <h2>{item.id}</h2>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      
    </div>
  );
}

export default App;

