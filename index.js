const root = ReactDOM.createRoot(document.getElementById("root"))

function Calculator() {
    const [tax, setTax] = React.useState(50)
    const [price_value, setPriceValue] = React.useState(0)
    const [visual_price, setVisualPrice] = React.useState()
    const [visual_total, setVisualTotal] = React.useState()
    const [state, dispatch] = React.useReducer(reducer, {total: 0})

    function reducer(state, action) {
        switch (action.type) {
            case "increase":
                return {total: Number(action.payload) + Number(price_value*tax/100)}
            case "decrease": 
                return {total: Number(action.payload) - Number(price_value*tax/100)}
                
            default:
                return state
        }
    }

    React.useEffect(() => {
        setVisualPrice(Number(price_value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
        setVisualTotal(Number(state.total).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
    })

    return (
        <section id="content">  
            <h1>Calculadora de taxas</h1>
            <label htmlFor="price">Preço</label>             
            <input 
                type="range" 
                className="ranges" 
                id="price"
                onChange={(e) => setPriceValue(e.target.value)}
                max="10000">
            </input> <br/>

            <label htmlFor="aliquote">Taxa</label>
            <input 
                type="range" 
                className="ranges" 
                id="aliquote" 
                onChange={(e) => setTax(e.target.value)}>
            </input> 
            
            <h2>Preço: <span className="values">{visual_price}</span></h2>
            <h2>Taxa: <span className="values">{tax}%</span></h2>
            <h2>Total: <span className="values" id="total">{visual_total}</span></h2>

            <button onClick={() => dispatch({type:"increase", payload:price_value})}>Acréscimo</button>
            <button onClick={() => dispatch({type:"decrease", payload:price_value})}>Desconto</button>
        </section>
    )
}


function App() {
    return (
        <div>
            <Calculator/>
        </div>
    )
}

root.render(<App/>)