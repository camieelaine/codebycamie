<script lang="ts">
	// const nav_links = [
	// 	{ label: 'Home', url: '/' },
	// 	{ label: 'About', url: '/about' },
	// 	{ label: 'Projects', url: '/projects' },
	// 	{ label: 'Resume', url: '/resume' }
	// ];
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	//import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { navigation } from '$data/navigation';
	//import { navigation } from '$data/navigation.ts';
	//const drawerStore = getDrawerStore();

	// function drawerClose(): void {
	// 	drawerStore.close();
	// }

	let links = [
		{ href: `/`, title: `Home` },
		{ href: `/about`, title: `About` },
		// { href: `{base}/projects`, title: `Projects` },
		{ href: `/resume`, title: `Resume` }
	];
</script>

<nav
	class="bg-base-100/50 sticky top-0 z-10 mx-2 mb-10 flex-none px-2 py-2 shadow-xl backdrop-blur-xl backdrop-filter lg:flex"
>
	<p
		class="from-primary to-secondary items-start bg-gradient-to-b bg-clip-text text-3xl font-extrabold text-transparent lg:text-4xl"
	>
		<a href="{base}/" title="Return to Homepage">
			<span
				class="bg-gradient-radial from-tertiary-500 to-primary-500 box-decoration-clone bg-clip-text text-transparent"
			>
				Code by Camie
			</span>

			<!-- <img
		class="aspect-square w-[48px] overflow-hidden rounded-full shadow-xl"
		src={getImageLink({ id: 'mPGSvqHAqTU', w: 48, h: 48 })}
		alt="Portfolio"
	/> -->
		</a>
	</p>
	<ul class="container mx-auto flex max-w-3xl items-center justify-between px-4">
		{#each links as link}
			<li>
				<a
					class="link link-primary flex items-center space-x-2 text-xl {$page.url.pathname ===
						link.href && `link-secondary`}"
					href={link.href}
				>
					<span class="inline-block align-text-bottom">
						{link.title}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<!-- <nav class="btm-nav rounded-box bg-primary z-10 mx-auto mb-2 max-w-[95vw] shadow-xl lg:hidden">
	{#each links as link}
		<a href={link.href}>
			<span
				class="link text-primary-content {$page.url.pathname === link.href &&
					`text-secondary-content`}"
				>This
			</span>
		</a>
	{/each}
</nav> -->
<!-- Close navigation drawer on window resize -->
<!-- <svelte:window on:resize={drawerClose} /> -->

<!-- Nav Menu -->

<!-- <nav
	class="
        border-surface-100-800-token bg-surface-50/50 dark:bg-surface-900/50 rounded-bl-container-token
        rounded-br-container-token md:rounded-token flex
        flex-col gap-2 border
        p-2 shadow-xl backdrop-blur-lg
        md:flex-row md:border-0
	"
>
	{#each navigation as route}
		<a
			href={route.path}
			class="btn md:btn-sm hover:variant-soft-primary"
			class:!variant-filled-primary={$page.url.pathname.split('/')[1] ===
				route.path.replace('/', '')}
		>
			{route.label}
		</a>
	{/each}
</nav> -->

<style>
	/* nav {
		display: flex;
		justify-content: flex-start;
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 20px;
	} */
	/* nav p {
		margin-right: 10px;
	} */
	/* nav a {
		text-decoration: none;
	}
	nav a:hover {
		text-decoration: underline;
	} */
</style>
