

export const getGifs = async ( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZqDt3aTn71u9VLi7oqM8nMDnBNUk7j7D`
    const res = await fetch(URL)
    const  { data } = await res.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}