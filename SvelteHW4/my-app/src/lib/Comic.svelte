<script lang="ts">
    import { Params } from "./params"; 
    import type { JSONValue } from "./jsonValue";
    import { Check } from "./check";
    import type { JSONArray } from "./jsonArray";
    import { formatDistance } from 'date-fns';

    let params: Params = new Params();
    let imageElement : HTMLImageElement
    let title : string
    let finalDate : string
    let frNow : string
    let altText : string
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
                    console.log(formatDistance(d, new Date()))
                    imageElement.src = data.img
                    title = data.safe_title
                    altText = data.alt
                    finalDate = d.toLocaleDateString()
                    frNow = formatDistance(d, new Date())
            })
            .catch((error: Error) => {
                console.error('There was a problem with the fetch operation:', error);
            })
    })
    .catch((error: Error) => {
        console.error('There was a problem with the fetch operation:', error)
    })
</script>

<h1>{title}</h1>
<h3>{finalDate}</h3>
<h4>{frNow}</h4>
<img bind:this={imageElement} alt={altText}/>
<p>{altText}</p>