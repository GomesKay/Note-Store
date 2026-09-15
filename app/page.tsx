export default function Home() {
  return (
    <div className="ctn">
      <header className="flex items-center justify-between">
        <h2>NoteStore</h2>

        <input type="search" />

        <button type="button">Carrinho</button>
      </header>
      <main>
        <section>
          <h1 className="font-sans">Notebooks de ponta para todos</h1>

          <p>
            Encontre o notebook perfeito para trabalho, jogos ou criação de
            conteudo. Frete gratis para todo Brasil e parcelamento em ate 12x.
          </p>
        </section>

        <section>Todos os Notebooks</section>
      </main>
      <footer>
        <p>&copy; NoteStore. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
