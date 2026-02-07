import { Call } from "@/app/generated/prisma/client";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import CardItem from "./kanban-card-item";

export default function CardColumn({
  id,
  cards,
}: {
  id: string;
  cards: Call[];
}) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="w-72 bg-muted p-4 rounded-xl min-h-[300px]"
    >
      <h2 className="font-semibold mb-4 capitalize">{id}</h2>

      <SortableContext
        items={cards.map((card) => card.id)}
        strategy={verticalListSortingStrategy}
      >
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </SortableContext>
    </div>
  );
}