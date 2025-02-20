import { Link } from "react-router-dom"

const PokeCardPlus = ({ poke }) => {
    return (
        <article key={poke.id}>
            <img src={poke.image} alt={poke.id} />
            <h3>{poke.slug}</h3>
            <ul>
                <li>
                    <p>Génération:</p>
                    {poke.apiGeneration}
                </li>
                <li>
                    <p>Types:</p>
                    {poke.apiTypes.map((type, index) => (
                        <>
                            <Link to={`/typepoke/${type.name}`}>
                                <article key={index}>     
                                        <img src={type.image} alt={type.name} />
                                </article>
                            </Link>
                        </>
                    ))}
                </li>
                <li>
                    <p>Résistances:</p> 
                    {poke.apiResistances.map((res) =>(
                        <article key={res.name}>
                            <p>{res.name}</p>
                            <p>{res.damage_relation}</p>
                        </article>
                    ))}
                </li>
                <li> 
                    <p>Stats:</p>
                    {Object.entries(poke.stats).map(([key, value]) => (
                        <div key={key}>
                            {key}: {value}
                        </div>
                    ))}
                </li>
                <li>
                    <p>Prévolution:</p>
                    {poke.apiPreEvolution.name}
                </li>
                <li>
                    <p>Evolution:</p>
                    {poke.apiEvolutions.map((evolution) => (
                        <p>{evolution.name}</p>
                    ))}
                </li>
            </ul>                    
        </article>
    )
}

export default PokeCardPlus
