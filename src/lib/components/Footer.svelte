<script>
	import Social from '$lib/components/Social.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-surface-50-900-token flex flex-col items-center space-y-8 p-10">
	<Social />
	<p class="text-xs text-primary-500">&copy; Copyright {currentYear}. All rights reserved.</p>
</footer>
