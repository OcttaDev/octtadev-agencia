import { CallWithAccountUser } from "@/app/_types/call-with-account-user";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import KanbanCardItem from "./kanban-card-item";
import { Badge } from "@/app/_components/ui/badge";
import { ScrollArea } from "@/app/_components/ui/scroll-area";

const columnMap: Record<string, { label: string; color: string }> = {
  PENDING: { label: "Pendente", color: "bg-yellow-500/10 text-yellow-500" },
  IN_PROGRESS: { label: "Em Progresso", color: "bg-blue-500/10 text-blue-500" },
  FINISHED: { label: "Finalizado", color: "bg-green-500/10 text-green-500" },
  CANCELLED: { label: "Cancelado", color: "bg-red-500/10 text-red-500" },
};

export default function KanbanCardColumn({
  id,
  calls,
}: {
  id: string;
  calls: CallWithAccountUser[];
}) {
  const { setNodeRef } = useDroppable({ id });

  const columnInfo = columnMap[id] || {
    label: id,
    color: "bg-secondary text-secondary-foreground",
  };

  return (
    <div
      ref={setNodeRef}
      className="
        flex flex-col
        snap-start
        rounded-xl border border-border/40 bg-muted/40
        
        w-[85vw]
        sm:w-[70vw]
        md:w-[45vw]
        lg:w-[320px]
        xl:w-[340px]

        max-h-[calc(100dvh-220px)]
        shrink-0
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              columnInfo.color.split(" ")[1].replace("text-", "bg-")
            }`}
          />

          <h2 className="font-semibold text-sm uppercase tracking-wider truncate">
            {columnInfo.label}
          </h2>
        </div>

        <Badge variant="secondary" className="text-xs font-mono shrink-0">
          {calls.length}
        </Badge>
      </div>

      {/* CARDS */}
      <ScrollArea className="flex-1 px-3 py-3">
        <SortableContext
          items={calls.map((call) => call.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-3">
            {calls.map((call) => (
              <KanbanCardItem key={call.id} call={call} />
            ))}

            {calls.length === 0 && (
              <div className="flex items-center justify-center h-24 border-2 border-dashed rounded-lg text-xs text-muted-foreground">
                Sem chamados
              </div>
            )}
          </div>
        </SortableContext>
      </ScrollArea>
    </div>
  );
}
