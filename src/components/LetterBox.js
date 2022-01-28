import './LetterBox.css';
function LetterBox(props) {

    return (
        <div>
            <h1 className="letterbox"> {props.lettervalue} </h1>
        </div>
    );
}

export default LetterBox;
