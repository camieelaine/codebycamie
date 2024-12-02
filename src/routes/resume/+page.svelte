<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Resume for Camie DeCovich" />
</svelte:head>

<!-- Page -->
<div
	class="
 page
 print:max-w-letter
 md:max-w-letter
 md:h-letter
 xsm:p-8
 mx-auto max-w-4xl
 bg-white
 p-6
 sm:p-9
 md:p-16
"
>
	<!-- Header -->
	<header
		class="
   row-gap-5
   mb-5
   flex flex-row
   flex-wrap
   items-center
   border-b-2
   border-gray-400 border-opacity-50 md:mb-2
 "
	>
		<!-- Name -->
		<div
			class="initials-container mr-5 bg-secondary-600 px-3 pb-3 pt-3 text-base font-medium leading-none text-white"
		>
			<div class="initial pb-1 text-center text-2xl">C</div>
			<div class="initial text-center text-2xl">D</div>
		</div>
		<h1
			class="text-gray-750 mr-auto pb-px text-3xl font-semibold md:text-5xl lg:text-6xl print:text-6xl"
		>
			Camie DeCovich
		</h1>
		<!-- End Name -->

		<!-- Industry Title -->
		<h2
			id="industry-title"
			class="font-hairline self-center pb-px font-sans text-2xl text-secondary-600 md:text-3xl print:text-3xl"
		>
			Full Stack Data Engineer
			<!-- <code
				class="font-hairline self-center pb-px font-sans text-2xl text-secondary-600 md:text-3xl print:text-3xl"
				aria-label="Full Stack Data Engineer">&#60&#62 Full Stack Data Engineer &#60/&#62</code
			> -->
		</h2>
		<!-- End Industry Title -->
	</header>
	<!-- End Header -->

	<!-- Contact / Links -->
	<section class="mb-10 first:mt-0" id="contact">
		<h2 class="text-sm2 text-gray-550 mb-2 font-bold tracking-widest md:mb-0">CONTACT</h2>

		<!-- Contact Items -->
		<ul
			class="flex list-inside flex-col flex-wrap justify-between gap-2 pr-7 sm:flex-row print:flex-row"
		>
			<!-- Email -->
			<li class="text-md mt-1.5 leading-normal text-gray-700">
				<a href="mailto:camiedecovich@gmail.com" target="_blank" rel="noopener noreferrer">
					<i class="far fa-envelope text-secondary-600"></i>
					camiedecovich@gmail.com
				</a>
			</li>
			<!-- End Email -->
			<!-- Phone -->
			<li class="text-md mt-1.5 leading-normal text-gray-700">
				<a href="tel:+14132827194">
					<i class="fas fa-mobile-alt text-secondary-600"></i>
					+1-(907)-521-0275
				</a>
			</li>
			<!-- End Phone -->
			<!-- LinkedIn -->
			<li class="text-md mt-1.5 leading-normal text-gray-700">
				<a
					href="https://www.linkedin.com/in/camiedecovich/"
					class="group"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-linkedin text-secondary-600"></i>
					linkedin.com/camiedecovich
				</a>
			</li>
			<!-- End LinkedIn -->
			<!-- Github -->
			<li class="text-md mt-1.5 leading-normal text-gray-700">
				<a
					href="https://www.github.com/camieelaine"
					class="group"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-github text-secondary-600"></i>
					github.com/camieelaine
				</a>
			</li>
			<!-- End Github -->
		</ul>
	</section>
	<!-- End Contact / Links -->

	<!-- Grid 2 1 -->
	<div class="grid grid-cols-3 gap-10">
		<!-- Grid Items Span 2 Larger -->
		<section class="col-span-3 mt-8 first:mt-0 md:col-span-2 print:col-span-2">
			<!-- Profile -->
			<section class="mt-8 first:mt-0" id="profile">
				<h2 class="text-sm2 mb-0 font-bold tracking-widest text-secondary-600">PROFILE</h2>

				<section class="mb-0 grid grid-cols-1">
					<!-- <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
	 </h3> -->
					<p class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
						<span class="-ml-2 select-none text-gray-600">›</span>
						<strong> US Citizen - Residing in Alaska and working remote. </strong>
					</p>
					<!-- <p class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
						<span class="-ml-2 select-none text-gray-600">›</span>
						Working remote.
					</p> -->
					<!-- <p class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
						<span class="-ml-2 select-none text-gray-600">›</span>
						Available Time Zones: Full overlap APAC & EMEA (Europe). Some US / Canada overlap.
					</p> -->
					<p class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
						<span class="-ml-2 select-none text-gray-600">›</span>
						Accomplished data and analytics engineer, using the modern cloud data stack to develop pipelines
						to provide data products and analytical solutions.
					</p>
				</section>
			</section>
			<!-- End Profile -->

			<!-- Experience Section -->
			<section class="col-span-3 mt-6 first:mt-0" id="experience">
				<h2 class="text-sm2 mb-4 font-bold tracking-widest text-secondary-600">EXPERIENCE</h2>

				<!-- Work 1 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Lead Data Engineer
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ Aetna (CVS Health)
							</span>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							May 2023 – Present // <strong>Remote</strong>
							- USA
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Leading a data engineering team in the Medicare Stars Data Intelligence Team.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Develop data pipelines to provide data for data science and analytics solutions to improve
							member outcomes, understand financial costs and opportunities, and predict member utilization.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Develop features for use for real-time reporting and present videos and options to members.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Collaborate with and present findings and solutions with all levels of the organization.
						</li>
					</ul>
				</section>
				<!-- End Work 1 -->

				<!-- Work 2 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Analytics Architect
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ Alaska Native Tribal Health Consortium (ANTHC)</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							Feb 2019 – May 2023 // Remote
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Developed data analytics solutions to drive informed healthcare decisions, reduce manual
							processes, and identify opportunities for improving patient care.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Developed interactive Primary Care, Behavioral Health, childhood and adult immunization,
							COVID testing/vaccination dashboards to support Tribal Health Organizations throughout
							Alaska; including automated daily reporting submissions to IHS and the State of Alaska.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Developed hospital patient dashboards to provide insights on patient volumes, showing the
							journey a patient endures during hospitalization to improve both patient care and financial
							billing.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Documented requirements, wrote business cases, and provided data source methodology documentation
							for transparency.
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Collaborated on data governance processes and policy development.
						</li>
					</ul>
				</section>
				<!-- End Work 2 -->

				<!-- Work 3 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Software Development Manager, Reporting
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ Alaska Native Tribal Health Consortium (ANTHC)</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							Aug 2017 – Feb 2019 // Remote
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Directed team of developers while also continuing to develop reports and dashboards for
							data residing in the Cerner electronic health record.
						</li>
					</ul>
				</section>
				<!-- End Work 3 -->
				<!-- Work 4 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Senior Programmer Analyst
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ Alaska Native Tribal Health Consortium (ANTHC)</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							May 2016 – Aug 2017 // Remote
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Developed reports, dashboards, and custom reporting solutions for patient quality, patient
							care, financial and utilization.
						</li>
					</ul>
				</section>
				<!-- End Work 4 -->
				<!-- Work 5 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							PMO Manager
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ MTA Solutions (Matanuska Telecommunications)</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							May 2011 – May 2016 // Palmer, Alaska
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Directed team of project managers and business analysts to support strategic projects.
						</li>
					</ul>
				</section>
				<!-- End Work 4 -->
				<!-- Work 5 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Lead Software Developer/Analyst
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ MTA Solutions (Matanuska Telecommunications)</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							Aug 2006 – Aug 2011 // Palmer, Alaska
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Led team of developers to support enterprise applications, develop integrations with enterprise
							applications, fulfill reporting requirements for customer sales, regulatory and financial
							reporting, and build custom applications for internal and external customers.
						</li>
					</ul>
				</section>
				<!-- End Work 4 -->
				<!-- Work 5 -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Lead Software Engineer
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ University of Alaska Anchorage (UAA)</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							Oct 2002 – Aug 2006 // Anchorage, Alaska
						</p>
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Developed and supported custom web-based applications for departments, including implementing
							a content management system for university websites.
						</li>
					</ul>
				</section>
				<!-- End Work 4 -->
			</section>
			<!-- End Experience Section -->

			<!-- Volunteer Experience Section -->
			<section class="col-span-3 mt-6 first:mt-0" id="education">
				<h2 class="text-sm2 mb-4 font-bold tracking-widest text-secondary-600">
					Affiliations & Professional Development
				</h2>

				<!-- Codecademy Chapter Co-Lead -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Member
							<span id="company-name" class="text-gray-550 font-semibold"
								>@ Data Visualization Society</span
							>
						</h3>
						<p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							September 2021 – Present // United States
						</p>
					</header>
					<!-- <ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="select-nofne -ml-2 text-gray-600">›</span>
							Provide live demos, workshops, tutoring, and mentoring for engineers and students learning
							JavaScript, React, Next.js, Node, and AWS, Serverless architecture.
						</li>
					</ul> -->
				</section>
				<!-- Codecademy Chapter Co-Lead -->

				<!-- Roar Coders -->
				<section class="mb-4.5">
					<header>
						<h3 id="job-title" class="leading-snugish text-lg font-semibold text-gray-700">
							Recent Training
							<!-- <a
								href="https://datacamp.com/"
								class="group"
								target="_blank"
								rel="noopener noreferrer"
							> 
							<span id="company-name" class="text-gray-550 font-semibold">@ DataCamp</span>
							<span
								class="
			   text-gray-550
			   inline-block
			   font-normal
			   transition
			   duration-100
			   ease-in
			   group-hover:text-gray-700
			   print:text-black
			 ">↗</span
							>
							</a> -->
						</h3>

						<!-- <p id="work-date-location" class="mt-1 text-sm leading-normal text-gray-700">
							August 2021 – Present // Alaska,
						</p> -->
					</header>
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							DataCamp Professional Data Engineer - Apached Airflow with Python
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<span class="-ml-2 select-none text-gray-600">›</span>
							Precipio Google Could Platform Data Engineer course.
						</li>
					</ul>
				</section>
				<!-- End Roar Coders -->
			</section>
			<!-- Volunteer Experience Section -->

			<!-- Experience Section -->
			<section class="col-span-3 mt-6 first:mt-0" id="experience">
				<h2 class="text-sm2 mb-4 font-bold tracking-widest text-secondary-600">
					Professional Certification & Achievements
				</h2>

				<!-- Work 1 -->
				<section class="mb-4.5">
					<ul id="work-description-bullets" class="">
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<a
								href="https://www.credly.com/badges/f55dc12c-5cc5-4466-b7d4-856e4d4ec857/public_url"
								class="group"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="-ml-2 select-none text-gray-600">›</span>
								Microsoft PowerBI
								<!-- <span
									class="
				 text-gray-550
				 inline-block
				 font-normal
				 transition
				 duration-100
				 ease-in
				 group-hover:text-gray-700
				 print:text-black
			   ">↗</span 
								>-->
							</a>
						</li>
						<!-- <li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<a
								href="https://www.credly.com/badges/cf58de7c-d52f-4fc0-b31d-3135edd50b79/public_url"
								class="group"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="-ml-2 select-none text-gray-600">›</span>
								AWS Developer Associate Certification
								<span
									class="
				 text-gray-550
				 inline-block
				 font-normal
				 transition
				 duration-100
				 ease-in
				 group-hover:text-gray-700
				 print:text-black
			   ">↗</span
								>
							</a>
						</li>
						<li class="mt-2.1 ml-1.5 text-sm leading-normal text-gray-700">
							<a
								href="https://bryantdesigns.github.io/hackathon/about.html"
								class="group"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="-ml-2 select-none text-gray-600">›</span>
								Codecademy Hackathon Runner Up - Team Xcessibility
								<span
									class="
				 text-gray-550
				 inline-block
				 font-normal
				 transition
				 duration-100
				 ease-in
				 group-hover:text-gray-700
				 print:text-black
			   ">↗</span
								>
							</a>
						</li> -->
					</ul>
				</section>
				<!-- End Work 1 -->
			</section>
			<!-- End Experience Section -->
		</section>
		<!-- End Grid Items Span 2 Larger -->

		<!-- Column 2 (Right Side) Smaller -->
		<section class="col-span-3 md:col-span-1 print:col-span-1">
			<!-- Skills Section -->
			<section class="col-span-1 mt-8 first:mt-0" id="skills">
				<h2 class="text-sm2 mb-4 font-bold tracking-widest text-secondary-600">SKILLS</h2>
				<!-- Programming Languages -->
				<section class="mb-1.5" id="programming-languages">
					<header>
						<h3 class="leading-snugish text-lg font-semibold text-gray-700">
							Data Analytics Tools
						</h3>
					</header>
					<div class="my-2.5 last:pb-1.5">
						<ul class="text-md -mr-1.6 -mb-1.6 flex flex-wrap leading-relaxed">
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								PowerBI (Certified May 2023), DAX, Qlik, Tableau, DA2
							</li>

							<!-- <li
			 class="px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset "
		   >
			 Liquid (Shopify)
		   </li> -->
						</ul>
					</div>
				</section>
				<!-- End Programming Languages -->

				<!-- Libraries & Frameworks -->
				<section class="mb-1.5" id="libraries-frameworks">
					<header>
						<h3 class="leading-snugish text-lg font-semibold text-gray-700">Data Engineering</h3>
					</header>
					<div class="my-2.5 last:pb-1.5">
						<ul class="text-md -mr-1.6 -mb-1.6 flex flex-wrap leading-relaxed">
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Cloud Platforms: GCP Big Query, Apache Airflow, DAG, Azure, Azure Data Factory
							</li>
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Databases: MS SQL Server, Oracle, DB2
							</li>
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Languages: T-SQL, PL/SQL, Python
							</li>
							<!-- <li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								GSAP
							</li> -->
							<!-- <li
			 class="px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset "
		   >
			 Styled Components (CSS-in-JS)
		   </li> -->

							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Google Cloud Platform
							</li>
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Microsoft Azure
							</li>
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Apache Airflow
							</li>
							<!-- <li
			 class="px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset "
		   >
			 AWS Serverless Application Model (SAM)
		   </li> -->
						</ul>
					</div>
				</section>
				<!-- End Libraries & Frameworks -->
				<!-- Test Runners -->
				<section class="mb-1.5" id="test-runners-libraries">
					<header>
						<h3 class="leading-snugish text-lg font-semibold text-gray-700">
							Frontend Development
						</h3>
					</header>
					<div class="my-2.5 last:pb-1.5">
						<ul class="text-md -mr-1.6 -mb-1.6 flex flex-wrap leading-relaxed">
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								HTML, CSS, JavaScript, C#.NET, D3, Svelte, Tailwind CSS, ESLint, Prettier
							</li>
						</ul>
					</div>
				</section>
				<!-- End Test Runners -->
				<!-- Tools | Platforms | Services -->
				<section class="mb-1.5" id="tools-services">
					<header>
						<h3 class="leading-snugish text-lg font-semibold text-gray-700">
							Project Management and Workflow
						</h3>
					</header>
					<div class="my-2.5 last:pb-1.5">
						<ul class="text-md -mr-1.6 -mb-1.6 flex flex-wrap leading-relaxed">
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Agile and Scrum Project Management Methods, BPMN business process modeling,
							</li>
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Past IIBA Business Analysis Certification, Scrum Master Certification, Scrum Product
								Owner Certification
							</li>
							<li
								class="mr-1.6 mb-1.6 text-gray-750 print:border-inset px-2.5 text-xs print:bg-white"
							>
								Git, Jira, Trello, Rally, Visio, CI / CD, TeamCity, OctoDeploy
							</li>
						</ul>
					</div>
				</section>
				<!-- End Tools | Platforms | Services -->
			</section>
			<!-- End Skills Section -->

			<!-- Projects Section -->
			<!-- <section class="mt-8 first:mt-0" id="projects">
				<h2 class="text-sm2 mb-4 font-bold tracking-widest text-secondary-600">TECHNICAL PROJECTS</h2> -->

			<!-- Project 1 -->
			<!-- <section class="mb-4.5">
					<header>
						<h3 class="tex t-gray-700 leading-snugish text-sm font-semibold">
							<a
								href="https://www.t-mobile.com/support/new-to-tmobile"
								class="group"
								target="_blank"
								rel="noopener noreferrer"
							>
								T-Mobile New Customer Onboarding
								<span
									class="
				 text-gray-550
				 inline-block
				 font-normal
				 transition
				 duration-100
				 ease-in
				 group-hover:text-gray-700
				 print:text-black
			   ">↗</span
								>
							</a>
						</h3>
						<p class="text-gray-650 text-sm leading-normal">Stack: Javascript, Vue.js, Laravel</p>
						<p class="text-gray-650 text-sm leading-normal">
							<i>Finished</i>
						</p>
					</header>
					<div class="mt-2.1 text-xs leading-normal text-gray-700">
						<p>
							<span class="font-semibold">Description:</span>
							T-Mobile onboarding experience for new customers and Sprint customers after merger.
						</p>
						<p>
							<span class="font-semibold">Market Need:</span>
							Large churn from Sprint customers migrating to T-Mobile.
						</p>
						<p>
							<span class="font-semibold">Solves:</span>
							Integrates the T-Mobile Un-Carrier campaign, showcases benefits, and educates customers
						</p>
						<span class="font-semibold">Features: </span>

						<br />
						<ul class="list-inside">
							<li class="ml-1.5">
								<span class="-ml-1.5 select-none text-gray-600">›</span>
								Users can set up online account to manage T-Mobile account & see of the benefits they
								recieve with T-Mobile service.
							</li>
							<li class="ml-1.5">
								<span class="-ml-1.5 select-none text-gray-600">›</span>
								Helps transition customers migrating from Sprint.
							</li>
						</ul>
					</div>
				</section> -->
			<!-- End Project 1 -->
			<!-- </section> -->
			<!-- End Projects Section -->

			<!-- Education Section -->
			<section class="col-span-3 mt-8 first:mt-0" id="education">
				<h2 class="text-sm2 mb-4 font-bold tracking-widest text-secondary-600">EDUCATION</h2>

				<!-- Education 1 -->
				<section class="mb-4.5">
					<header>
						<h3 class="leading-snugish text-lg font-semibold text-gray-700">
							University Of Denver, Daniels College of Business
						</h3>
						<p class="text-gray-650 text-sm leading-normal">Denver, CO</p>
					</header>
					<p class="mt-2.1 text-sm leading-normal text-gray-800">
						Master of Science in Information Technology
					</p>
					<p class="mt-0.5 text-xs leading-normal text-gray-600">
						<!-- <i>*Incomplete senior year: medical leave of absence</i>.<br />
						Topics in advanced multivariate & vector calculus, linear algebra, statistics, set theory,
						physics, MATLAB -->
					</p>
				</section>
				<!-- End Education 1 -->

				<!-- Education 2 -->
				<!-- Education 1 -->
				<section class="mb-4.5">
					<header>
						<h3 class="leading-snugish text-lg font-semibold text-gray-700">
							University Of Alaska, Anchorage
						</h3>
						<p class="text-gray-650 text-sm leading-normal">Anchorage, AK</p>
					</header>
					<p class="mt-2.1 text-sm leading-normal text-gray-800">
						Bachelor of Business Administration Marketing
					</p>
				</section>
				<!-- End Education 2 -->
			</section>
			<!-- End Education Section -->
		</section>
		<!-- End Column 2 Smaller -->
	</div>
	<!-- end Grid 2 1 -->

	<!-- Footer Build Info -->
	<footer class="pb-5 print:pb-0">
		<section id="resume-info" class="mt-16 flex flex-row print:mt-0">
			<h2 class="font-hairline text-gray-550 text-xs">Thank you for visiting</h2>
			<!-- <a
				href="https://github.com/camieelaine"
				class="text-gray-550 font-hairline group ml-3 border-l border-gray-500 pl-3 text-xs hover:text-gray-700"
			>
				See the GitHub Repo
				<span
					class="
		 text-gray-550
		 inline-block
		 font-normal
		 transition
		 duration-100
		 ease-in
		 group-hover:text-gray-700
		 print:text-black
	   ">↗</span
				>
			</a> -->
		</section>
	</footer>
	<!-- End Footer Build Info -->
</div>
<!-- end Page -->
