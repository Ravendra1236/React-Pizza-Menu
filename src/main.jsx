import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}



function Menu() {
  const pizzas = pizzaData ;
  // Due to re-render in case of empty array 
  // const pizzas = []
  const pizzaLength = pizzas.length ;
  // return (
  //   <main className="menu">
  //     <h2>Our Menu</h2>

  //     {pizzaLength > 0 && (
  //       <ul className="pizzas">
  //         {pizzas.map((pizza) => (
  //           <Pizza pizzaObj={pizza} key={pizza.name} />
  //         ))}
  //       </ul>
  //     )}
  //   </main>
  // );

  // Ternary Operator
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaLength > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from.All are
            from stone oven, all organic, all delicious.{" "}
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our Menu. Please revisit again later :)</p>
      )}
    </main>
  );
} 
function Pizza({ pizzaObj }) {

  // if(pizzaObj.soldOut) return null ;
  
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3> 
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Header(){
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}



function Footer(){
  const hour = new Date().getHours();
  const openHour = 10 ; 
  const closeHour = 22 ;
  const isOpen = hour>= openHour && hour <= closeHour 
  

  // if(hour >= openHour && hour <= closeHour) {
  //   alert("We are currently Open")
  // }else{
  //   alert("Sorry We are closed.")
  // }

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} */}
      {/* {isOpen && (
        <div className="order">
          <p>We are open till {closeHour}:00 Visit us or order online.</p>
          <button className='btn'>Order Now</button>
        </div>
      )} */}

      {isOpen ? (
       <Order closeHour={closeHour}/>
      ) : <p>We are open between {openHour}:00 and {closeHour}:00</p>}
    </footer>
  );
} 

function Order({closeHour}){
  return  <div className="order">
          <p>We are open till {closeHour}:00 Visit us or order online.</p>
          <button className="btn">Order Now</button>
        </div>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
