const root = ReactDOM.createRoot(document.getElementById("root"))

function Test() {
    const [price, setPrice] = React.useState(1)
    const [value, setValue] = React.useState(1)
    const [tax, setTax] = React.useState(50)
    const [increase, setIncrease] = React.useState(0)
    const [total, setTotal] = React.useState(1)

    React.useEffect(() => {
        const price_value = Number(value)
        const total_value = Number(price_value) + Number(increase)

        setPrice(price_value.toLocaleString("pt-BR", {style: "currency", currency:"BRL"}))
        setTotal(total_value.toLocaleString("pt-BR", {style: "currency", currency:"BRL"}))
        setIncrease(Number(price_value*tax/100))
    })

    return (
        <section id="content">  
            <h1>Calculadora de taxa</h1>
            <label htmlFor="price">Preço</label>             
            <input 
                type="range" 
                className="ranges" 
                id="price"
                onChange={(e) => setValue(e.target.value)}
                max="2000">
            </input> <br/>

            <label htmlFor="aliquote">Taxa</label>
            <input 
                type="range" 
                className="ranges" 
                id="aliquote" 
                onChange={(e) => setTax(e.target.value)}>
            </input> 

            
            <h2>Preço: <span className="values">{price}</span></h2>
            <h2>Taxa: <span className="values">{tax}%</span></h2>
            <h2>Total: <span className="values" id="total">{total}</span></h2>
        </section>
    )
}


function App() {
    return (
        <div>
            <Test/>
        </div>
    )
}

root.render(<App/>)