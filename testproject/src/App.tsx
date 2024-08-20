// CSS File
import "./scss/app.css";

// tsx file import
import UseStatepra from "./useStatePra.tsx";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// -------------------------------------

function Main() {
  // -return で id="root"の場所を書いている ------------------
  return (
    <>
      <article>
        {/* useStateの内容 */}
        <UseStatepra />
      </article>
    </>
  );
}

export default Main;
