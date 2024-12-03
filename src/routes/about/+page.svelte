<script>
	import { getImageLink } from '$lib/data/images';
	// import { base } from '$app/paths';
	//import KachemakBay from '$images/KachemakBay.png';
	import { base } from '$app/paths';
</script>

<div class="page-container page-spacing">
	<!-- Header -->
	<header class="text-center">
		<h1 class="h1">About Me</h1>
	</header>

	<!-- <hr class="divider" /> -->

	<!-- Banner -->
	<img
		class="aspect-[21:9] rounded-container-token w-full overflow-hidden bg-black shadow-xl"
		src={getImageLink({ id: 'KachemakBay', w: 1280, h: 512 })}
		alt="banner"
	/>
	<!-- <img
		class="aspect-[21:9] rounded-container-token w-full bg-black shadow-xl"
		src={base + KachemakBay}
		alt="banner"
	/> -->

	<!-- <hr class="divider" /> -->

	<!-- Description -->
	<!-- prettier-ignore -->
	<section class="space-y-8">
		<!-- Intro -->
		<p class="text-xl md:text-3xl">
			A seasoned developer with over 20 years of experience creating solutions ranging from the backend and frontend, 
			ensuring that data is presented and utilized effectively.
		</p>
		<!-- / -->
		<p class="md:text-xl opacity-75">
			My work experience as an engineer has been in healthcare, telecommunications, and higher education. 
			I hold a Master of Science degree from the University of Denver Daniels College of Business. 
		    Along with my technical experience, I also have experience in project management and business analysis. 
			I led a project management office, managing several PM's and BA's. I have a past certification as a Scrum
			Master and Business Analyst from IIBA. 
		</p>
		<p class="md:text-xl opacity-75">
			My skill set includes a wide range of skills in frontend web development, including
			proficiency in HTML, CSS, JavaScript. I’ve also worked with various frontend frameworks, but
			share a passion for Svelte and SvelteKit. My expertise in frontend development also extends to
			building responsive and mobile-friendly websites.
		</p>
		<p class="md:text-xl opacity-75">
			Throughout my career I’ve achieved several notable accomplishments. One such accomplishment
			was developing a user-friendly and responsive mobile application for a major e-commerce
			company. The app received high praise from users and helped drive sales for the company. Alex
			has also been recognized for developing a complex web application for a healthcare company
			that helped streamline their patient management system.
		</p>
		<p class="md:text-xl opacity-75">
			In my personal life I enjoy spending time outdoors, hiking, and playing sports. I’m also an
			avid reader and enjoy exploring new technologies and programming languages.
		</p>
		<p class="md:text-xl opacity-75">
			In conclusion, I have a wealth of experience in frontend development and a passion for
			creating user-friendly and responsive web applications, and able to quickly become a valuable
			asset to any development team. My dedication to staying up-to-date with the latest web
			technologies and a commitment to delivering high-quality work makes me a sought-after
			developer in the industry.
		</p>
	</section>

	<!-- Resume -->
	<section class="text-center">
		<a href="{base}/about" class="variant-filled-primary btn btn-lg">
			<i class="fa-solid fa-download"></i>
			<!-- <span>Download Resume</span> -->
		</a>
	</section>
</div>
