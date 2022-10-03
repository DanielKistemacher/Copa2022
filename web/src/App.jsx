const Title = ({nome, children, ...props}) => (
  <h1>{...props}{children}</h1>
)

export function App(){
  return (
    <div className="">
      <Title>Olá mundo</Title>
    </div>
  )
}

