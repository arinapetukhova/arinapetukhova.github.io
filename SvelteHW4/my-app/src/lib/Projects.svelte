<script lang="ts">
    export let about : string
    export let listElement1 : string
    export let listElement2 : string
    export let listElement3 : string
    export let listElement4 : string
</script>

<div id="card">
    {about}
    <ol>
        <li>{listElement1}</li>
        <li>{listElement2}</li>
        <li>{listElement3}</li>
        <li>{listElement4}</li>
    </ol>
</div>

<style>
    #card {
        border: 2px solid black;
        padding: 25px;
        width: 860px;
    }
</style>