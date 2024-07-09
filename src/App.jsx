import HelloWorld from "./HelloWorld";
import ProfileCard from "./ProfileCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Day 2</h1>
      <p>
        Build a profile card with your name, photo, and a brief description.
      </p>
      <div className="profile-card-component">
        <ProfileCard />
      </div>
    </div>
  );
}
