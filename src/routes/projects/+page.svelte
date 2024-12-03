<script lang="ts">
	import { projectCategories } from '$lib/data/projects';
	import { base } from '$app/paths';
</script>

<div class="page-container page-spacing">
	<!-- Header -->
	<header class="text-center">
		<h1 class="h1">Projects</h1>
	</header>

	<hr class="divider" />

	<!-- Grid -->
	<section class="space-y-10 md:space-y-20">
		{#each projectCategories as category}
			<div class="space-y-4 md:space-y-8">
				<header class="space-y-4">
					<h2 class="h2">{category.name}</h2>
					{#if category.description}<p>{category.description}</p>{/if}
				</header>
				<div class="grid grid-cols-3 gap-4">
					{#each category.projects as project}
						<!-- <a
							href="{base}/projects/{category.path}/{project.slug}"
							class="rounded-container-token group aspect-square shadow-xl {project.background}"
						> -->
						<img
							class="aspect-square w-full transition-all duration-[200] group-hover:-translate-y-[101%]"
							src={project.thumbnail}
							alt={project.name}
						/>
						<span
							class="flex h-full w-full items-center justify-center group-hover:-translate-y-full"
						>
							{project.name}
						</span>
						<!-- </a> -->
					{/each}
				</div>
			</div>
		{/each}
	</section>
</div>
