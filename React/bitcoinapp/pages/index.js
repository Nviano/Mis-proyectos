import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <MasterPage>

        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-7">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <Noticias
                    noticias= {props.noticias}
                />
            </div>
            <div className="col-md-5">
                <h2 className="my-4">Proximos Eventos Bitcoin</h2>
                <Eventos 
                    eventos={props.eventos}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {

    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');

    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=1d7ae4382250415aa74a19a97cd87880&language=es');

    const eventos= await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Espa%C3%B1a&token=DH7QQ7YY6ZAOZXTLNVYF');

    const resEventos= await eventos.json();
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();

    return {
        precioBitcoin:resPrecio.data.quotes.USD,
        noticias: resNoticias.articles,
        eventos: resEventos.events
    }
}

export default Index;