import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {id:1, rating:10, txt: "Bello"}, 
	{id: 2, rating: 2, txt: "Brutto"}
])