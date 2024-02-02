import { useState } from 'react';
import './App.css';

function App() {
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [ans, setAns] = useState([]);

  const get = () => {


    const val1 = start.split(":");
    let shour = Number(val1[0]);
    let smin = Number(val1[1]);

    const val2 = end.split(":");
    let ehour = Number(val2[0]);
    let emin = Number(val2[1]);
    let time = [];

    const temp = ehour - shour;
    console.log(temp);
    const temp1 = emin - smin;
    console.log(temp1);

    let h = temp * 6;
    let m = temp1 / 10;
    let total = h + m;
    console.log("h = " + h)
    console.log("m = " + m)
    console.log("t" + total)

    for (let i = 0; i <= total; i++) {

      debugger

      if (smin >= 60) {
        smin = smin - 60;
        shour = shour + 1;

        // if (shour == 12) {
        //   shour = 1;
        // }
      }

      if (smin < 10) {
        time.push(`${shour}:0${smin}`);
      } else {
        time.push(`${shour}:${smin}`);
      }

      smin = smin + 10;
    }
    console.log(smin + '/' + emin);

    if ((smin - 10) < emin) {
      if (smin < 10) {
        time.push(`${shour}:0${smin}`);
      } else {
        time.push(`${shour}:${smin}`);
      }
    }
    setAns(time);
    console.log(time)
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => setstart(e.target.value)} />
      <input type="text" onChange={(e) => setend(e.target.value)} />
      <input type="button" value="Click" onClick={get} />

      <ul>
        {ans.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
