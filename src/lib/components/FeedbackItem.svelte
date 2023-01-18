<script>
    import {FeedbackStore} from '../stores'
    import Card from "./Card.svelte";

    export let fb = {}

    function handleDelete(id){
        FeedbackStore.update((current) => {
            return current.filter(item => item.id != id)
        })
    }
</script>

<Card>
    <div class="num-display">{fb.rating}</div>
    <button class="close" on:click={()=>handleDelete(fb.id)}>X</button>
    <p class="text">{fb.txt}</p>
</Card>

<style>
    .num-display {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      background: #ff6a95;
      color: #fff;
      border: 1px #eee solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 19px;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background: none;
      border: none;
    }
  </style>