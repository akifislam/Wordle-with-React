import './App.css';
import LetterBox from "./components/LetterBox";

let word;
function App() {
    return (
        <div className="main">

            <div className="letters">
                <LetterBox className="cell11" lettervalue="A"/>
                <LetterBox className="cell12" lettervalue="A"/>
                <LetterBox className="cell13" lettervalue="A"/>
                <LetterBox className="cell14" lettervalue="A"/>
                <LetterBox className="cell15" lettervalue="A"/>

                <LetterBox className="cell21" lettervalue="A"/>
                <LetterBox className="cell22" lettervalue="A"/>
                <LetterBox className="cell23" lettervalue="A"/>
                <LetterBox className="cell24" lettervalue="A"/>
                <LetterBox className="cell25" lettervalue="A"/>

                <LetterBox className="cell31" lettervalue="A"/>
                <LetterBox className="cell32" lettervalue="A"/>
                <LetterBox className="cell33" lettervalue="A"/>
                <LetterBox className="cell34" lettervalue="A"/>
                <LetterBox className="cell35" lettervalue="A"/>

                <LetterBox className="cell41" lettervalue="A"/>
                <LetterBox className="cell42" lettervalue="A"/>
                <LetterBox className="cell43" lettervalue="A"/>
                <LetterBox className="cell44" lettervalue="A"/>
                <LetterBox className="cell45" lettervalue="A"/>

                <LetterBox className="cell51" lettervalue="A"/>
                <LetterBox className="cell52" lettervalue="A"/>
                <LetterBox className="cell53" lettervalue="A"/>
                <LetterBox className="cell54" lettervalue="A"/>
                <LetterBox className="cell55" lettervalue="A"/>
            </div>

            <div className="word-input">
                <form>
                    <label>Enter Your Guess </label>
                    <input id="input-field"  type="text"></input>
                    <button id="submit-button" type="submit" onClick={updateWord}>Submit</button>
                </form>
            </div>
        </div>
    );
}

function updateWord(e){
    e.preventDefault();
    word = document.getElementById("input-field").value;
    console.log(word);
    changeRowbyNewWord();
}

function changeRowbyNewWord(){
    let x = document.getElementsByClassName("cell11");
}
export default App;
