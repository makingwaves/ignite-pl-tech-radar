<script>
  import Logo from "../components/Logo.svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import client from "../data/sanityClient.js";

  let radars = [];
  let title;
  const query = "*[_type == \"radar\" && isPublished]{title, 'path': path.current, name}";
  onMount(async () => {
    client.fetch(query).then(technology => {
      radars = technology;
    });
  });

  $: title = radars.find((radar) => {
    document.title = radar.name;
    return `${base}${radar?.path}`.replaceAll("/", "") === $page.url.pathname.replaceAll("/", "");
  })?.title;
</script>

<div class="root-container">
  <header>
    <Logo />
    <h1>
      {title || ''}
    </h1>
  </header>
  <main>
    <aside>
      <nav>
        {#each radars as radar}
          <a
            class:active={$page.url.pathname === radar.path}
            class="link"
            href={base + radar.path}>{radar?.name || ''}</a
          >
        {/each}
      </nav>
    </aside>
    <slot />
  </main>
</div>

<style>
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
