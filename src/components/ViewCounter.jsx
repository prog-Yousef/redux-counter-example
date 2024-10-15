import { useSelector } from "react-redux";  


function ViewCounter() {
    const counter = useSelector((state) => {
        return state.counter // Hämtar värdet från vår store, i detta fall counter. Är reaktiv och hämtar nytt värde varje gång din store uppdateras
    });

    sessionStorage.setItem('counter', counter);

    return <h2> Räknaren är: {counter}</h2>;
}

export default ViewCounter;