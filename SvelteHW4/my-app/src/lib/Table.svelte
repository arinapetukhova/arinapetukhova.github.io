<script lang="ts">
    export let heading: string
    export let inside: string
</script>

<header>
    <h1>{heading}</h1>
</header>
<main>
    <p>
        {inside}
    </p>
</main>

<style>
    main {
        border: 2px solid black;
        border-radius: 15px;
        padding: 25px;
        border-right-width: 10px;
        border-bottom-width: 10px;
        width: 860px;
    }
</style>