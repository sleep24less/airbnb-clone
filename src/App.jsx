import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {

  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        exp={item.title}
        price={item.price}
        status='SOLD OUT'
        rating={item.stats.rating}
        count={item.stats.reviewCount}
        country={item.location}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <div className='card_section'>
        {cards}
      </div>
    </div>
  )
}

export default App
