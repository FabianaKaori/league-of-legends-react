import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>alow</h1>
      <svg width={85} height={27} viewBox='0 0 587.93 165'>
        <path d="M 98.77 0.33 L 0 46.07 l 24.61 93.66 l 18.73 -2.3 l -5.15 -58.89 l 6.15 -2.74 L 54.96 136 l 32.01 -3.93 l -5.69 -65 l 6.09 -2.71 l 11.68 66.23 l 32.38 -3.98 l -6.23 -71.25 l 6.16 -2.74 l 12.77 72.43 l 32.01 -3.93 V 19.71 L 98.77 0.33 Z m 2.32 142.05 l 1.63 9.22 l 73.42 12.24 v -30.68 l -75.01 9.22 h -0.04 Z m 144.49 -19.22 v 12.63 h 15.57 a 14.84 14.84 0 0 1 -1.92 7.31 a 13 13 0 0 1 -5.6 5.11 a 20 20 0 0 1 -8.9 1.8 a 17.53 17.53 0 0 1 -10 -2.8 a 17.87 17.87 0 0 1 -6.44 -8.14 a 33.06 33.06 0 0 1 -2.27 -12.93 a 31.81 31.81 0 0 1 2.32 -12.81 a 18.14 18.14 0 0 1 6.5 -8 a 17.27 17.27 0 0 1 9.82 -2.78 a 19.31 19.31 0 0 1 5.36 0.71 a 14.15 14.15 0 0 1 4.33 2.09 a 12.92 12.92 0 0 1 3.18 3.29 a 15.61 15.61 0 0 1 2 4.44 h 17.27 a 27.22 27.22 0 0 0 -3.46 -10.28 a 28.84 28.84 0 0 0 -7.05 -8.1 a 32.6 32.6 0 0 0 -9.91 -5.29 a 37.91 37.91 0 0 0 -12.06 -1.86 a 37.32 37.32 0 0 0 -14 2.6 a 32.6 32.6 0 0 0 -11.36 7.61 a 35 35 0 0 0 -7.61 12.21 a 46.15 46.15 0 0 0 -2.73 16.44 q 0 11.94 4.54 20.59 a 32.4 32.4 0 0 0 12.69 13.27 a 39.84 39.84 0 0 0 35.84 0.84 a 28.39 28.39 0 0 0 11.67 -11 q 4.25 -7.19 4.24 -17.2 v -9.76 Z m 215.03 40.81 V 88.53 h 51.67 v 13.96 h -34.62 v 16.76 h 27.99 v 13.96 h -27.99 v 16.8 h 34.7 v 13.96 h -51.75 Z m 101.83 -53.3 a 9 9 0 0 0 -3.54 -6.64 c -2.09 -1.59 -5 -2.38 -8.69 -2.38 a 16.63 16.63 0 0 0 -6.26 1 a 8.62 8.62 0 0 0 -3.83 2.78 a 6.74 6.74 0 0 0 -1.33 4 a 6.2 6.2 0 0 0 0.79 3.29 a 7.27 7.27 0 0 0 2.4 2.45 a 16.54 16.54 0 0 0 3.7 1.79 a 40.14 40.14 0 0 0 4.64 1.31 l 6.63 1.54 a 47.19 47.19 0 0 1 9.45 3.08 a 27.46 27.46 0 0 1 7.2 4.68 a 18.84 18.84 0 0 1 4.58 6.39 a 20.37 20.37 0 0 1 1.61 8.29 a 20.65 20.65 0 0 1 -3.54 12.11 a 22.56 22.56 0 0 1 -10.15 7.85 a 41.31 41.31 0 0 1 -15.93 2.76 a 42.69 42.69 0 0 1 -16.17 -2.81 a 23.22 23.22 0 0 1 -10.72 -8.48 q -3.83 -5.66 -4 -14.12 h 16.43 a 10.68 10.68 0 0 0 7.05 9.94 a 19.37 19.37 0 0 0 7.24 1.26 a 18.44 18.44 0 0 0 6.66 -1.09 a 10 10 0 0 0 4.33 -3 a 7.22 7.22 0 0 0 1.57 -4.48 a 6.16 6.16 0 0 0 -1.42 -4 a 10.86 10.86 0 0 0 -4.14 -2.81 a 42.07 42.07 0 0 0 -6.89 -2.14 l -8.07 -1.95 q -9.65 -2.3 -15.23 -7.26 t -5.54 -13.44 a 19.86 19.86 0 0 1 3.72 -12.12 a 24.74 24.74 0 0 1 10.33 -8.11 a 36.74 36.74 0 0 1 15 -2.91 a 35.62 35.62 0 0 1 14.92 2.91 a 23.43 23.43 0 0 1 9.91 8.14 a 21.54 21.54 0 0 1 3.6 12.12 Z m -113.99 53.3 h -16.87 v -57.35 l -1.73 -0.02 l -17.04 57.37 h -16.86 l -16.58 -57.37 l -2.15 0.02 v 57.35 h -16.87 V 88.53 h 28.67 l 14.48 50.56 h 1.75 l 14.48 -50.56 h 28.72 v 75.44 Z m -114.66 0 h 18.27 l -25.33 -75.43 h -23.15 l -25.37 75.43 h 18.3 l 4.93 -16.54 h 27.42 Z m -28.43 -29.7 l 8.22 -27.65 h 3.1 l 8.26 27.65 Z m 278.58 -37.76 a 4 4 0 0 1 -3.67 -2.44 a 4 4 0 0 1 0 -3.1 a 4 4 0 0 1 0.85 -1.27 a 4.25 4.25 0 0 1 1.27 -0.86 a 4.15 4.15 0 0 1 3.1 0 a 4.13 4.13 0 0 1 1.27 0.86 a 4.08 4.08 0 0 1 0.86 1.27 a 4 4 0 0 1 0 3.1 a 4.08 4.08 0 0 1 -0.86 1.27 a 4 4 0 0 1 -1.27 0.86 a 4 4 0 0 1 -1.55 0.31 Z m 0 -1.09 a 2.84 2.84 0 0 0 1.47 -0.39 a 2.94 2.94 0 0 0 1.05 -1 a 2.93 2.93 0 0 0 0 -2.92 a 3 3 0 0 0 -1.06 -1 a 2.93 2.93 0 0 0 -2.92 0 a 3 3 0 0 0 -1 1 a 2.86 2.86 0 0 0 0 2.92 a 3 3 0 0 0 1 1 a 2.83 2.83 0 0 0 1.46 0.39 Z m -1.46 -1.15 V 90.6 h 1.78 a 1.52 1.52 0 0 1 0.69 0.15 a 1.13 1.13 0 0 1 0.47 0.42 a 1.24 1.24 0 0 1 0.17 0.66 a 1.16 1.16 0 0 1 -0.18 0.66 a 1 1 0 0 1 -0.48 0.41 a 1.56 1.56 0 0 1 -0.7 0.14 h -1.2 v -0.72 h 1 a 0.52 0.52 0 0 0 0.36 -0.12 a 0.5 0.5 0 0 0 0.14 -0.37 a 0.47 0.47 0 0 0 -0.14 -0.37 a 0.52 0.52 0 0 0 -0.36 -0.12 h -0.55 v 2.93 Z m 2.39 -1.68 l 0.82 1.68 h -1.11 l -0.75 -1.68 Z M 282.41 1.03 h 17.05 v 75.44 h -17.05 Z m 98.02 37.72 q 0 12.42 -4.71 21 a 32.67 32.67 0 0 1 -12.79 13.17 a 38.57 38.57 0 0 1 -36.31 0 a 32.75 32.75 0 0 1 -12.79 -13.2 q -4.71 -8.66 -4.71 -21 t 4.71 -21.05 a 32.67 32.67 0 0 1 12.75 -13.14 a 38.65 38.65 0 0 1 36.31 0 a 32.67 32.67 0 0 1 12.79 13.17 q 4.71 8.64 4.71 21.05 m -17.35 0 a 33.35 33.35 0 0 0 -2.23 -13 a 17.47 17.47 0 0 0 -6.33 -8 a 18.57 18.57 0 0 0 -19.45 0 a 17.57 17.57 0 0 0 -6.35 8 a 38.59 38.59 0 0 0 0 26 a 17.49 17.49 0 0 0 6.35 8 a 18.57 18.57 0 0 0 19.45 0 a 17.39 17.39 0 0 0 6.33 -8 a 33.4 33.4 0 0 0 2.23 -13 M 246.58 50.17 l 8.76 26.3 h 18.71 l -9.74 -28.33 h -13.23 l -0.79 -2.44 c 2.52 -0.49 6.83 -1.25 10.65 -3.85 a 20 20 0 0 0 8.75 -16.39 a 24.15 24.15 0 0 0 -3.26 -12.75 a 21.9 21.9 0 0 0 -9.36 -8.64 a 32.56 32.56 0 0 0 -14.64 -3 H 212 v 75.4 h 17.06 v -26.3 Z m -0.32 -15.61 a 19.35 19.35 0 0 1 -7.26 1.18 h -9.94 V 14.88 h 9.91 a 18.68 18.68 0 0 1 7.25 1.24 a 9.12 9.12 0 0 1 4.4 3.7 a 10 10 0 0 1 1.5 5.64 a 9.65 9.65 0 0 1 -1.48 5.55 a 8.86 8.86 0 0 1 -4.38 3.55 M 382.04 1.03 v 14 h 29.3 l 0.8 2.45 c -2.48 0.48 -6.67 1.22 -10.43 3.7 v 55.31 h 16.87 v -61.5 h 19.62 v -14 Z">

        </path>
      </svg>

    </div>
  )
}

export default App
