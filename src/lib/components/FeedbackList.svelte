<script>
    import {scale} from 'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    import {FeedbackStore, fetchFeedback} from '../stores'
	import { onMount } from 'svelte';

    onMount(async () => {
        await fetchFeedback()
    })
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:scale>
        <FeedbackItem {fb}/>
    </div>
{/each}