import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Feeds />
      <RightBar />
    </div>
  );
}

export default App;
