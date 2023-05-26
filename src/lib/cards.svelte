<script>
  import { characters } from "../lib/stores";
  
 
</script>

{#each characters as item}
  <div class="card">
    <div class="image"><img src={item.img} /></div>
    <div class="info">
      <h1 class="name">{item?.name}</h1>
      <div class="status">
        <div class="dead" style="background: firebrick" />
        {item?.status}
        </div>
    
      <h3 class="locationLabel">Last known location</h3>
      <h3 class="location">{item.location.name}</h3>
    </div>
  </div>
{/each}

<style>
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
