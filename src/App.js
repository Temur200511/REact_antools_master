import Header from "./components/Header/header";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Main from "./components/Main/Main";
import Main2 from "./components/Main2/Main2";
import Cards from "./components/Cards/Card";
import Button2 from "./components/Button2/Button";
import Back from "./components/Backdrop/Back";
import Main3 from "./components/Main3/Main3";
import Main4 from "./components/Main4/Main4";
import Last from "./components/Last/Last";
import Input2 from "./components/Input2/Input2";




function App() {

  return (
    <div className="App container">
        <Header/>
        <Main />
        <Main2 />
        <div className="cards">
            <Cards title="FIGMA" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Cards title="ADOBE XD" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Cards title="INVISION" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Cards title="SKETCH" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Cards title="BALSAMIQ" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Cards title="INVISION" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
        <Button2/>
        <Back/>
        <Main3/>
        <Main4/>
        <Last />  
    </div>
  );
}

export default App;

