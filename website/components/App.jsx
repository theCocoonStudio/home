import styles from 'website/styles/App.module.css'
import { Nav } from './Nav'

export const App = function App() {
  return (
    <div className={`${styles.app}`}>
      <Nav />
    </div>
  )
}
