const workDisplay = document.getElementById('work-container')

const createWorkArticles = (projects) => {
	projects.forEach((project) => {
		let projectToAdd = document.createElement('article')
		let imagesForAdding = project.images.map(image => `<img class="work-image" src=${image.image} alt=${image.description}/>`)
		projectToAdd.classList.add(project.type, "project")
		projectToAdd.innerHTML = 
			`
			<div class="project-topline">
			<h3>${project.project}</h3>
			<p class="subheader">${project.role}</p>
			</div>
			<p>${project.description}</p>
			${
				project.type === 'software' ? `<p><a href="${project.github}" target="_blank">Visit the site</a> or <a href="${project.github}" target="_blank">check out the project on Github</a></p>` : ''
			}
			${
				project.type === 'campaign' ? `<p><a href="${project.github}" target="_blank">Read news coverage of the ${project.project}</a></p>` : ''
			}
			<div class="project-images">
				${imagesForAdding.join('')}
			</div>
			`
		workDisplay.appendChild(projectToAdd)
	})
}


createWorkArticles(pastWork)