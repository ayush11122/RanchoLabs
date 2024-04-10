import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { DragAtom } from "../atom/atom";

export default function DragElement() {
  const dragAtom = useRecoilValue(DragAtom);
  return (
    <Droppable droppableId="DragElement">
      {(provided) => (
        <div
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:w-4/12 w-3/12 rounded-2xl border-2 border-gray-200 mt-16 p-6  gap-4 shadow-xl "
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {dragAtom.map((card: any, index: any) => (
            <Card
              key={index}
              index={index}
              name={card.name}
              image={card.imageUrl}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
