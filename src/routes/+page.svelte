<script>
    import Cards from "$lib/cards.svelte";
    
    import { onMount } from "svelte";
    import { dataFetch } from "../lib/stores";
    

    onMount(() => {
    dataFetch(Math.floor(Math.random() * 825) + 1, 0);
    dataFetch(Math.floor(Math.random() * 825) + 1, 1);
    dataFetch(Math.floor(Math.random() * 825) + 1, 2);
    dataFetch(Math.floor(Math.random() * 825) + 1, 3);
    dataFetch(Math.floor(Math.random() * 825) + 1, 4);
    dataFetch(Math.floor(Math.random() * 825) + 1, 5);
    
  });
</script>

<div class="grid">
    <Cards />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  .card {
    background: #333;
    overflow: hidden;
    height: 240px;
    display: flex;
    border-radius: 20px;
  }

  .image {
    width: 30%;
    background-size: cover;
    background-position: center;
  }

  .info {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 15px;
  }

  .dead {
    background: firebrick;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    margin-right: 10px;
  }

  .name {
    font-family: sans-serif;
    color: white;
  }

  .status {
    font-family: sans-serif;
    color: white;
    display: flex;
    align-items: center;
  }

  .locationLabel {
    color: #777;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0 0 5px;
  }

  .location {
    color: white;
    font-family: sans-serif;
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .location a {
    color: white;
    font-family: sans-serif;
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 5px;
  }
</style>
