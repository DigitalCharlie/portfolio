const workDisplay = document.getElementById('work-container')
const allWork = document.getElementById('all-work')
const campaignWork = document.getElementById('campaign-work')
const softwareWork = document.getElementById('software-work')

const createWorkArticles = (projects) => {
	projects.forEach((project) => {
		let projectToAdd = document.createElement('article')
		let imagesForAdding = project.images.map(image => `<img src=${image.image} alt=${image.description}/>`)
		projectToAdd.classList.add(project.type, "project")
		projectToAdd.innerHTML = 
			`
			<h1>${project.project}</h1>
			<p>${project.role}</p>
			<p>${project.description}</p>
			${
				project.type === 'software' ? `<p><a href="${project.github}" target="_blank">Check out the project on Github</a></p>` : ''
			}
			<div class="project-images">
				${imagesForAdding.join('')}
			</div>
			`
		workDisplay.appendChild(projectToAdd)
	})
}

const allFilter = () => {
	const allProjects = document.querySelectorAll(".project")
	for (const project of allProjects) {
		project.classList.remove("hidden")
	}
	allWork.classList.add("active-filter")
	campaignWork.classList.remove("active-filter")
	softwareWork.classList.remove("active-filter")
}

const campaignFilter = () => {
	const softwareExamples = document.querySelectorAll(".software")	
	for (const softwareExample of softwareExamples) {
		softwareExample.classList.add("hidden")
	}
	const campaignExamples = document.querySelectorAll(".campaign")
	for (const campaignExample of campaignExamples) {
		campaignExample.classList.remove("hidden")
	}
	allWork.classList.remove("active-filter")
	campaignWork.classList.add("active-filter")
	softwareWork.classList.remove("active-filter")
}

const softwareFilter = () => {
	const campaignExamples = document.querySelectorAll(".campaign")
	for (const campaignExample of campaignExamples) {
		campaignExample.classList.add("hidden")
	}
	const softwareExamples = document.querySelectorAll(".software")	
	for (const softwareExample of softwareExamples) {
		softwareExample.classList.remove("hidden")
	}
	allWork.classList.remove("active-filter")
	campaignWork.classList.remove("active-filter")
	softwareWork.classList.add("active-filter")
}

allWork.addEventListener("click", allFilter)
campaignWork.addEventListener("click", campaignFilter)
softwareWork.addEventListener("click", softwareFilter)

createWorkArticles(pastWork)