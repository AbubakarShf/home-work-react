import React from "react"
import CounterClass from "../../components/CounterClass/CounterClass"
import CounterFunc from "../../components/CounterFunc/CounterFunc"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <section className='container'>
        <CounterClass Value={0} />
        <CounterFunc Value={0} />
      </section>
      <Footer />
    </div>
  )
}

export default Home
