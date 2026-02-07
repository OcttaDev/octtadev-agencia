import { useState } from "react";
import {
  DndContext,
  closestCorners,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
} from "@dnd-kit/sortable";

import CardColumn from "./kanban-card-column";
import { Call } from "@/app/generated/prisma/client";


type CallStatus = "Pendentes" | "Concluidos" | "Cancelados";
type ColumnsType = Record<CallStatus, Call[]>;

function groupCalls(calls: Call[]): ColumnsType {
  return {
    "Pendentes": calls.filter((c) => c.status === "PENDING"),
    "Concluidos": calls.filter((c) => c.status === "FINISHED"),
    "Cancelados": calls.filter((c) => c.status === "CANCELLED"),
  };
}


export default function Kanban({ calls }: { calls: Call[] }) {
    const [columns, setColumns] = useState<ColumnsType>(() =>
        groupCalls(calls)
      );
    
      function findColumn(id: string): CallStatus | undefined {
        if (columns[id as CallStatus]) return id as CallStatus;
    
        return (Object.keys(columns) as CallStatus[]).find((columnId) =>
          columns[columnId].some((card) => card.id === id)
        );
      }
    
      function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;
    
        const sourceColumn = findColumn(active.id as string);
        const targetColumn = findColumn(over.id as string);
    
        if (!sourceColumn || !targetColumn) return;
    
        const activeIndex = columns[sourceColumn].findIndex(
          (card) => card.id === active.id
        );
    
        const overIndex = columns[targetColumn].findIndex(
          (card) => card.id === over.id
        );
    
        if (sourceColumn === targetColumn) {
          const reordered = arrayMove(
            columns[sourceColumn],
            activeIndex,
            overIndex
          );
    
          setColumns((prev) => ({
            ...prev,
            [sourceColumn]: reordered,
          }));
    
          return;
        }
        const movedCard = columns[sourceColumn][activeIndex];
    
        setColumns((prev) => ({
          ...prev,
          [sourceColumn]: prev[sourceColumn].filter(
            (card) => card.id !== active.id
          ),
          [targetColumn]: [...prev[targetColumn], movedCard],
        }));
      }
    
  return (
   <main className="flex gap-6">
         <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
           {(Object.keys(columns) as CallStatus[]).map((columnId) => (
             <CardColumn key={columnId} id={columnId} cards={columns[columnId]} />
           ))}
         </DndContext>
       </main>
  );
}