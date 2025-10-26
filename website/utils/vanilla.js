export function simulateMouseDownDuration(element, durationMs) {
  // Create and dispatch a mousedown event
  const mousedownEvent = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0, // Left mouse button
  })
  element.dispatchEvent(mousedownEvent)

  // Wait for the specified duration
  setTimeout(() => {
    // Create and dispatch a mouseup event
    const mouseupEvent = new MouseEvent('mouseup', {
      bubbles: true,
      cancelable: true,
      view: window,
      button: 0, // Left mouse button
    })
    element.dispatchEvent(mouseupEvent)
  }, durationMs)
}
