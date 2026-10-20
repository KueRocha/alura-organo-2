
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <img src="/imagens/facebook.png" alt="link do Facebook" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src="/imagens/twitter.png" alt="link do Twitter" />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src="/imagens/instagram.png" alt="link do Instagram" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Cauê Rocha e Alura.
        </p>
       </section>
    </footer>)
}

export default Rodape