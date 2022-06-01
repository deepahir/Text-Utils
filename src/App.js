
import { useState } from 'react';
import './App.css';
import Alert from './Componants/Alert';
import Navbar from './Componants/Navbar';
import Textform from './Componants/Textform';

function App() {
  const[mode,setMode]= useState("light");
  const toggleMode = () =>
  {
      if(mode === "light")
      {
        setMode("dark");
        document.body.style.backgroundColor ="#042743";
        showAlert("Dark mode is anable","success");
      }
      else
      {
        setMode("light");
        document.body.style.backgroundColor ="white";
        showAlert("Light mode is anable","success");

      }
  }
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) =>
  {
    setAlert({
      msg:message,
      type:type
     })
     setTimeout(() =>
       {
         setAlert(null);
       }
     ,1500);
  };

  

  return (
    <>
 
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
          <Textform title="Try Textutils- Word Counter" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
