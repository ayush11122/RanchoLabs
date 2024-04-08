import '../index.css'
import CardItem from './CardItem'
import { useState } from 'react'
import { models } from '../models/models';
export default function DragElement(){
    const [card, setCard] = useState(models);
    return <div className="rounded-2xl w-4/12 mt-16 p-6 grid grid-cols-3 gap-4" style={{ boxShadow: "0px 2.51px 10.65px 0px #4A55EA4D" }}>
        {card.map((card)=>(
            <CardItem 
            name={card.name}
            image={card.imageUrl}
            />
        ))}
        </div>
}