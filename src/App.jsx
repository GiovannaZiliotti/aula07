import './App.css';
import { listaNoticias } from './data/noticias';
import { CardNoticia } from './components/CardNoticia';

function App() {
  return (
    <>
      <header className="cabecalho">
        <div className="cabecalho-container">
          <a href="#" className="logo">
            🛒 <span>VarejoNews</span>
          </a>
          <nav className="menu-navegacao">
            <ul>
              <li><a href="#commodities">Commodities</a></li>
              <li><a href="#mercearia">Mercearia</a></li>
              <li><a href="#laticinios">Laticínios</a></li>
              <li><a href="#hortifruti">Hortifrúti</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-container">
            <div className="hero-conteudo">
              <h1>O Futuro do Varejo Alimentar</h1>
              <p>Tudo sobre supermercados, atacarejos, consumo e inovação na indústria de alimentos.</p>
            </div>
            <aside className="hero-imagem">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" 
                alt="Supermercado moderno" 
              />
            </aside>
          </div>
        </section>  

        <section className="sobre">
          <div className="sobre-container">
            <h2>Quem Somos</h2>
            <p>O Varejo Alimentar News reúne informações sobre supermercados, atacarejos, indústria de alimentos, consumo, inflação, preços de commodities, inovação e comportamento do mercado.</p>
          </div><section className="recursos">
  <div className="recursos-container">
    <h2>Por que acompanhar o Varejo News?</h2>
    <div className="recursos-grid">
      <div className="recurso-card">
        <span className="recurso-icone">⚡</span>
        <h3>Atualização em Tempo Real</h3>
        <p>Receba em primeira mão os principais indicadores de preços, commodities e movimentos do mercado supermercadista.</p>
      </div>

      <div className="recurso-card">
        <span className="recurso-icone">📊</span>
        <h3>Análises de Impacto</h3>
        <p>Entenda como a inflação, logística e tendências de consumo afetam diretamente a margem do seu negócio.</p>
      </div>

      <div className="recurso-card">
        <span className="recurso-icone">📱</span>
        <h3>Layout 100% Responsivo</h3>
        <p>Acesse com máxima performance de qualquer dispositivo, seja no computador, tablet ou smartphone.</p>
      </div>
    </div>
  </div>
</section>
        </section>

        <section className="noticias">
          <h2>Últimas Notícias do Setor</h2>
          <div className="cards-container">
            {/* O .map percorre a lista e gera um CardNoticia para cada item */}
            {listaNoticias.map((item) => (
              <CardNoticia key={item.id} noticia={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-container">
          <section className="rodape-contato">
            <h3>Fale Conosco</h3>
            <p>E-mail: contato@varejoalimentarnews.com.br</p>
            <p>Telefone: (11) 98765-4321</p>
          </section>
          <section className="rodape-social">
            <h3>Siga-nos</h3>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </section>
        </div>
        <div className="rodape-creditos">
          <p>&copy; 2026 Varejo Alimentar News. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
