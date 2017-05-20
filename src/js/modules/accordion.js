import { fromEvent, combine } from 'most'

export default class component {
	constructor(el, childs) {
		childs.item.forEach((item) => {
			item.getAttribute('data-request-url') != undefined ? fetchExternalData : console.log(213)
		})
	}
}