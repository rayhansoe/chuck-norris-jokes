export const randomJokes = async () => {
	const data = await fetch('https://api.chucknorris.io/jokes/random')
	const response = await data.json()
	return response
}

export const jokesByQuerySearch = async q => {
	const data = await fetch(`https://api.chucknorris.io/jokes/search?query=${q}`)
	const response = await data.json()
	return response
}
