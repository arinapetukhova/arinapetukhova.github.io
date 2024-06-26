import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

class Params {
    atr = new URLSearchParams();
    append(emailWord, emailUni) {
        return this.atr.append(emailWord, emailUni);
    }
    toString() {
        return this.atr.toString();
    }
}

function Check(resp) {
    if (!resp.ok) {
        throw new Error('Network response was not ok');
    }
    return true;
}

let params = new Params();
dayjs.extend(relativeTime);
params.append('email', "a.petuhova@innopolis.university");
fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
    .then((response) => {
    if (Check(response)) {
        return response.json();
    }
})
    .then((data) => {
    let params2 = new Params();
    params2.append('id', data);
    fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
        .then((response) => {
        if (Check(response)) {
            return response.json();
        }
    })
        .then((data) => {
        let year = Number(data.year), month = Number(data.month), day = Number(data.day);
        const d = new Date(year, month, day);
        console.log(dayjs(d).fromNow());
        if (typeof document !== 'undefined') {
            const titleContainer = document.getElementById("title-container");
            const imageElement = document.createElement("img");
            imageElement.src = data.img;
            imageElement.alt = data.alt;
            const container = document.getElementById("image-container");
            container.appendChild(imageElement);
            const title = document.createElement("h1");
            title.textContent = data.safe_title;
            titleContainer.appendChild(title);
            const altText = document.createElement("p");
            altText.textContent = data.alt;
            const altContainer = document.getElementById("alt-container");
            altContainer.appendChild(altText);
            const finalDate = document.createElement("h3");
            finalDate.textContent = d.toLocaleDateString();
            titleContainer.appendChild(finalDate);
            const frNow = document.createElement("h4");
            frNow.textContent = dayjs(d).fromNow();
            titleContainer.appendChild(frNow);
        }
    })
        .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });
})
    .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
});
