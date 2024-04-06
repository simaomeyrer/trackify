export function updateMetaTags(title: string, description?: string) {
  document.title = `Top Tunes - ${title}`
  description &&
    document.querySelector('meta[name="description"]')?.setAttribute("content", description)
}
