import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <div className='card_section'>
        <Card
          img='card-img.png'
          exp='Life lessons with Katie Zaferes'
          price='136'
          status='SOLD OUT'
          rating={5.0}
          count={6}
          country='USA'
        />
        <Card
          img='card-img2.png'
          exp='Learn wedding photography'
          price='125'
          status='ONLINE'
          rating={4.5}
          count={10}
          country='Yemen'
        />
        <Card
          img='card-img3.png'
          exp='Group mountain biking'
          price='50'
          status='ONLINE'
          rating={3.6}
          count={3}
          country='Italy'
        />
      </div>
    </div>
  )
}

export default App
