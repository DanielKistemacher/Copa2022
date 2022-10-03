const Title = ({children, ...props}) => (
  <h1>{...props}>{children}</h1>
)

export function App(){
  return (
    <div className="abg-red-500">
      <Title>Olá Mundo</Title>
    </div>
  )
}