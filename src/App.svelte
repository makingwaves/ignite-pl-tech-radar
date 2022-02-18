<script lang="ts">
import Radar from "./Radar.svelte";
import {rings, quadrants, companyData} from './data/company-data'
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
				<Radar quadrants={quadrants} data={companyData} rings={rings} />
			</div>
		</div>
	</div>
</div>

<style>

</style>