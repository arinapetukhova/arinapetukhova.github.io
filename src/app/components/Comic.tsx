'use client'
import { useEffect, useState } from 'react'
import { Check } from './check'
import { formatDistance } from 'date-fns'

const Comic = () => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(
    null,
  )
  const [title, setTitle] = useState<string>('')
  const [finalDate, setFinalDate] = useState<string>('')
  const [frNow, setFrNow] = useState<string>('')
  const [altText, setAltText] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams()
      params.append('email', 'a.petuhova@innopolis.university')
      try {
        const response1 = await fetch(
          `https://fwd.innopolis.university/api/hw2?${params.toString()}`,
        )
        if (Check(response1)) {
          const data1 = await response1.json()
          const params2 = new URLSearchParams()
          params2.append('id', data1)
          try {
            const response2 = await fetch(
              `https://fwd.innopolis.university/api/comic?${params2.toString()}`,
            )
            if (Check(response2)) {
              const data2 = await response2.json()
              const year = Number(data2.year)
              const month = Number(data2.month)
              const day = Number(data2.day)
              const d = new Date(year, month, day)
              console.log(formatDistance(d, new Date()))
              setImageElement((prev) => {
                if (prev) prev.src = data2.img
                return prev
              })
              setTitle(data2.safe_title)
              setAltText(data2.alt)
              setFinalDate(d.toLocaleDateString())
              setFrNow(formatDistance(d, new Date()))
            }
          } catch (error) {
            console.error(
              'There was a problem with the fetch operation:',
              error,
            )
          }
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h1 className="font-sans mt-10 text-5xl bold">{title}</h1>
      <h3 className="text-2xl bold mt-6">{finalDate}</h3>
      <h4>{frNow}</h4>
      <img ref={setImageElement} alt={altText} />
      <p className="mt-6">{altText}</p>
    </>
  )
}

export default Comic
