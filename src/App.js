
import './App.css';
import Profile from "./Profile/Components/Profile";
import picture from "./cuty.png"

function App() {
  return (
    <div className="App">
      <Profile 
      fullName="Ben jeddou Fatma"
      bio="Hey, I'am Fatma a tunisian girl I'am a student on GO MY CODE"
      >
        <img src={picture} alt="profile"></img>
        </Profile>
    </div>
  );
}

export default App;
