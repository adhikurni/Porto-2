import { useRef, useEffect, useState, useMemo, useId } from 'react';
import './App.css'
import CurvedLoop from './components/CurvedLoop/CurvedLoop.jsx';
//import DomeGallery from './components/DomeGallery/DomeGallery.jsx';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: 'transparent'}}>
      <div>
        {/* <div style={{ width: '100vw', height: '100vh' }}
          <DomeGallery 
            minRadius={2000}
            grayscale={false}
            segments={40} />
        </div> */}
        <CurvedLoop 
          marqueeText="Let's ✦ Work ✦ Together! ✦"
          speed={1}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="curved-loop-custom"
        />
      </div>
    </div>

  )
}

export default App
