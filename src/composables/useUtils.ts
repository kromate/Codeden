export const serialize = (key, value) => {
	if (typeof value === 'function') {
		return value.toString()
	}
	return value
}

export const deserialize = (key, value) => {
	if (value && typeof value === 'string' && value.substr(0, 8) == 'function') {
		const startBody = value.indexOf('{') + 1
		const endBody = value.lastIndexOf('}')
		const startArgs = value.indexOf('(') + 1
		const endArgs = value.indexOf(')')

		return new Function(
			value.substring(startArgs, endArgs),
			value.substring(startBody, endBody)
		)
	}
	return value
}
