import {writable} from 'svelte/store'

export const FeedbackStore = writable([])

const SERVER_URL = 'https://rate-me-server-production.up.railway.app'

export async function fetchFeedback(){
    const res = await fetch(SERVER_URL + '/feedbacks')
    const data = await res.json()
    const feedbacks = data.map(d => {
        return {
            id: d._id,
            rating: d.rating,
            txt: d.txt
        }
    })
    //revert feedback so that user sees his new comment at the top
    const newFeedbacks = feedbacks.reverse()
    FeedbackStore.set(newFeedbacks)
}

export async function postFeedback(feedback) {
    await fetch(SERVER_URL + '/feedbacks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    })
    await fetchFeedback()
}