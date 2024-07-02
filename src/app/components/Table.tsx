interface TableProps {
  heading: string
  inside: string
}

export default function Table(props: TableProps) {
  return (
    <div className="font-sans mt-10">
      <header className="text-5xl bold">
        <h1>{props.heading}</h1>
      </header>
      <br></br>
      <main className="@apply w-[860px] p-[25px] rounded-[15px] border-r-[10px] border-b-[10px] border-2 border-solid border-amber-400 text-xl">
        <p>{props.inside}</p>
      </main>
    </div>
  )
}
