<script lang="ts">
  import Table from './lib/Table.svelte'
  import Comic from './lib/Comic.svelte';
  import Projects from './lib/Projects.svelte';
  import Contact from './lib/Contact.svelte';
    import BackArrow from './lib/BackArrow.svelte';
</script>

<main>
  <div>
    <Table heading={"Petuhova Arina Kirillovna"}
    inside={"This website is my assignment for the Front-end Web Development course for the summer 2024 semester at Innopolis University."}/>
    <Comic/>
    <h1>Portfolio</h1>
    <Projects about={"I know:"} listElement1={"Java"} listElement2={"Python"} listElement3={"C"} listElement4={"C++"}/><br/>
    <Projects about={"Currenty I'm studying:"} listElement1={"HTML"} listElement2={"CSS"} listElement3={"JavaScript"}  listElement4={"TypeScript"}/>
    <h1>Contacts</h1>
    <Contact action={"mailto:a.petuhova@innopolis.university"} text={"My email"}/>
    <Contact action={"https://t.me/lyutnya"} text={"My Telegram"}/>
    <Contact action={"https://github.com/arinapetukhova"} text={"My Github"}/>
    <BackArrow to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} text="Go Back"/>
</main> 