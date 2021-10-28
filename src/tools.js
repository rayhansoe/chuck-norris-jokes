export const randomJokes = async () => {
	const data = await fetch('https://api.chucknorris.io/jokes/random')
	const response = await data.json()
	return response
}
