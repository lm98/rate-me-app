<script>
    import {v4 as uuidv4} from 'uuid'
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    import {FeedbackStore} from '../stores'

    let text = ''
    let rating = 10
    const MIN_TXT_LENGTH = 0
    const MIN_LENGTH_MESSAGE = `Message should be at least ${MIN_TXT_LENGTH +  1} characters long`
    let btnDisabled = true


    function handleInput(){
        btnDisabled = text.trim().length <= MIN_TXT_LENGTH 
    }

    function handleRatingSelect(event){
        rating = event.detail
    }

    function handleSubmit(){
        if(!btnDisabled){
            const newFeedback = {
                id: uuidv4(),
                txt: text,
                rating: +rating
            }
            FeedbackStore.update(current => {
                return [newFeedback, ...current]
            })
            text = ''
        }
    }
</script>

<Card>
    <header><h2>Rate me!</h2></header>
    <RatingSelect on:rating-selected={handleRatingSelect}/>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
            <input type="text" bind:value={text} on:input={handleInput}>
            <Button type="send" disabled={btnDisabled}>Send</Button>
        </div>
        {#if btnDisabled}
            <div class="message">{MIN_LENGTH_MESSAGE}</div>
        {/if}
    </form>
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
    }
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>
  