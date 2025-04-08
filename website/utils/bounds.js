export const getMarkupBounds = (
  { ppwu, min, max },
  {
    id,
    min: targetMin,
    max: targetMax,
    marginPx = [0, 0, 0, 0] /* left, top, right, bottom */,
  },
) => {
  const { left, right, top, bottom } = document
    .getElementById(id)
    .getBoundingClientRect()
  targetMin.set(
    min.x + (left + marginPx[0]) / ppwu.x,
    max.y - (bottom - marginPx[3]) / ppwu.y,
  )
  targetMax.set(
    min.x + (right - marginPx[2]) / ppwu.x,
    max.y - (top + marginPx[1]) / ppwu.y,
  )
}
