import { useEffect, useRef, useState } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Home } from 'web/pages/Home/Home.canvas'
import styles from 'web/styles/Layout.module.css'

export default function Layout() {
  // imperative
  const ref = useRef()
  const footer = useRef()
  const tracking = useRef()
  const description = useRef()
  const code = useRef()
  const options = useRef()
  const menuRef = useRef()
  const progress = useRef()

  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s4 = useRef()
  const s5 = useRef()
  const s6 = useRef()
  const s7 = useRef()
  const sub1 = useRef()
  const sub2 = useRef()
  const sub3 = useRef()

  useEffect(() => {
    s1.current = footer.current.children[0].children[0]
    s2.current = footer.current.children[0].children[1]
    s3.current = footer.current.children[0].children[2]
    s4.current = footer.current.children[2].children[0]
    s5.current = footer.current.children[2].children[1]
    s6.current = footer.current.children[2].children[2]
    s7.current = footer.current.children[1]
    sub1.current = menuRef.current.children[0]
    sub2.current = menuRef.current.children[1]
    sub3.current = menuRef.current.children[2]
  }, [])

  // declarative
  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(false)
  const [info, setInfo] = useState(false)

  return (
    <div id='eventContainer' ref={ref}>
      <Nav id='nav' className='space-mono-regular' />
      <div id='main' className='content'>
        <div
          id='tracking'
          ref={tracking}
          className={`${styles.tracking} ${menu ? styles['tracking-open'] : ''}`}
        />
        <div
          id='description'
          ref={description}
          className={`disable-scrollbars ${styles.description} ${menu ? styles['description-open'] : ''}`}
        >
          <h1>Just getting started.</h1>
          <h2>an introduction</h2>
          <p>{text}</p>
        </div>
        <div id='code' ref={code} className={styles.code} />
        <div id='options' ref={options} className={styles.options} />
        <div
          id='menu'
          ref={menuRef}
          className={`disable-scrollbars space-mono-regular ${styles.menu} ${menu ? styles['menu-open'] : ''}`}
        >
          <div>
            <pre>
              <code>
                {`// fluid simulation settings`}
                <br />
                <br />
                {`useFluidTexture({`}
              </code>
            </pre>
            <pre>
              <code>
                {'  '}
                <label>poissonIterations:</label>
                {'   '}
                <input
                  name='poissonIterations'
                  maxLength={2}
                  size={7}
                  placeholder='32'
                  defaultValue={32}
                />
                ,<br />
                {'  '}
                <label>viscosityIterations:</label>{' '}
                <input
                  name='viscosityIterations'
                  maxLength={2}
                  size={7}
                  placeholder='32'
                  defaultValue={32}
                />
                ,<br />
                {'  '}
                <label>mouseForce:</label>
                {'          '}
                <input
                  name='mouseForce'
                  maxLength={2}
                  size={7}
                  placeholder='20'
                  defaultValue={20}
                />
                ,<br />
                {'  '}
                <label>resolution:</label>
                {'          '}
                <input
                  name='resolution'
                  maxLength={3}
                  size={7}
                  placeholder='0.5'
                  defaultValue={0.5}
                />
                ,<br />
                {'  '}
                <label>cursorSize:</label>
                {'          '}
                <input
                  name='cursorSize'
                  maxLength={3}
                  size={7}
                  placeholder='50'
                  defaultValue={50}
                />
                ,<br />
                {'  '}
                <label>viscous:</label>
                {'             '}
                <input
                  name='poissonIterations'
                  maxLength={2}
                  size={7}
                  placeholder='40'
                  defaultValue={40}
                />
                ,<br />
                {'  '}
                <label>isBounce:</label>
                {'            '}
                <input
                  className='menu-checkbox'
                  type='checkbox'
                  name='isBounce'
                  value={true}
                  checked
                />
                {'    '}
                ,<br />
                {'  '}
                <label>dt:</label>
                {'                  '}
                <input
                  name='dt'
                  maxLength={5}
                  size={7}
                  placeholder='0.014'
                  defaultValue={0.014}
                />
                ,<br />
                {'  '}
                <label>isViscous:</label>
                {'           '}
                <input
                  className='menu-checkbox'
                  type='checkbox'
                  name='isViscous'
                  value={true}
                  checked
                />
                {'    '}
                ,<br />
                {'  '}
                <label>bfecc:</label>
                {'               '}
                <input
                  className='menu-checkbox'
                  type='checkbox'
                  name='bfecc'
                  value={true}
                  checked
                />
                {'    '}
                ,<br />
                {'  '}
                <label>forceCallback:</label>
                {'       '}
                <select name='pets' id='pet-select'>
                  <option value='cube'>cube</option>
                  <option value='cursor'>cursor</option>
                </select>
                ,<br />
              </code>
            </pre>
            <pre>
              <code>{`})`}</code>
            </pre>
          </div>
          <div>
            <pre>
              <code>{`// Rubik's cube settings
              
cube.setColors([`}</code>
              <br />
              <code className={`${styles['menu-colors']}`}>
                {'  '}
                {`new Color(`}
                <span> #ffffff </span>
                <span />
              </code>
              <code>{` ),`}</code>
              <br />
              <code className={`${styles['menu-colors']}`}>
                {'  '}
                {`new Color(`}
                <span> #ffffff </span>
                <span />
              </code>
              <code>{` ),`}</code>
              <br />
              <code className={`${styles['menu-colors']}`}>
                {'  '}
                {`new Color(`}
                <span> #ffffff </span>
                <span />
              </code>
              <code>{` ),`}</code>
              <br />
              <code className={`${styles['menu-colors']}`}>
                {'  '}
                {`new Color(`}
                <span> #ffffff </span>
                <span />
              </code>
              <code>{` ),`}</code>
              <br />
              <code className={`${styles['menu-colors']}`}>
                {'  '}
                {`new Color(`}
                <span> #ffffff </span>
                <span style={{ background: `${'#fff'}` }} />
              </code>
              <code>{` ),`}</code>
              <br />
              <code className={`${styles['menu-colors']}`}>
                {'  '}
                {`new Color(`}
                <span> #ffffff </span>
                <span />
              </code>
              <code>{` ),`}</code>
              <br />
              <code>{`])`}</code>
            </pre>
          </div>

          <div>
            {' '}
            <pre>
              <code>
                {`// scene effects settings

<Effects>
  <GodRays 
    visible={true}
    exposure={0.5}
    weight={0.8}
  />
  <Noise visible={false} opacity={0.11} />
  <DotScreen visible={false} scale={1.0} />
  <BrightnessContrast
    visible={false}
    brightness={0} 
    contrast={-0.2}
  />
</Effects>`}
              </code>
            </pre>
          </div>
        </div>
        <div
          id='progress'
          className={`${styles.progress} ${menu ? styles['progress-menu'] : ''}`}
          ref={progress}
        >
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>

      <Footer
        ref={footer}
        setMenu={setMenu}
        setPause={setPause}
        setInfo={setInfo}
      />

      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page
          s1={s1}
          s2={s2}
          s3={s3}
          s4={s4}
          s5={s5}
          s6={s6}
          sub1={sub1}
          sub2={sub2}
          sub3={sub3}
          pause={pause}
          setMenu={setMenu}
          menu={menu}
          info={info}
          tracking={tracking}
          description={description}
          menuRef={menuRef}
          code={code}
          progress={progress}
        />
        <Home
          tracking={tracking}
          description={description}
          pause={pause}
          menu={menu}
        />
      </ThreeApp>
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit.`
