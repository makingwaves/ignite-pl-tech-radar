<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Logo from "./Logo.svelte";
  import { CompanyData } from "./data/company-data";
  import { MartechData } from "./data/martech-data";
  import RadarWithLegend from "./RadarWithLegend.svelte";
  import { globalHistory } from 'svelte-routing/src/history';
  import { onDestroy, onMount } from "svelte";

  const getTitle = (pathname: string) => {
    switch (true) {
      case pathname.includes("/martech"):
        return "NoA Martech Radar - Feb 2022";
      case pathname.includes("/"):
        return "NoA Tech Radar - Feb 2022";
    }
  };

  let unsub;
  $: pathname = window.location.pathname
  $: heading = getTitle(pathname);

  onMount(() => {
    unsub = globalHistory.listen(({ location, action }) => {
      console.log(location, action);
      pathname = location.pathname;
    });
  });



  function getLinkProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: "active link" };
    }

    return { class: "link" };
  }



  onDestroy(() => {
    unsub();
  });

  // todo - router base path
</script>

<Router basepath="/ignite-pl-tech-radar">
  <div class="root-container">
    <header>
      <Logo />
      <h1>
        {heading}
      </h1>
    </header>
    <main>
      <aside>
        <nav>
          <Link getProps="{getLinkProps}" to="/ignite-pl-tech-radar/">NoA Tech Radar</Link>
          <Link getProps="{getLinkProps}" to="/ignite-pl-tech-radar/martech">Martech</Link>
        </nav>

      </aside>
      <Route path="/">
        <RadarWithLegend quadrants={CompanyData.quadrants} data={CompanyData.items} rings={CompanyData.rings} />
      </Route>
      <Route path="/martech">
        <RadarWithLegend quadrants={MartechData.quadrants} data={MartechData.items} rings={MartechData.rings} />
      </Route>
    </main>
  </div>
</Router>

<style>
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


    :global(.link) {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    :global(.link.active) {
        color: #EB4646;
    }
</style>