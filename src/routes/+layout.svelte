<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Header from '$components/Header.svelte';
	import Nav from '$components/Nav.svelte';
</script>

<div>
	<!-- <div class="grid h-screen grid-rows-[auto_1fr_auto] p-5"> -->
	<Header />
	<Nav />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	/* .content-wrap {
		padding: 30px;
		margin: 0 auto;
		max-width: var(--content-width);
	} */
	/* 
	footer {
		margin-top: 2rem;
		padding-top: 2rem;
		display: flex;
		justify-content: space-between;
		border-top: solid 1px var(--color-accent);
	} */

	@media (min-width: 768px) {
		/* .content-wrap {
			padding: 20px;
		} */
	}
</style>
