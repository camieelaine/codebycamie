<script lang="ts">
	import { socialLinks } from '$lib/data/social';

	/** Provide classes to set the button variant style. */
	export let variant = 'variant-soft-primary hover:variant-filled-primary';
</script>

<div class="flex space-x-4">
	{#each socialLinks as link}
		<a
			class="btn btn-icon {variant} "
			href={link.url}
			target={link.target}
			rel="noreferrer"
			title={link.title}
			aria-label={link.title}
		>
			<i class={link.icon}></i>
		</a>
	{/each}
</div>
