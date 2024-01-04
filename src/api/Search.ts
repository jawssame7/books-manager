const SearchAPI = async (isbn: string) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    const data = await response.json()
    const { items, totalItems } = data
    if (totalItems === 0) {
      return null
    }
    const item = items[0]
    if (!item.volumeInfo) {
      return null
    }
    const { title, imageLinks, authors, description } = item.volumeInfo

    return {
      title: title,
      thumbnail: imageLinks?.thumbnail || '',
      authors: authors,
      description: description,
      isbn: isbn,
    }
  } catch (error) {
    console.error(error)
    // @ts-ignore
    return { error: error.message }
  }
}

export default SearchAPI
