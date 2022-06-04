const allWork = document.getElementById('all-work')
const campaignWork = document.getElementById('campaign-work')
const softwareWork = document.getElementById('software-work')

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