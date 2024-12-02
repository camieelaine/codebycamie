<!-- LineChart.svelte -->
<script>
	// @ts-nocheck

	import { scaleTime, scaleLinear } from 'd3-scale';
	import { extent, max } from 'd3-array';
	import { line, curveBasis } from 'd3-shape';
	import Axis from './Axis.svelte';
	// @ts-ignore
	import Labels from './Labels.svelte';
	import { csv } from 'd3-fetch';
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	// @ts-ignore
	let data, xScale, yScale;

	// Get data
	// let's use csv function from d3-fetch to download our data.
	// download data on: https://datavisualizationwithsvelte.com/data/natural_gas.csv
	onMount(() => {
		csv('/src/lib/data/fishcounts_fishcreek.csv').then((csv) => (data = csv));
	});

	// Dimensions, Margins, Scales
	// @ts-ignore
	let width; // width will be set by the clientWidth
	const height = 350;
	const margin = { top: 10, right: 0, bottom: 20, left: 35 };
	// @ts-ignore
	$: if (data && width) {
		xScale = scaleTime()
			// @ts-ignore
			.domain(extent(data, (d) => new Date(d.count_date)))
			.range([margin.left, width - margin.right]);

		yScale = scaleLinear()
			// @ts-ignore
			.domain([0, max(data, (d) => +d.fish_count + 10000)])
			.range([height - margin.bottom, margin.top]);
	}

	// Line function from d3 to create the d attribute for a path element
	// which will be our line,
	$: lineGenerator = line()
		.x((d) => xScale(new Date(d.count_date)))
		.y((d) => yScale(+d.fish_count))
		.curve(curveBasis);
</script>

<!-- bind width of the container div to the svg width-->
<!-- what this will to is to set the width of the svg responsively, same width like its container div -->
<div class="wrapper" bind:clientWidth={width}>
	{#if data && width}
		<svg {width} {height}>
			<Axis
				{width}
				{height}
				{margin}
				tick_number={width > 380 ? 10 : 4}
				scale={xScale}
				position="bottom"
			/>
			<Axis {width} {height} {margin} scale={yScale} position="left" />
			<Labels
				labelfory={true}
				{width}
				{height}
				{margin}
				tick_number={10}
				yoffset={-50}
				xoffset={270}
				label={'$ number of sockeye passing through weir ↑'}
			/>
			<!-- stroke="#fcd34d" -->
			<path
				in:draw={{ duration: 2000 }}
				shape-rendering="crispEdges"
				d={lineGenerator(data)}
				stroke="#321354"
				stroke-width={1.5}
				stroke-linecap="round"
				fill="none"
			/>
		</svg>
	{/if}
</div>
