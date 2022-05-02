const imagesReg = /!\[(.*?)\]\((.*?)\)/
const imageDotType = /\.(png|jpg|jpeg|gif|svg|webp)/

const getCoverFormMd = (
  text: string = '',
  { strict } = { strict: false }
): {
  title: string
  url: string
  type: string
  _df?: boolean
} => {
  const cover = text.match(/!\[suo\]\((.*?)\)/)
  const df = {
    title: 'cover',
    url: 'https://s2.loli.net/2022/04/15/m8MDhjliOSHtXnR.jpg',
    type: 'jpg',
    _df: true
  }

  if (cover) {
    return {
      title: 'cover',
      url: cover[1],
      type: cover[1].match(imageDotType)?.[0]!
    }
  } else {
    if (strict) return df

    const match = text.match(imagesReg)
    if (match) {
      return {
        title: match[1].toString(),
        url: match[2],
        type: match[2].match(imageDotType)?.[0]!
      }
    }
  }

  return df
}

const removeImagesFormMd = (text: string = '') => {
  return text.replace(imagesReg, '')
}

export { getCoverFormMd, removeImagesFormMd }
