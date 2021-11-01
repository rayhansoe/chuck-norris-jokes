export const checkStatus = async url => {
	const response = await fetch(url)
	if (200 && response.status <= 299) {
		const data = response.json()
		return data
	}
	throw new Error(response.statusText)
}

export const category = [
	'animal',
	'career',
	'celebrity',
	'dev',
	'explicit',
	'fashion',
	'food',
	'history',
	'money',
	'movie',
	'music',
	'political',
	'religion',
	'science',
	'sport',
	'travel',
]
