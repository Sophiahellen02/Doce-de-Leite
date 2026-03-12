import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Mundo do Doce de Leite</h1>
      <p className="subtitle">Um pequeno site dedicado ao doce mais amado do Brasil.</p>
      
      <div className="cards-grid">
        <div className="card">
          <h2>Puro</h2>
          <p>Às vezes a melhor forma de comer doce de leite é direto da colher.</p>
        </div>
        
        <div className="card">
          <h2>Sobremesas</h2>
          <p>Perfeito para bolos, churros, tortas e diversas sobremesas.</p>
        </div>
        
        <div className="card">
          <h2>Café</h2>
          <p>Combina perfeitamente com pão, biscoito e um bom café.</p>
        </div>
      </div>
      
      <footer>
        Projeto React rodando na AWS
      </footer>
    </div>
  )
}

export default App