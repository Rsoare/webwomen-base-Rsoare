
function getLocalStorageList() {
    return JSON.parse(localStorage.getItem('@webwomen:jobsList'))
}


function SelectJobs(listJobs) {
    const ulAside = document.querySelector(".aside__list--container")
    const buttonsAddJobs = document.querySelectorAll(".item__button")
    const getJobslistLocal = JSON.parse(localStorage.getItem('@kenzieBook:favBooks')) || []

    buttonsAddJobs.forEach(button => {

        button.addEventListener('click', (event) => {

            const jobSelect = listJobs.find(job => job.id === Number(event.target.dataset.id))

            getJobslistLocal.push(jobSelect)

            localStorage.setItem('@kenzieBook:favBooks', JSON.stringify(getJobslistLocal))

            const setJobsRender = createSelectJobs(jobSelect)
            ulAside.appendChild(setJobsRender)

        })
    })
    renderJobs(getJobslistLocal)
    removeSelectJobs(getJobslistLocal)
}

function renderJobs(listJobs) {
    const ulAside = document.querySelector(".aside__list--container")

    listJobs.forEach(job => {
        const renderJob = createSelectJobs(job)
        ulAside.appendChild(renderJob)
    });
}


function removeSelectJobs(jobsList) {
    const removeButton = document.querySelectorAll(".fa-trash")
    const liRemove = document.querySelectorAll(".aside__list--item")

    removeButton.forEach((button, index) => {
        button.addEventListener('click', (event) => {

            jobsList.filter(job => {
                if (job.id === Number(event.target.dataset.id)) {
                    liRemove[index].remove()

                    const indexJobs = jobsList.indexOf(job)

                    jobsList.splice(indexJobs, 1)


                    localStorage.setItem('@kenzieBook:favBooks', JSON.stringify(jobsList))

                }
            })
        })
    });
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

    divTitleFavorite.append(h2Favorite, iconFavorite)
    divCityFavorite.append(spanFavorite0, spanFavorite1)


    liFavorite.append(divTitleFavorite, divCityFavorite)

    return liFavorite
}

SelectJobs(getLocalStorageList())