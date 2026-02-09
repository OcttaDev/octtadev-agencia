"use client";

import { CallWithAccountUser } from "@/app/_types/call-with-account-user";
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
import Kanban from "./kanban";

export default function OpenCalls({ calls }: { calls: CallWithAccountUser[] }) {
  const [filter, setFilter] = useState("");

  return (  
    <main className="flex flex-col space-y-6">
      <Tabs defaultValue="kanban" className="w-full">
        <section className="flex flex-col gap-6 w-full">
          <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-border/40 pb-6 w-full">
            <div className="flex flex-col gap-1 w-full lg:w-auto">
              <h1 className="font-bold text-foreground text-2xl tracking-tight">
                Chamados Recentes
              </h1>
              <p className="text-sm text-muted-foreground">
                Gerencie e acompanhe todos os chamados em aberto
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto lg:w-80 flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, protocolo..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-9 bg-background/50 border-border/50 focus:bg-background transition-colors w-full"
                />
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button variant="outline" size="icon" className="hidden sm:flex shrink-0 border-border/50 text-muted-foreground hover:text-foreground">
                  <ListFilter className="h-4 w-4" /> 
                </Button>

                <TabsList className="bg-muted/50 p-1 border border-border/50 h-10 w-full sm:w-auto grid grid-cols-2 sm:flex">
                  <TabsTrigger value="kanban" className="px-3 data-[state=active]:bg-background data-[state=active]:shadow-sm justify-center">
                    <SquareDashedKanban className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Kanban</span>
                  </TabsTrigger>
                  <TabsTrigger value="table" className="px-3 data-[state=active]:bg-background data-[state=active]:shadow-sm justify-center">
                    <Table2 className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Tabela</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </header>
          
          <div className="bg-background/50 rounded-lg border border-border/40 p-1">
            <TabsContent value="kanban" className="m-0 p-0">
              <div className="h-full w-full relative">
                <Kanban calls={calls} />
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
