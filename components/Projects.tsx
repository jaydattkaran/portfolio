import React from "react";

const projects = [
	{
		title: "Revamped Parker.com",
		stack: "Javascript | ScrollTrigger | Lenis | ScrollSpy",
		description:
			"Creating a modern and responsive design, was an incredible experience.",
		githubLink: "https://github.com/yukta-2k23/TeenTitansReimagineRound2",
		vercelLink:
			"https://teen-titans-reimagine-round2.vercel.app/",
	},
	{
		title: "Revamped Subway.com",
		stack: "Javascript | Gsap | Lenis | ScrollTrigger",
		description:
			"Utilized modern Javascript libraries to implement dynamic and responsive features. Key improvements included navigation, interactive menus.",
		githubLink: "https://github.com/yukta-2k23/TeenTitansReimagineRound1",
		vercelLink: "https://teen-titans-reimagine-round1.vercel.app/",
	},
	{
		title: "Snapgram",
		stack: "Next JS | Tailwind CSS | Appwrite database",
		description:
			"Tried some Authentication implementation, and features related to upload, edit, delete Posts.",
		githubLink: "https://github.com/jaydattkaran/snapgram",
		vercelLink: "#",
	},
	{
		title: "Musicova",
		stack: "Javascript",
		description:
			"A music webapp uses songs from local storage and gives a seamless music experience.",
		githubLink: "https://github.com/jaydattkaran/musicova",
		vercelLink: "https://musicova.netlify.app/",
	},

	{
		title: "Weather-forecast",
		stack: "Javascript",
		description:
			"Websites which use weatherapi and responses the weather details in the searched city.",
		githubLink: "https://github.com/jaydattkaran/weather-forecast",
		vercelLink: "https://weather-forecast-karan.netlify.app/",
	},
	{
		title: "QR Generator",
		stack: "Javacript",
		description:
			"Website which calls the api and generates a QR for given data.",
		githubLink: "#",
		vercelLink: "https://qr-code-generator-karan.netlify.app/",
	},


];

const Project: React.FC = () => {
	return (
		<div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center'
		data-bgcolor="#ffffff"
		data-textcolor="#000000">
			<h1 className='text-white text-4xl lg:text-5xl font-bold  mt-12 '>
				Projects
			</h1>
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-slate-950 w-full min-h-screen '>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						stack={project.stack}
						description={project.description}
						githubLink={project.githubLink}
						vercelLink={project.vercelLink}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectCard: React.FC<{
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	vercelLink: string;
}> = ({ title, stack, description, githubLink, vercelLink }) => {
	return (
		<div className='bg-slate-950 rounded-xl  p-4 glow-border flex flex-col justify-center'>
			<h3 className='tracking-wider text-white text-3xl font-bold mb-2'>
				{title}
			</h3>
			<p className='tracking-wide text-gray-300 text-sm font-semibold opacity-60 mb-2 uppercase'>
				{stack}
			</p>
			<p className='tracking-wider text-white pr-6 font-medium'>
				{description}
			</p>
			<div className='mt-4 flex space-x-4'>
				<a
					href={githubLink}
					target='_blank'
					rel='noopener noreferrer'
					className=' tracking-wider bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600'>
					GitHub
				</a>
				<a
					href={vercelLink}
					target='_blank'
					rel='noopener noreferrer'
					className='tracking-wider border-purple-800 border-2  text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600 hover:border-purple-800'>
					Website
				</a>
			</div>
		</div>
	);
};

export default Project;
