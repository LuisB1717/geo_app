const apiUrl = process.env.VUE_APP_PIXABAY_API_URL
const apiKey = process.env.VUE_APP_PIXABAY_API_KEY

export async function getImageFrom(countryName) {
  const url = new URL(apiUrl)

  url.searchParams.append('key', apiKey)
  url.searchParams.append('q', countryName)
  url.searchParams.append('order', 'popular')
  url.searchParams.append('per_page', '3')
  url.searchParams.append('category', 'places')
  url.searchParams.append('image_type', 'photo')
  url.searchParams.append('orientation', 'horizontal')

  const response = await fetch(url.href)

  if (!response.ok) {
    return undefined
  }

  const content = await response.json()
  const images = content?.hits
  const relevantImage = images?.length > 0 && images[0]
  const src = relevantImage?.largeImageURL

  return src || undefined
}
