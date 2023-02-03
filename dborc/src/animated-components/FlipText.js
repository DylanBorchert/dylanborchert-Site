
import './FlipText.css';

const FlipText = (props) => {

 return (
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                {props.text1 ? props.text1 : 'testtext'}
            </div>
            <div class="flip-box-back">
                {props.text2 ? props.text2 : 'testtext'}
            </div>
        </div>
    </div>
 );
}


export default FlipText;