import './home.css';
import Banner from '../../components/banner';
import { featuresList } from '../../datas/featuresList';
import Features from '../../components/features'

function Home () {
    return (
        <main>
            <Banner />
            <section className="features">
                <h2 className='sr-only'>Features</h2>
                {featuresList.map(({id, src, alt, title, content}) => (
                    <Features key={id} src={src} alt={alt} title={title} content={content} />
                ))}
            </section>
        </main>
    )
}

export default Home;