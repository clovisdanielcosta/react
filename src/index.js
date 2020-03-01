import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

function primeiroJSX() {
    return (
        <div>
            Clovis Daniel Costa <br />
            Aprendendo ReactJs
        </div> 
        )    
}

const myName = "Marcia"
const myLastName = "Costa"

function sum(a, b) {
    alert(a + b) 
}

function App() {

    return (
        <div className="App">
        Hello World
        {primeiroJSX()}
        <h1 className="teste">Minha soma: { sum(29, 45)}</h1>
        {myName + " " + myLastName}
        <span> </span>
        <Button onClick={() => sum(37,96)} name="Luísa Baggio Costa" />
        <ComponentA>
            <ComponentB>
            <Button onClick={() => sum(37,96)} name="Mozes Luna Nini" />         
            </ComponentB>
        </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
