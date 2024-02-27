import { useState } from "react";
import "@/App.css";
import { Input } from "@/components/Input/Input";
import { PreferencesProvider } from "./contexts/Preferences/PreferencesProvider";
import { Button } from "@/components/Button/Button";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleSignIn() {
    alert("Sign in");
  }

  return (
    <PreferencesProvider>
      <div>
        <p>Learning tutor is under construction...</p>
        <Input
          label="Label"
          placeholder="Email"
          error
          size="large"
          value={inputValue}
          handleChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <Button
        onClick={() => {
          handleSignIn();
        }}
      >
        Sign In
      </Button>
    </PreferencesProvider>
  );
}

export default App;
