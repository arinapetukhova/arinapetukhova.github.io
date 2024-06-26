import { Params } from "./params"; 
import { JSONValue } from "./jsonValue";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Check } from "./check";
import { JSONArray } from "./jsonArray";

let params: Params = new Params();
dayjs.extend(relativeTime);
params.append('email', "a.petuhova@innopolis.university");
fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
    .then((response: Response) => {
        if (Check(response)) {
            return response.json()
        }
    })
    .then((data: JSONValue) => {
        let params2: Params = new Params()
        params2.append('id', data)
        fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
            .then((response: Response) => {
                if (Check(response)) {
                    return response.json()
                }
            })
            .then((data: JSONArray) => {
                let year: number = Number(data.year), month: number = Number(data.month), day: number = Number(data.day)
                const d: Date = new Date(year, month, day)
                console.log(dayjs(d).fromNow())
                if (typeof document !== 'undefined') {
                    const titleContainer = document.getElementById("title-container") as HTMLElement
                    const imageElement = document.createElement("img") as HTMLImageElement
                    imageElement.src = data.img
                    imageElement.alt = data.alt
                    const container = document.getElementById("image-container") as HTMLElement
                    container.appendChild(imageElement)

                    const title = document.createElement("h1") as HTMLHeadingElement
                    title.textContent = data.safe_title
                    titleContainer.appendChild(title)

                    const altText = document.createElement("p") as HTMLParagraphElement
                    altText.textContent = data.alt
                    const altContainer = document.getElementById("alt-container") as HTMLElement
                    altContainer.appendChild(altText)

                    const finalDate = document.createElement("h3") as HTMLHeadingElement
                    finalDate.textContent = d.toLocaleDateString()
                    titleContainer.appendChild(finalDate)
                    const frNow = document.createElement("h4") as HTMLHeadingElement
                    frNow.textContent = dayjs(d).fromNow()
                    titleContainer.appendChild(frNow)
                 }
            })
            .catch((error: Error) => {
                console.error('There was a problem with the fetch operation:', error);
            })
    })
    .catch((error: Error) => {
        console.error('There was a problem with the fetch operation:', error)
    })