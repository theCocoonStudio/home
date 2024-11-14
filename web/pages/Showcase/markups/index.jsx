export const CubeSceneDescription = () => (
  <>
    <h1>Captivate your audience</h1>
    <h2>with unleashed creativity.</h2>
    {/*     <p>
      Background: real-time fluid simulation running fully in the browser using
      WebGL2 with custom GPU shader passes; used as a material alpha-map
      texture.
    </p>
    <p>
      Foreground: Playable 3D Rubik&#39;s cube implementation using a Three.js
      InstancedMesh and custom shaders to override material parameters.
    </p> */}
  </>
)

export const GalleryDescription = () => (
  <>
    <h1>Sense, meet sensibility.</h1>
    <h2>Combining technical knowledge and visual nuance.</h2>
    {/* <p>
      Background: 3D Cloud simulation powered by the creative OSS powerhouse
      pmndrs and its contributors.
    </p>
    <p>Foreground: Select photography with added post-processing effects.</p> */}
  </>
)

const GalleryTracking = () => (
  <>
    <div />
    <div />
    <div />
  </>
)
export const descriptionArr = [
  <CubeSceneDescription key='homeDescription' />,
  <GalleryDescription key='galleryDescription' />,
]

export const trackingArr = [null, <GalleryTracking key='GalleryTracking' />]
