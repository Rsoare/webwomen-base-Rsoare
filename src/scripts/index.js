function renderLists(jobs) {
    const ulLists = document.querySelector(".list__container")

    jobs.forEach(job => {
        const createList = createLists(job)
        ulLists.appendChild(createList)
    })
    localStorage.setItem('@webwomen:jobsList',JSON.stringify(jobs))
}

function createLists(jobs) {
    const liList = document.createElement("li")
    const h2List = document.createElement("h2")

    const divListCity = document.createElement("div")
    const spanCityList0 = document.createElement("span")
    const spanCityList1 = document.createElement("span")

    const pList = document.createElement("p")

    const divListTag = document.createElement("div")
    const spanTagList0 = document.createElement("span")
    const spanTagList1 = document.createElement("span")

    const buttonList = document.createElement("button")

    liList.classList.add("list__item--container")
    h2List.classList.add("item__title")
    divListCity.classList.add("item__city--container")
    pList.classList.add("item__text")
    divListTag.classList.add("item__tag--container")
    buttonList.classList.add("item__button")

    h2List.innerText = jobs.title

    spanCityList0.innerText = jobs.enterprise
    spanCityList1.innerText = jobs.location

    pList.innerText = jobs.descrition

    spanTagList0.innerText = jobs.modalities[0]
    spanTagList1.innerText = jobs.modalities[1]

    buttonList.innerText = "Candidatar"
    buttonList.dataset.id = jobs.id

    divListCity.append(spanCityList0, spanCityList1)
    divListTag.append(spanTagList0, spanTagList1)
    liList.append(h2List, divListCity, pList, divListTag, buttonList)


    return liList
}

renderLists(jobsData)