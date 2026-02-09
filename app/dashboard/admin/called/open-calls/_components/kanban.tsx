import { useState } from "react";
import { DndContext, closestCorners, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import KanbanCardColumn from "./kanban-card-column";
import { CallWithAccountUser } from "@/app/_types/call-with-account-user";

type CallStatus = "Pendentes" | "Concluidos" | "Cancelados";
type ColumnsType = Record<CallStatus, CallWithAccountUser[]>;

function groupCalls(calls: CallWithAccountUser[]): ColumnsType {
  return {
    Pendentes: calls.filter((c) => c.status === "PENDING"),
    Concluidos: calls.filter((c) => c.status === "FINISHED"),
    Cancelados: calls.filter((c) => c.status === "CANCELLED"),
  };
}

export default function Kanban({ calls }: { calls: CallWithAccountUser[] }) {
  const [columns, setColumns] = useState<ColumnsType>(() => groupCalls(calls));

  function findColumn(id: string): CallStatus | undefined {
    if (columns[id as CallStatus]) return id as CallStatus;

    return (Object.keys(columns) as CallStatus[]).find((columnId) =>
      columns[columnId].some((card) => card.id === id),
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = findColumn(active.id as string);
    const targetColumn = findColumn(over.id as string);

    if (!sourceColumn || !targetColumn) return;

    const activeIndex = columns[sourceColumn].findIndex(
      (card) => card.id === active.id,
    );

    const overIndex = columns[targetColumn].findIndex(
      (card) => card.id === over.id,
    );

    if (sourceColumn === targetColumn) {
      setColumns((prev) => ({
        ...prev,
        [sourceColumn]: arrayMove(prev[sourceColumn], activeIndex, overIndex),
      }));
      return;
    }

    const movedCard = columns[sourceColumn][activeIndex];

    setColumns((prev) => ({
      ...prev,
      [sourceColumn]: prev[sourceColumn].filter(
        (card) => card.id !== active.id,
      ),
      [targetColumn]: [...prev[targetColumn], movedCard],
    }));
  }

  return (
    <main className="w-full h-[calc(100dvh-160px)] overflow-hidden @container">
      <div className="w-full h-full overflow-x-auto overflow-y-hidden">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <div className="flex gap-4 px-4 pb-4 w-max">
            {(Object.keys(columns) as CallStatus[]).map((columnId) => (
              <KanbanCardColumn
                key={columnId}
                id={columnId}
                calls={columns[columnId]}
              />
            ))}
          </div>
        </DndContext>
      </div>
    </main>
  );
}

