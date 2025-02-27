import styles from 'website/styles/App.module.css'
import { Nav } from './Nav'
import { Menu } from './Menu'

export const App = function App() {
  return (
    <div className={`${styles.app}`}>
      <Menu />
      <Nav />
    </div>
  )
}
