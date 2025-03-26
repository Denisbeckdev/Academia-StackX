import React from "react";
import Header from './components/Header';  // Corrigindo o caminho

function App() {
  return (
    <div className="App">
      <Header />  {/* Agora o Header deve ser exibido corretamente */}
      <main>
        {/* Seu conteúdo aqui */}
      </main>
    </div>
  );
}

export default App;
