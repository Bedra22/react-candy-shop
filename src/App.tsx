
import { useState } from 'react'
import './App.css'
function App() {

  const [candy, setCandy] = useState([
    {
      image: "https://images.pexels.com/photos/55825/gold-bear-gummi-bears-bear-yellow-55825.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "3.25",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/208006/pexels-photo-208006.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "4.67",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "2.99",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "7.02",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/5477983/pexels-photo-5477983.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: "5.45",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/2350388/pexels-photo-2350388.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "9.34",
      inCart: 0
    },
    {
      image: "https://media.istockphoto.com/photos/assorted-variety-of-sour-candies-includes-extreme-sour-soft-fruit-picture-id1130170786?k=20&m=1130170786&s=612x612&w=0&h=GGJAXrA7_cIYjBGHIp8UmsZ9hglHwFQn3a-xiVhPHIs=",
      price: "10.00",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/4202999/pexels-photo-4202999.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "4.25",
      inCart: 0
    },
    {
      image: "https://images.pexels.com/photos/4475282/pexels-photo-4475282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: "6.73",
      inCart: 0
    }
  ])
  const [review, setReview] = useState([])



  return (
    <div className="App">
      <div className='header'>
        <ul className='header-ul'>
          <li className='header-li'>Home</li>
          <li className='header-li'>About us</li>
          <li className='header-li'>Brands</li>
          <li className='header-li'>Cart</li>
        </ul>

      </div>

      <h1>🍬🍭Candy Shop🍭🍬</h1>

      <div className='candy-container'>

        <ul className='candy-Ul'>
          {
            candy.map(item => (
              <div className='candy-cart'>
                <li className='candy-list'>
                  <img src={item.image} />
                  <div className='put-it-in-cart'>
                    <h3>${item.price}</h3>
                    <button>   🛒</button>
                  </div>
                </li>
              </div>
            ))}
        </ul>
      </div>

      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-container-left'>
            <h1>Contact us</h1>
            <div className='footer-contact-us'>
              <ul>
                <li>candyshop@gmail.com</li>
                <li>360-280-4503</li>
              </ul>
            </div>
            <div className='work-hours'>
              <h3>Working hours</h3>
              <ul>
                <li>Mon:  7am : 4pm</li>
                <li>Tues - Fri:  7am - 9pm</li>
                <li>Sat:  8am - 9pm</li>
                <li>Sun:  8am - 4pm</li>
              </ul>
            </div>
          </div>
          <div className='footer-container-right' >
            <h2>Please leave a review 👇</h2>
            <form onSubmit={event => {
              event.preventDefault()

              let answer = {
                review: event.target.text.value,
                email: event.target.email.value
              }
              setReview([...review, answer])
            }}>
              <input type="email" name='email' className='costumer-review-mail' />
              <textarea name="text" id="costumer-review" rows={10}>
              </textarea>
              <button>
                Submit
              </button>
            </form>
            <h3>Be a rainbow lollipop in a world full of Dum Dum suckers.</h3>
          </div>
        </div>
        <div className='review-input'>
          <h3>Our Client's review</h3>
          <div className='show-review'>
            <ul>
              {review.map(item => (
                <li className='review-li'>
                  <p>{item.review}</p>
                  <h3>-{item.email}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>





      </div>


    </div >
  )
}

export default App
