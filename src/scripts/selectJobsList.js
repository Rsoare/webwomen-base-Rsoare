function salveLocalStorage(item) {
    const localStorage1 = localStorage.setItem('@webwomen:selectList', JSON.stringify(item))
    return localStorage1
}



function localStorageArray(jobSelect) {
    
    const localStorage0 = JSON.parse(localStorage.getItem('@webwomen:selectList')) || []

    localStorage0.push(jobSelect)

    renderClickJobsList(localStorage0)

    salveLocalStorage(localStorage0)


}



function renderClickJobsList(Jobslist) {

    const ulAside = document.querySelector('.aside__list--container')

    ulAside.innerHTML = ""

    Jobslist.forEach(job => {

        const renderJob = createSelectJobs(job)

        ulAside.appendChild(renderJob)
    });
}

function renderJobsList() {
    const localStorage0 = JSON.parse(localStorage.getItem('@webwomen:selectList')) || []
    renderClickJobsList(localStorage0)
}

function removeJobsList(idButton) {
    const localStorage0 = JSON.parse(localStorage.getItem('@webwomen:selectList')) || []

    const buttons = document.querySelectorAll('.item__button')

    const liFavorite = document.querySelectorAll('.aside__list--item')

    const indexJobs = localStorage0.findIndex(job => job.id == idButton)

    localStorage = localStorage0.splice(indexJobs, 1)

    liFavorite.forEach(li => {
        const liId = li.dataset.id

        if (liId == idButton) {

            li.remove()
        }
    })

    salveLocalStorage(localStorage0)
}

function createSelectJobs(favoriteList) {

    const liFavorite = document.createElement("li")
    const divTitleFavorite = document.createElement("div")
    const h2Favorite = document.createElement("h2")
    const iconFavorite = document.createElement("i")
    const divCityFavorite = document.createElement("div")
    const spanFavorite0 = document.createElement("span")
    const spanFavorite1 = document.createElement("span")

    liFavorite.classList.add("aside__list--item")
    divTitleFavorite.classList.add("aside__title--container")
    iconFavorite.classList.add("fa-solid", "fa-trash")
    divCityFavorite.classList.add("aside__tag--container")

    h2Favorite.innerText = favoriteList.title
    spanFavorite0.innerText = favoriteList.enterprise
    spanFavorite1.innerText = favoriteList.location

    iconFavorite.dataset.id = favoriteList.id

    liFavorite.dataset.id = favoriteList.id

    divTitleFavorite.append(h2Favorite, iconFavorite)
    divCityFavorite.append(spanFavorite0, spanFavorite1)

    liFavorite.append(divTitleFavorite, divCityFavorite)

    iconFavorite.addEventListener('click', (event) => {
        const buttonList = document.querySelectorAll('.item__button--remove')

        const buttonId = event.target.dataset.id

        buttonList.forEach(button => {
            if (button.dataset.id == buttonId) {
                button.innerText = 'Candidatar'
                button.classList.toggle('item__button')
                button.classList.toggle('item__button--remove')
            }
        })
        removeJobsList(buttonId)
    })

    return liFavorite
}

renderJobsList()
