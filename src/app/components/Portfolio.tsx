interface PortfolioProps {
  about: string
  listElement1: string
  listElement2: string
  listElement3: string
  listElement4: string
}
export default function Portfolio(props: PortfolioProps) {
  return (
    <div className="@apply w-[860px] p-[25px] border-4 border-solid border-amber-400 text-xl">
      {props.about}
      <ol className="list-decimal ml-12">
        <li>{props.listElement1}</li>
        <li>{props.listElement2}</li>
        <li>{props.listElement3}</li>
        <li>{props.listElement4}</li>
      </ol>
    </div>
  )
}
