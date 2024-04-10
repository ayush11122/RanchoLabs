import { Draggable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { CheckAtom, DragAtom } from "../atom/atom";
export default function CardItem(props: any) {
  const dragAtom = useRecoilValue(DragAtom);
  const checkAtom = useRecoilValue(CheckAtom);
  return (
    <Draggable draggableId={props.name} index={props.index}>
      {(provided) => (
        <div
          className={`py-2 flex flex-col justify-between ${ props.dragZone? `${ checkAtom ? ` ${props.value.includes(parseInt(props.Id)) ? `border-green-500 shadow-xl`: `border-red-500 shadow-xl`}`: `border-gray-500 shadow-xl`}` : 'border-gray-500 shadow-xl'} items-center h-40 border-2  shadow-xl rounded-lg`}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="w-fit m-auto">
            <img src={props.image} alt={props.name} className="w-7/12 m-auto" />
          </div>
          <h1 className="text-blue-700">{props.name} </h1>
        </div>
      )}
    </Draggable>
  );
}










