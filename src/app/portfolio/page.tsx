import Portfolio from '../components/Portfolio'
export default function PortfolioPage() {
  return (
    <div>
      <h1 className="font-sans mt-10 text-5xl bold">My portfolio</h1>
      <br></br>
      <Portfolio
        about={'I know:'}
        listElement1={'Java'}
        listElement2={'Python'}
        listElement3={'C'}
        listElement4={'C++'}
      />
      <br />
      <Portfolio
        about={"Currenty I'm studying:"}
        listElement1={'HTML'}
        listElement2={'CSS'}
        listElement3={'JavaScript'}
        listElement4={'TypeScript'}
      />
    </div>
  )
}
