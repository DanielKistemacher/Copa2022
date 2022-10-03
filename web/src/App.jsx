const Title =({ children, ...props }) => (
  <h1 {...props}>{children}</h1>
)

export function App(){
  return (
    <div className="bg-red-500">
      <Title>Olá Mundo</Title>
      <Title>Olá Mundo 2</Title>
      <Title>Olá Mundo 3</Title>
    </div>
  )
}