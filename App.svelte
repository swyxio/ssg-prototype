<script>
  import Misc from "./Misc.svelte";
  export let name;
</script>

<style>
  h1 {
    color: red;
  }
</style>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello {name}</h1>
    <Misc />
  </body>
</html>
