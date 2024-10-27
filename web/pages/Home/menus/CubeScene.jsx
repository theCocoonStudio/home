import styles from 'web/styles/Layout.module.css'

export const CubeScene = () => {
  return (
    <>
      {' '}
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
    </>
  )
}
