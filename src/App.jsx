function App() {

  const pageStyle = {
    fontFamily: "Arial",
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg,#b46a2c,#f5d6a0)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
    maxWidth: "900px"
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "220px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center"
  };

  return (
    <div style={pageStyle}>
      <h1 style={{fontSize:"3rem"}}>🍮 Mundo do Doce de Leite</h1>

      <p style={{fontSize:"1.2rem"}}>
        Um pequeno site dedicado ao doce mais amado do Brasil.
      </p>

      <div style={cardContainer}>

        <div style={cardStyle}>
          <h2>🥄 Puro</h2>
          <p>Às vezes a melhor forma de comer doce de leite é direto da colher.</p>
        </div>

        <div style={cardStyle}>
          <h2>🍰 Sobremesas</h2>
          <p>Perfeito para bolos, churros, tortas e diversas sobremesas.</p>
        </div>

        <div style={cardStyle}>
          <h2>☕ Café</h2>
          <p>Combina perfeitamente com pão, biscoito e um bom café.</p>
        </div>

      </div>

      <div style={{marginTop:"50px", fontWeight:"bold"}}>
        Projeto React rodando na AWS ☁️
      </div>

    </div>
  );
}

export default App;
