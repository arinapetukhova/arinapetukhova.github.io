interface ContactProps {
  action: string
  text: string
}
export default function Contact(props: ContactProps) {
  return (
    <form action={props.action}>
      <button
        id="from"
        className="@apply text-[black] h-[50px] w-[130px] bg-[white] duration-[0.4s] mb-[15px] rounded-lg border-2 border-solid border-amber-400 hover:bg-amber-400 hover:text-[white] hover:border-2 hover:border-solid hover:border-amber-400 font-semibold"
      >
        {props.text}
      </button>
    </form>
  )
}
