<script>
  import Logo from "../components/Logo.svelte";
  import { base, assets } from "$app/paths";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";

  $: path = '/'
  $: isRootPath = path === base || path === '/'

  afterNavigate(({from, to}) => {
    path = to.pathname;
  })


</script>

<div class="root-container">
  <header>
    <Logo />
    <h1>
      head toto </h1>
  </header>
  <main>
    <aside>
      <nav>
        <a class={`link ${isRootPath && 'active'}`} href="/">NoA Tech Radar</a>
        <a class={`link ${path.includes('/martech') && 'active'}`} href="/martech">Martech Radar</a>
      </nav>

    </aside>
    <slot></slot>
  </main>
</div>

<style>
    @font-face {
        font-family: "Aften Screen";
        src: url("/fonts/font-aften.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Aften Screen";
        src: url("/fonts/font-aften-bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    :global(body) {
        background: #f0eeea;
        font-family: "Aften Screen", arial, helvetica, sans-serif;
        padding: 50px;
    }

    header {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
    }

    h1 {
        font-weight: 400;
    }

    main {
        display: grid;
        grid-template-columns: 200px 400px auto;
    }


    .link {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    .link.active {
        color: #EB4646;
    }
</style>