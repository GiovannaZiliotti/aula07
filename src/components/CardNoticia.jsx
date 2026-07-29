export function CardNoticia({ noticia }) {
  return (
    <article className="card-noticia">
      <div className="card-imagem-wrapper">
        <img src={noticia.imagem} alt={noticia.alt} />
      </div>
      <div className="card-corpo">
        <div className="card-meta">
          <span>{noticia.fonte}</span>
          <time dateTime={noticia.dataIso}>{noticia.data}</time>
        </div>
        <h3 className="card-titulo">{noticia.titulo}</h3>
        <a href="#" className="card-link">Ler mais →</a>
      </div>
    </article>
  );
}
