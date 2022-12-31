
function renameButton(listJobs) {
    const buttons = document.querySelectorAll('.item__button')

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {

            const buttonId = button.dataset.id

            const jobSelect = listJobs.find(job => job.id === Number(event.target.dataset.id))
            
            if (button.classList.contains('item__button')) {
                
                button.innerText = 'Remover Candidatura'
                button.classList.toggle('item__button')
                button.classList.toggle('item__button--remove')
                
                localStorageArray(jobSelect)
                
            } else {
                button.innerText = 'Candidatar'
                button.classList.toggle('item__button')
                button.classList.toggle('item__button--remove')

                removeJobsList(buttonId)
            }
        })
    })
}
renameButton(jobsData)