import { format } from "date-fns";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="clock">
        <p className="time">
          {format(new Date(), "MMMM do, yyyy h:mm:ss a")}
        </p>
      </div>
    </div>
  );
}

export default App;
