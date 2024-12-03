<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Code by Camie</title>
	<meta name="description" content="About Camie DeCovich" />
</svelte:head>

<div class="page-container page-spacing">
	<!-- Hero -->
	<header class="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto]">
		<div class="order-2 max-w-2xl space-y-8 md:order-1">
			<h1 class="h1">Hello, I'm Camie.</h1>
			<p class="text-2xl opacity-75">
				A seasoned developer with over 20 years of experience creating solutions ranging from the
				backend and frontend, ensuring that data is presented and utilized effectively.
			</p>
			<!-- <Social /> -->
		</div>
		<!-- src="https://source.unsplash.com/mPGSvqHAqTU/400x400" -->
		<!-- {getImageLink({ id: 'mPGSvqHAqTU', w: 400, h: 400 })} -->
		<img
			class="order-1 aspect-square w-32 overflow-hidden rounded-full shadow-xl md:order-2 md:w-[400px]"
			src={base + '/src/lib/images/CamieSkiingHead.jpeg'}
			alt="CamiePhoto"
		/>
	</header>

	<!-- <hr class="divider" /> -->

	<!-- Stats -->
	<section>
		<div class="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 md:text-left lg:grid-cols-4">
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">20+</span>
				<p class="text-primary-500">Years Experience</p>
			</div>
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">8+</span>
				<p class="text-primary-500">
					Years Healthcare Clinical Data Workflow, Big Data Analytics and Reporting
				</p>
			</div>
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">10+</span>
				<p class="text-primary-500">
					Years Telecommunications Frontend and Backend Customer-Centered Solutions
				</p>
			</div>
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">1</span>
				<p class="text-primary-500">Effective Communicator and Agile Team Leader</p>
			</div>
		</div>
	</section>

	<!-- <hr class="divider" /> -->

	<!-- Skills -->
	<section class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
		<div class="variant-ringed-hollow card space-y-4 p-4 md:p-8">
			<i class="fa-solid fa-screwdriver-wrench text-4xl text-primary-500"></i>
			<h3 class="h3">Data Modeling, Orchestration</h3>
			<p class="opacity-75">
				From data lakes to curated data, I have strong technical skills data acquisition and
				manipulation and transformation using advanced SQL.
			</p>
		</div>
		<div class="variant-ringed-hollow card space-y-4 p-4 md:p-8">
			<i class="fa-solid fa-palette text-4xl text-primary-500"></i>
			<h3 class="h3">Data Visualization & Design</h3>
			<p class="opacity-75">
				I follow follow data visualization best practices, including minizing clutter, keeping
				visualizations simple and digestible, choosing appropriate visual encoding for the data. I
				hold past certifications in PowerBI and Tableau and am a member of the Data Visualization
				Society.
			</p>
		</div>
		<div class="variant-ringed-hollow card space-y-4 p-4 md:p-8">
			<i class="fa-solid fa-users text-4xl text-primary-500"></i>
			<h3 class="h3">User Experience</h3>
			<p class="opacity-75">
				I collaborate with users to ensure their needs and the solution requirements are met.
			</p>
		</div>
	</section>

	<hr class="divider" />

	<!-- Call to Action -->
	<!-- <section class="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto]">
		<p class="text-center md:text-left">Ready to begin on your first project?</p>
		<a href="mailto:contact@email.com" class="variant-filled-primary btn md:btn-lg">
			<i class="fa-solid fa-envelope" />
			<span>Contact Me</span>
		</a>
	</section> -->
</div>
<section>
	<!-- <div class="relative isolate px-6 pt-14 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div> -->
	<!-- <div class="lg:py-26 sm:py-26 mx-auto max-w-2xl py-32">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<div
				class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
			>
				Check out some of my work. <a href="/" class="font-semibold text-indigo-600"
					><span class="absolute inset-0" aria-hidden="true"></span>Here
					<span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</div> -->
	<!-- <div class="text-center"> -->
	<!-- <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
					Hi, I'm Camie. A full stack data engineer.
				</h1> -->
	<!-- <h1 class="type-scale-10">
				<span
					class="bg-gradient-radial from-tertiary-500 to-primary-500 box-decoration-clone bg-clip-text text-transparent"
				>
					Hi, I'm Camie.
				</span>
			</h1>
			<p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
				Accomplished data and analytics engineer, using the modern cloud data stack to develop
				pipelines to provide data products and analytical solutions.
			</p>
			<div class="flex gap-4">
				<button
					type="button"
					class="btn text-sm font-semibold text-white shadow-sm preset-filled-tertiary-500 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>About Me</button
				>
			</div>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="/"
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>About Me</a
				>
				<a href="/" class="text-sm/6 font-semibold text-gray-900"
					>Learn more <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div> -->
	<div
		class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]"
		aria-hidden="true"
	>
		<div
			class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<!-- </div> -->
</section>
