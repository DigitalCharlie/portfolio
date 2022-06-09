const workDisplay = document.getElementById('work-container')
const modal = document.getElementById('image-modal')
const modalImage = document.getElementById('modal-image')
const modalText = document.getElementById('modal-text')
const modalCloseButton = document.getElementById('close-modal')

// This is a pretty ugly function. If you read this and have some tips for a better way to go about this, hit me up. I love learning better practices.
const createWorkArticles = (projects) => {
	projects.forEach((project, idx) => {
		let projectToAdd = document.createElement('article')
		let imagesForAdding = project.images.map(image => `<img class="work-image" src=${image.image} alt="${image.description}"/>`)
		projectToAdd.classList.add(project.type, "project")
		projectToAdd.innerHTML = 
			`
			<div class="project-topline">
			<h3>${project.project}</h3>
			<p class="subheader">${project.role}</p>
			</div>
			<p class="project-text short" id=${`proj-desc-${idx}`}>${project.description}</p>
			${
				project.type.includes('software') ? `<p class="project-text"><span class="show-toggle" id=${`show-${idx}`}>Show the full description</span>, <a href="${project.site}" target="_blank">visit the site</a> or <a href="${project.github}" target="_blank">check out the project on Github</a></p>` : ''
			}
			${
				project.type === 'campaign' ? `<p class="project-text"><span class="show-toggle" href="" id=${`show-${idx}`}>Show the full description</span> or <a href="${project.news}" target="_blank">read the news coverage</a></p>` : ''
			}
			<div class="project-images">
				${imagesForAdding.join('')}
			</div>
			`
		workDisplay.appendChild(projectToAdd)
		document.getElementById(`show-${idx}`).addEventListener("click", ()=>toggleShow(idx))
	})
	const images = document.getElementsByClassName('work-image')
	for (const image of images) {
		image.addEventListener("click", (e)=>openModal(e))
	}
}

const toggleShow = (idx) => {
	console.log(idx)
	const desc = document.getElementById(`proj-desc-${idx}`)
	const toggle = document.getElementById(`show-${idx}`)
	if (desc.classList.contains('short')) {
		desc.classList.remove('short')
		toggle.innerText = "Hide full description"
	} else {
		desc.classList.add('short')
		toggle.innerText = "Show full description"
	}
}

const openModal = (img) => {
	modalImage.src = img.target.currentSrc
	modalText.innerHTML = img.target.alt
	modal.showModal()
}

const closeModal = () => {
	modal.setAttribute('closing', '')
	modal.addEventListener('animationend', () => {
		modal.removeAttribute('closing')
		modal.close()
	}, {once:true})
}

modal.addEventListener('click', (e) => {
	if(e.target.nodeName === 'DIALOG') {
		closeModal()
	}
})

modalCloseButton.addEventListener("click", closeModal)

createWorkArticles(pastWork)