import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'

import { Cube } from './Cube'

function Items({ scaleFactor, children, ...props }, forwardRef) {
  const cubes = useRef()
  useImperativeHandle(forwardRef, () => cubes.current)

  const options = useMemo(
    () => [
      {
        position: [0, (scaleFactor / 2) * 0.8, 4],
        scale: scaleFactor * 0.8,
        rotation: [0, -Math.PI / 12, 0],
      },
      {
        position: [-scaleFactor, scaleFactor / 2, 4 - scaleFactor],
        scale: scaleFactor,
        rotation: [0, -Math.PI / 12, 0],
      },
      {
        position: [
          scaleFactor * 0.3,
          (scaleFactor * 1.1) / 2,
          -scaleFactor + 3.2,
        ],
        scale: scaleFactor * 1.1,
        rotation: [0, -Math.PI / 2.2, 0],
      },

      {
        position: [-scaleFactor * (1 - 0.04), (scaleFactor / 2) * 0.65, 4],
        scale: 0.65 * scaleFactor,
        rotation: [0, -Math.PI / 10, 0],
      },
      {
        position: [scaleFactor * 0.8 - 0.5, (scaleFactor / 2) * 0.3, 5.3],
        scale: 0.3 * scaleFactor,
        rotation: [0, -Math.PI / 3, 0],
      },
      {
        position: [-1.4, (scaleFactor / 2) * 0.5, 6.3],
        scale: 0.5 * scaleFactor,
        rotation: [0, -Math.PI / 2, 0],
      },
      {
        position: [-2.5, 0.05 + scaleFactor + (scaleFactor * 0.44) / 2, 0.5],
        scale: 0.44 * scaleFactor,
        rotation: [0, Math.PI / 3.2, 0],
      },
      {
        position: [-2.5, 0.05 + scaleFactor * 0.65 + scaleFactor / 10, 3.5],
        scale: 0.2 * scaleFactor,
        rotation: [0, -Math.PI / 3, 0],
      },
      {
        position: [0, 0.05 + scaleFactor * 1.1 + (scaleFactor / 2) * 0.2, 0],
        scale: 0.2 * scaleFactor,
        rotation: [0, 0, 0],
      },
      {
        position: [scaleFactor * 0.95, (scaleFactor / 2) * 0.41, 3],
        scale: 0.41 * scaleFactor,
        rotation: [0, -Math.PI / 4, 0],
      },
    ],
    [scaleFactor],
  )

  useEffect(() => {
    console.log(cubes)
  })
  return (
    <group {...props} ref={cubes}>
      {options.map(
        (option, index) =>
          options[index] && (
            <Cube
              key={index}
              /* page={page}
              name={index === page ? 'activeSun' : 'inactiveSun'} */
              index={index}
              scaleFactor={scaleFactor}
              {...option}
              position-y={option.position[1] + 0.05}
              /* edges={index !== page} */
            >
              {children[index]}
            </Cube>
          ),
      )}
    </group>
  )
}

export const Cubes = forwardRef(Items)
