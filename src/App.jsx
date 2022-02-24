import React from 'react'

//qr image 
import qrImage from './assets/images/image-qr-code.png'

function App() {

  return (
    <div className="App">
      <div className='cont-card'>
          <div className='qr-img-cont'>
            <img src={qrImage} alt='qr image'></img>
          </div>
          <div className='qr-info-cont'>
            <h1>
              Improve your front-end
              skills by building projects
            </h1>
            <p>
              Scan the QR code to visit Frontend
              Mentor and take your coding skills to 
              me next level
            </p>
          </div>
      </div>
    </div>
  )
}

export default App
