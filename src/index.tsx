import "bulmaswatch/darkly/bulmaswatch.min.css";
import CodeCell from "./components/code-cell";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
