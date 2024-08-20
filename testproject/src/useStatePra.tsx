// CSS File
import "./scss/app.css";

// import codes
import { useState } from "react";

// -------------------------------------

function useStatepra() {
  // JSでの記述例
  // let countB = 0;

  // const handleCC - {num} => {
  //   if(num === -1) {
  //     countB = countB - 1;
  //   }
  //   if(num === +1){
  //     countB = countB + 1;
  //   }
  // }

  const [count, setCount] = useState(0);

  const handleCurrentCount = (num: number) => {
    setCount((current) => {
      return current + num;
    });
  };

  // -return で id="root"の場所を書いている ------------------

  return (
    <>
      <section>
        {/* <h1>UseStateの記述</h1> */}
        <p>useStateは状況を確認し反映してくれるもの</p>
        <a href="https://www.youtube.com/watch?v=8AEljLl3xGY" target="_blank">
          参考URL
        </a>

        {/* <div>
          <button onClick={() => handleCC(-1)}>-</button>
          <button onClick={() => handleCC(+1)}>+</button>
          <p>{count}</p>
        </div> */}

        <div>
          <button onClick={() => handleCurrentCount(-1)}>-</button>
          <button onClick={() => handleCurrentCount(+1)}>+</button>
          <p>{count}</p>
        </div>
      </section>
    </>
  );
}

export default useStatepra;
