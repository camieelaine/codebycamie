<script lang="ts">
	import { name } from '$lib/info';
	//import ThemeSelect from './theme-select.svelte'
</script>

<!-- App Bar -->
<header>
	<div class="container mx-auto max-w-3xl px-4">
		<!-- <div
		class="page-container !max-w-28xl mx-auto grid grid-cols-[1fr_auto_auto] items-center gap-4 p-4 md:grid-cols-[48px_1fr_48px] md:place-items-center"
	> -->
		<!-- Portrait -->
		<!-- <a href="/" title="Return to Homepage"
			>Code by Camie -->
		<!-- <img
				class="aspect-square w-[48px] overflow-hidden rounded-full shadow-xl"
				src={getImageLink({ id: 'mPGSvqHAqTU', w: 48, h: 48 })}
				alt="Portfolio"
			/> -->
		<!-- </a> -->

		<!-- --------------------- -->

		<!-- 
			View the implementation of the following in `layout.svelte`.
			- On desktop, the Navigation.svelte component is shown via the slot below.
			- On mobile, we'll switch to using the Drawer utility, triggered by the Menu button.
		-->

		<!-- Navigation (desktop only) -->
		<!-- <section class="hidden md:block">
			<slot />
		</section> -->

		<!-- Menu (mobile only) -->
		<!-- <section class="block md:hidden">
			<button class=" btn variant-filled-primary" on:click={drawerOpen}>
				<i class="fa-solid fa-bars" />
				<span>Menu</span>
			</button>
		</section> -->

		<!-- --------------------- -->

		<!-- Lightswitch -->
		<!-- <LightSwitch
			bgDark="variant-filled-primary"
			ring="ring-none"
			class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl shadow-xl"
		/> -->
	</div>
</header>
