export function contain(texture, aspect) {
  const imageAspect =
    texture.image && texture.image.width
      ? texture.image.width / texture.image.height
      : 1

  if (imageAspect > aspect) {
    texture.repeat.x = 1
    texture.repeat.y = imageAspect / aspect

    texture.offset.x = 0
    texture.offset.y = (1 - texture.repeat.y) / 2
  } else {
    texture.repeat.x = aspect / imageAspect
    texture.repeat.y = 1

    texture.offset.x = (1 - texture.repeat.x) / 2
    texture.offset.y = 0
  }

  return texture
}
