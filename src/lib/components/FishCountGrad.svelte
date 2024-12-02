<script lang="ts">
	import { scaleTime, scaleLinear, scaleSequential } from 'd3-scale';
	import { extent, ticks } from 'd3-array';
	import { interpolateTurbo } from 'd3-scale-chromatic';
	import { line, curveStep } from 'd3-shape';
	import { timeFormat } from 'd3-time-format';
	import { csv } from 'd3-fetch';
	import { onMount } from 'svelte';

	// @ts-ignore
	let data = $state([]);

	onMount(async () => {
		try {
			const rawData = await csv('/src/lib/data/fishcounts_fishcreek2024.csv'); // Change the path if needed
			// @ts-ignore
			data = rawData.map((d) => ({
				date: new Date(d.count_date),
				temperature: d.fish_count
			}));
			console.log(rawData, data);
		} catch (error) {
			console.error('Error loading CSV file:', error);
		}
	});
	// Chart dimensions
	const width = 928;
	const height = 500;
	const margin = { top: 20, right: 30, bottom: 30, left: 40 };

	// Scales
	let xScale = $derived(
		scaleTime()
			// @ts-ignore
			.domain(extent(data, (d) => d.count_date))
			.range([margin.left, width - margin.right])
	);

	let yScale = $derived(
		scaleLinear()
			// @ts-ignore
			.domain(extent(data, (d) => d.fish_count))
			.nice()
			.range([height - margin.bottom, margin.top])
	);

	let colorScale = $derived(scaleSequential(yScale.domain(), interpolateTurbo));

	// Line generator
	let lineGenerator = $derived(
		line()
			.curve(curveStep)
			// @ts-ignore
			.defined((d) => !isNaN(d.fish_count))
			// @ts-ignore
			.x((d) => xScale(d.count_date))
			// @ts-ignore
			.y((d) => yScale(d.fish_count))
	);

	// Gradient stops
	let gradientStops = $derived(ticks(0, 1, 10));
	$effect(() => console.log(gradientStops));
	// Axis ticks
	let xTicks = $derived(xScale.ticks(width / 80));
	let yTicks = $derived(yScale.ticks(5));
</script>

<svg {width} {height} viewBox={`0 0 ${width} ${height}`} style="max-width: 100%; height: auto;">
	<!-- X-axis -->
	<g transform={`translate(0, ${height - margin.bottom})`}>
		{#each xTicks as tick}
			<text
				class="fill-gray-400"
				x={xScale(tick)}
				y={6}
				dy="0.71em"
				font-size="14px"
				text-anchor="middle"
			>
				{timeFormat('%b')(tick)}
			</text>
		{/each}
		<line x1={margin.left} x2={width - margin.right} stroke="currentColor" stroke-opacity="0.1" />
	</g>

	<!-- Y-axis -->
	<g transform={`translate(${margin.left}, 0)`}>
		{#each yTicks as tick}
			<text
				class="fill-gray-400"
				x={-6}
				y={yScale(tick)}
				dy="0.32em"
				font-size="14px"
				text-anchor="end"
			>
				{tick}
			</text>
			<line
				x1={0}
				x2={width - margin.left - margin.right}
				y1={yScale(tick)}
				y2={yScale(tick)}
				stroke="currentColor"
				stroke-opacity="0.1"
			/>
		{/each}
		<!-- Y Axis Label -->
		<text
			x={-26}
			y={yScale(yScale.domain()[1])}
			class="fill-gray-400"
			font-size="14px"
			text-anchor="start"
		>
			Temperature (°F) ↑
		</text>
	</g>

	<!-- Gradient -->
	<defs>
		<linearGradient
			id="temperature-gradient"
			gradientUnits="userSpaceOnUse"
			x1="0"
			y1={height - margin.bottom}
			x2="0"
			y2={margin.top}
		>
			{#each gradientStops as stop, i}
				<stop offset={stop} stop-color={colorScale.interpolator()(stop)} />
			{/each}
		</linearGradient>
	</defs>
	<!-- Line -->
	<path
		opacity="1"
		d={lineGenerator(data)}
		fill="none"
		stroke="url(#temperature-gradient)"
		stroke-width="1.5"
		stroke-linejoin="round"
		stroke-linecap="round"
	/>
</svg>
