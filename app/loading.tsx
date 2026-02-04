"use client";

import React from "react";


function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-md bg-muted
        before:absolute before:inset-0
        before:animate-shimmer
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/10
        before:to-transparent
        ${className}
      `}
    />
  );
}


function SkeletonHeader() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-72" />
    </div>
  );
}

function SkeletonCard({ height = "h-40" }: { height?: string }) {
  return <Skeleton className={`${height} w-full rounded-xl`} />;
}

function SkeletonList({ items = 4 }: { items?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: items }).map((_, i) => (
        <Skeleton key={i} className="h-20 w-full rounded-lg" />
      ))}
    </div>
  );
}

function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      <Skeleton className="h-10 w-full" />

      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
}

function SkeletonForm({ fields = 4 }: { fields?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: fields }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </div>
  );
}

function SkeletonSidebar({ items = 6 }: { items?: number }) {
  return (
    <aside className="hidden sm:flex w-64 border-r p-4 flex-col gap-6">
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-lg" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: items }).map((_, i) => (
          <Skeleton key={i} className="h-9 rounded-md" />
        ))}
      </div>
    </aside>
  );
}


function LoadingLayout({
  children,
  withSidebar = false,
}: {
  children: React.ReactNode;
  withSidebar?: boolean;
}) {
  return (
    <div className="flex min-h-screen w-full animate-fadeIn">
      {withSidebar && <SkeletonSidebar />}

      <main className="flex-1 p-6 flex flex-col gap-6">{children}</main>
    </div>
  );
}


export default function Loading() {
  return (
    <LoadingLayout withSidebar>
      <SkeletonHeader />

      <div className="grid md:grid-cols-3 gap-4">
        <SkeletonCard height="h-28" />
        <SkeletonCard height="h-28" />
        <SkeletonCard height="h-28" />
      </div>

      <SkeletonCard height="h-56" />

      <SkeletonList />
    </LoadingLayout>
  );
}


export {
  Skeleton,
  SkeletonHeader,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
  SkeletonForm,
  SkeletonSidebar,
  LoadingLayout,
};
