<script>
  import Logo from "../components/Logo.svelte";
  import { page } from "$app/stores";
  import { radars } from "../data/radars";

  $: title = radars.find((r) => r.url === $page.url.pathname).title;
</script>

<div class="root-container">
  <header>
    <Logo />
    <h1>
      {title}
    </h1>
  </header>
  <main>
    <aside>
      <nav>
        {#each radars as radar}
          <a
            class:active={$page.url.pathname === radar.url}
            class="link"
            href={radar.url}>{radar.link}</a
          >
        {/each}
      </nav>
    </aside>
    <slot />
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
    line-height: 2;
  }

  .link.active {
    color: #eb4646;
    font-weight: 700;
  }
</style>
