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
          img='../public/card-img.png'
          exp='Life lessons with Katie Zaferes'
          price='From $136'
          status='SOLD OUT'
        />
        <Card
          img='../public/card-img2.png'
          exp='Learn wedding photography'
          price='From $125'
          status='ONLINE'
        />
        <Card
          img='../public/card-img3.png'
          exp='Group mountain biking'
          price='From $50'
          status='ONLINE'
        />
      </div>
    </div>
  )
}

export default App
