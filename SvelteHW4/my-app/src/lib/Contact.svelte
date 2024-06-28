<script lang="ts">
    export let action : string
    export let text : string
</script>

<form action={action}>
    <button id="from">
        <b>{text}</b>
    </button>
</form>   

<style>
    #from {
        color: black;
        height:50px;
        width:130px;
        border-radius: 8px;
        background-color: white;
        border: 2px solid black;
        transition-duration: 0.4s;
        margin-bottom: 15px;
    }
    #from:hover {
        border: 2px solid black;
        background-color: black;
        color: white;
    }
</style>