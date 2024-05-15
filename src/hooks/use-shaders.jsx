import { useThree } from '@react-three/fiber'
import { useLayoutEffect } from 'react'

function useRenderer(options = {}) {
  const { gl: renderer } = useThree()

  // initialize with custom gl renderer options
  useLayoutEffect(() => {
    for (const option in options) {
      renderer[option] = options[option]
    }
  }, [options, renderer])
}

export default function useShaders() {
  useRenderer({
    antialias: true,
    alpha: true,
  })
}
