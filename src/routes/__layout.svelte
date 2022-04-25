<script context="module">
  import clientS from "../api/sanityClient.js";

  /** @type {import("./[slug]").Load} */
  export async function load({ params, fetch, session, stuff }) {

    const q = `*[_type == "radar" && isPublished]{title, 'path': path.current, name}`;

    const technologies = await clientS.fetch(q);

    return {
      status: 200,
      props: {
        technologies
      }
    };
  }
</script>

<script lang="ts">
  import Logo from "../components/Logo.svelte";
  import { page } from "$app/stores";
  import { radars } from "../data/radars";
  import { base } from "$app/paths";
  let title;


  $: title = radars.find((r) => {
    return `${base}${r.url}`.replaceAll("/", "") === $page.url.pathname.replaceAll("/", "");
  }).title;

  export let technologies: Array<{name: string; path: string; title: string}> = []
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
        {#each technologies as techRadar}
          <a
            class:active={$page.url.pathname === techRadar.path}
            class="link"
            href={base + techRadar.path}>{techRadar?.name || ''}</a
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
