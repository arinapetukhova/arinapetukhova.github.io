const params = new URLSearchParams();
params.append('email', "a.petuhova@innopolis.university")
console.log('https://fwd.innopolis.university/api/hw2?' + params.toString())
fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const params2 = new URLSearchParams()
        params2.append('id', data)
        fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then(data => {
                let year, month, day
                const titleContainer = document.getElementById("title-container")
                for (var key in data) {
                    if (key === "img") {
                        console.log(data[key])
                        const imageElement = document.createElement("img")
                        imageElement.src = data[key]
                        const container = document.getElementById("image-container")
                        container.appendChild(imageElement)
                    } else if (key === "safe_title") {
                        const title = document.createElement("h1")
                        title.textContent = data[key]
                        titleContainer.appendChild(title)
                    } else if (key === "year") {
                        year = data[key]
                    } else if (key === "month") {
                        month = data[key]
                    } else if (key === "day") {
                        day = data[key]
                    } else if (key === "alt") {
                        const altText = document.createElement("p")
                        altText.textContent = data[key]
                        const altContainer = document.getElementById("alt-container")
                        altContainer.appendChild(altText)
                    }
                }
                const d = new Date(year, month, day)
                const finalDate = document.createElement("h4")
                finalDate.textContent = d.toLocaleDateString()
                titleContainer.appendChild(finalDate)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    })