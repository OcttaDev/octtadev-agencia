"use client";

import { Call } from "@/app/generated/prisma/client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Input } from "@/app/_components/ui/input";
import { useState } from "react";
import { Search, Table2, ListFilter, SquareDashedKanban } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

export default function OpenCalls({ calls }: { calls: Call[] }) {
  const [filter, setFilter] = useState("");

  return (
    <main className="flex flex-col space-y-6">
      <Tabs defaultValue="kanban" className="w-full">
        <section className="flex flex-col gap-6 w-full">
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border/40 pb-6 w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-foreground text-2xl tracking-tight">
                Chamados Recentes
              </h1>
              <p className="text-sm text-muted-foreground">
                Gerencie e acompanhe todos os chamados em aberto
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, protocolo..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-9 bg-background/50 border-border/50 focus:bg-background transition-colors"
                />
              </div>
              
              {/* ADICIONAR FILTRO DE STATUS COM O POPOVER */}
              <Button variant="outline" size="icon" className="hidden lg:flex shrink-0 border-border/50 text-muted-foreground hover:text-foreground">
                <ListFilter className="h-4 w-4" /> 
              </Button>

              <TabsList className="bg-muted/50 p-1 border border-border/50 h-10">
                <TabsTrigger value="kanban" className="px-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <SquareDashedKanban className="h-4 w-4 mr-2" />
                  Kanban
                </TabsTrigger>
                <TabsTrigger value="table" className="px-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <Table2 className="h-4 w-4 mr-2" />
                  Tabela
                </TabsTrigger>
              </TabsList>
            </div>
          </header>
          
          <div className="bg-background/50 rounded-lg border border-border/40 p-1">
            <TabsContent value="kanban" className="m-0 p-4">
              <div className="flex items-center justify-center h-64 text-muted-foreground border-2 border-dashed rounded-md">
                Kanban View (Em construção)
              </div>
            </TabsContent>
            <TabsContent value="table" className="m-0 p-4">
              <div className="flex items-center justify-center h-64 text-muted-foreground border-2 border-dashed rounded-md">
                Tabela View (Em construção)
              </div>
            </TabsContent>
          </div>
        </section>
      </Tabs>
    </main>
  );
}
