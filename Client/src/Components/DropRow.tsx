import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { ImageModel } from "../model/models";
import Card from "./Card";
export default function DropRow(props: any) {
  const atom: ImageModel[] = useRecoilValue(props.atom);
  // console.log("herer value",atom)
  return (
    <>
      <div
        className={`p-3 my-2 min-h-44 rounded-xl bg-white flex items-center gap-3 shadow-slate-400 shadow-md border-2 border-slate-200`}
      >
        <div className="xl:w-1/5  lg:text-md text-center bg-blue-600 text-white xl:px-4 xl:py-2 md:text-md sm:text-sm text-xs px-2 py-1 rounded-lg">
          {props.title}
        </div>

        <Droppable droppableId={props.title}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="w-full grid grid-cols-3 gap-4"
            >
              {atom.map((card: any, index: number) => (
                <Card key={index} 
                index={index}
                Id={card.id}
                name={card.name}
                 image={card.imageUrl} 
                 value={props.value} 
                 dragZone />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}
