export default function Product(props) {

    return (
        <div className="flex justify-center items-center py-6 px-3">
            <div className="bg-whithish p-8 border-4 border-whithish rounded-lg flex flex-col items-center">
                <div className="flex justify-around w-full flex-wrap gap-5 my-3">
                    <img src={props.image} alt={props.alt} className="rounded-md max-h-[17rem]" />
                    <div className="flex flex-col justify-around items-center max-w-md">
                        <h1 className="text-4xl font-bold my-3">{props.legenda}</h1>
                        <p className="text-2xl font-semibold">{props.price}</p>
                    </div>
                </div>
                <hr className="w-full my-3" />
                <div className="max-w-5xl self-start">
                    <h3 className="text-xl">Descrição:</h3>
                    <p className="mb-5">{props.description}</p>
                    <h3 className="text-xl">Benefícios:</h3>
                    <ul className="list-disc mb-5">
                        {props.benefits.map(element => {
                            return (<li key={element} className="ml-7">{element}</li>)
                        })}
                    </ul>
                    <h3 className="text-xl">Contraindicado à pessoas:</h3>
                    <ul className="list-disc">
                        {props.counters.length !== 0 ? props.counters.map(element => {
                            return (<li key={element} className="ml-7">{element}</li>)
                        }) : 'Nenhuma'}
                    </ul>
                </div>
            </div>
        </div>
    )
}