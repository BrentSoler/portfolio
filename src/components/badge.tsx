export default function Badge({ title }: { title: string }) {
  return (
    <div className="border-black border-[1px] px-3 rounded-xl mono text-[12px] flex flex-col font-bold">
      <h1>{title}</h1>
    </div>
  );
}
