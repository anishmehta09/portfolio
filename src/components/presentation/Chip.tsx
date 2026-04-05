export default function Chip({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 text-sm rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
      {label}
    </span>
  );
}
