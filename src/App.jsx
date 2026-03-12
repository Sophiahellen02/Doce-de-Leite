import './App.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fdf6e9',
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#8B4513',
          fontSize: '3rem',
          marginBottom: '2rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          Mundo do Doce de Leite
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#4a3729',
          marginBottom: '3rem',
          fontStyle: 'italic'
        }}>
          Um pequeno site dedicado ao doce mais amado do Brasil.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {/* Card Puro */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '1rem' }}>Puro</h2>
            <p style={{ color: '#666' }}>
              Às vezes a melhor forma de comer doce de leite é direto da colher.
            </p>
          </div>

          {/* Card Sobremesas */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '1rem' }}>Sobremesas</h2>
            <p style={{ color: '#666' }}>
              Perfeito para bolos, churros, tortas e diversas sobremesas.
            </p>
          </div>

          {/* Card Café */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '1rem' }}>Café</h2>
            <p style={{ color: '#666' }}>
              Combina perfeitamente com pão, biscoito e um bom café.
            </p>
          </div>
        </div>

        <footer style={{
          marginTop: '3rem',
          color: '#8B4513',
          fontSize: '0.9rem'
        }}>
          Projeto React rodando na AWS
        </footer>
      </div>
    </div>
  )
}

export default App
