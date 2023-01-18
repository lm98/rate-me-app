<script>
    import {scale} from 'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    import {FeedbackStore} from '../stores'
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:scale>
        <FeedbackItem {fb}/>
    </div>
{/each}