import { CallWithAccountUser } from "@/app/_types/call-with-account-user";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
} from "@/app/_components/ui/card";
import {  User2 } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";

export default function KanbanCardItem({ call }: { call: CallWithAccountUser }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: call.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(call.payment?.price));

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card className="cursor-grab active:cursor-grabbing hover:shadow-md transition-all border-l-4 border-l-primary/50">
        <CardContent className="p-3 space-y-2 text-xs">
          
          <p className="font-medium text-foreground line-clamp-2">
            {call.name}
          </p>

          <p className="text-muted-foreground">{formattedPrice}</p>

          <p className="text-muted-foreground">
            {new Date(call.createdAt).toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-1">
            <span className="text-muted-foreground">
              Última modificação
            </span>

            <p className="truncate">
              {new Date(call.updatedAt).toLocaleDateString("pt-BR")}
            </p>
          </div>

          {/* RESPONSÁVEL */}
          <div className="flex items-center gap-2 pt-2 border-t">
            <Avatar className="w-6 h-6 shrink-0">
              <AvatarImage src={call.account?.user.image ?? ""} />
              <AvatarFallback>
                {call?.account?.user?.name?.[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <span className="truncate">
              {call.account?.user.name}
            </span>
          </div>

          {call.attendant && (
            <div className="flex items-center gap-1 pt-2 border-t">
              <User2 className="w-3 h-3 shrink-0" />
              <span className="truncate">{call.attendant}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

