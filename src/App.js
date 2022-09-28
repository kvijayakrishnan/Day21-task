import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div id='free-cart' className='free'>
      <Cart 
      price="$0"
      type = "FREE"
      per = "/month"
      user1 = "✔️ Single User"
      user2 = "✔️ 5GB Storage"
      user3 = "✔️ Unlimited Public Projects"
      user4 = "✔️ Community Access"
      user5 = "❌ Unlimited Private Projects"
      user6 = "❌ Dedicated Phone Support"
      user7 = "❌ Free Subdomain"
      user8 = "❌ Monthly Status Reports"/>
    </div>

    <div id='plus-cart' className='plus'> 
      <Cart 
      price="$9"
      type = "PLUS"
      per = "/month"
      user1 = "✔️ 5 Users"
      user2 = "✔️ 50GB Storage"
      user3 = "✔️ Unlimited Public Projects"
      user4 = "✔️ Community Access"
      user5 = "✔️ Unlimited Private Projects"
      user6 = "✔️ Dedicated Phone Support"
      user7 = "✔️ Free Subdomain"
      user8 = "❌ Monthly Status Reports"/>
    </div>

    <div id='pro-cart' className='pro'>
      <Cart 
      price="$49"
      type = "PRO"
      per = "/month"
      user1 = "✔️ Unlimited Users"
      user2 = "✔️ 150GB Storage"
      user3 = "✔️ Unlimited Public Projects"
      user4 = "✔️ Community Access"
      user5 = "✔️ Unlimited Private Projects"
      user6 = "✔️ Dedicated Phone Support"
      user7 = "✔️ Unlimited Free Subdomain"
      user8 = "✔️ Monthly Status Reports"/>
    </div>
      
    </div>
  );
}



function Cart(cartlist){
  return(
    <div className='pricing-card'>    
      <p className='type'>{cartlist.type}</p>
      <h1
       className='price-cart'>{cartlist.price} 
      <span className='per-month'>{cartlist.per}</span>
      </h1>
      <hr></hr>
      <ul className='user1'>{cartlist.user1}</ul>
      <ul className='user2'>{cartlist.user2}</ul>
      <ul className='user3'>{cartlist.user3}</ul>
      <ul className='user4'>{cartlist.user4}</ul>
      <ul className='user5'>{cartlist.user5}</ul>
      <ul className='user6'>{cartlist.user6}</ul>
      <ul className='user7'>{cartlist.user7}</ul>
      <ul className='user8'>{cartlist.user8}</ul>

      <Counter />
    </div>
  )

function Counter(){
  return(
  <div>
    <button className='button'>BUTTON</button>
  </div>
)}


}

export default App;
