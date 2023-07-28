const apiUrl = process.env.VUE_APP_PIXABAY_API_URL
const apiKey = process.env.VUE_APP_PIXABAY_API_KEY

export const defaultImage = "https://images.unsplash.com/photo-1561815908-bb4926a2f4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
export const defaultFlag = "https://static.vecteezy.com/system/resources/previews/026/296/616/non_2x/lack-of-support-in-workplace-black-white-error-404-flash-message-unsupportive-work-monochrome-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-outline-illustration-concept-vector.jpg"


export async function getImageFrom(name) {
  const url = new URL(apiUrl)

  url.searchParams.append('key', apiKey)
  url.searchParams.append('q', name)
  url.searchParams.append('order', 'popular')
  url.searchParams.append('per_page', '3')
  url.searchParams.append('category', 'places')
  url.searchParams.append('image_type', 'photo')
  url.searchParams.append('orientation', 'horizontal')

  const response = await fetch(url.href, { cache: 'no-store' })
  const limited = response.status == 429

  if (!response.ok) {
    return {
      src: undefined,
      found: false,
      limited,
    }
  }

  const content = await response.json()
  const images = content?.hits
  const relevantImage = images?.length > 0 && images[0]
  const src = relevantImage?.largeImageURL

  return {
    src,
    found: !!src,
    limited,
  }
}
