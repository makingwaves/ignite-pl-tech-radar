<script lang="ts">
	import { companyData, quadrants, rings } from "./data/company-data";
	import { Radar } from "./radar";
	import { Legend } from "./legend";
	import { onMount } from "svelte";

	onMount(() => {
		const radar = new Radar({
			svg_id: "company-radar",
			width: 800,
			height: 800,
			colors: {
				background: "#F0EEEA",
				grid: "#CECFD2",
				inactive: "#ddd",
			},
			quadrants,
			rings,
			entries: companyData,
		});

		const legend = new Legend({
			quadrants,
			rings,
			data: companyData,
			rootElement: document.querySelector("#company-legend"),
		});

		legend.render();

		radar.onDotMouseOver((dot) => legend.highlightByLabel(dot.label));
		radar.onDotMouseOut((dot) => legend.removeHighlightByLabel(dot.label));

		radar.render();

		legend.onMouseOver((entry) => {
			radar.highlightDot(entry.label);
		});

		legend.onMouseOut(() => {
			radar.hideHighlightDot();
		});
	})

</script>

<div class="container">
	<div class="left-container">
		<img class="logo" src="/logo.svg" alt="NoA Ignite Logo" />
	</div>
	<div class="right-container">
		<div id="company-wrapper">
			<header>
				<h1>NoA Ignite Poland - Tech Radar Feb 2022</h1>
			</header>
			<div class="wrapper">
				<div id="company-legend"></div>
				<svg id="company-radar"></svg>
			</div>
		</div>
	</div>
</div>

<style>

</style>