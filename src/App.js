import Button from "./components/buttons";
import {
    AiFillEdit,
    AiTwotoneRocket,
    AiTwotoneCrown,
    AiFillWarning,
    AiFillAlert,
} from "react-icons/ai";

function App() {

    function handleClick () {
        console.log("Click Me")
    }
    return (
        <div className="flex mx-20">
            <div className="flex-1">
                <div>
                    <Button primary onClick={handleClick} className="mb-5">
                        <AiFillEdit />Primary</Button>
                </div>
                <div>
                    <Button secondary outline onMouseEnter={handleClick}>
                        <AiTwotoneRocket />Secondary</Button>
                </div>
                <div>
                    <Button success rounded onMouseLeave={handleClick}>
                        <AiTwotoneCrown />Success</Button>
                </div>
                <div>
                    <Button warning outline rounded>
                        <AiFillWarning />Warning</Button>
                </div>
                <div>
                    <Button danger outline>
                        <AiFillAlert />Danger</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
