import ButtonBar from "../Components/ButtonBar";
import DragElement from "../Components/DragElement";
import DropElement from "../Components/DropElement";


export default function MainPage(){
    return <>
        <div className="flex mb-10 justify-evenly">
        <DropElement />
        <DragElement />        
        </div>
        <ButtonBar /> 
    </>
}