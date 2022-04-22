import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Sayaç Uygulaması</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>Azalt</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)} disabled={count === 0}>Sıfırla</button>
            <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Arttır</button>
          </div>
        </div>
      </div>
      <footer className="text-center">
    Ceyhun Bora Işık
  </footer>
    </div>
  );
}

export default Counter;
