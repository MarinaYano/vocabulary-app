import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import WordCard from "@/components/WordCard";

export type WordDefinition = {
  definition: string;
  partOfSpeech: string;
  example: string[];
  synonyms: string[];
}

const Home = () => {
  const [input, setInput] = useState<string>('')
  const [query, setQuery] = useState<string>('vocabulary')
  const [results, setResults] = useState<WordDefinition[]>([{
    definition: '',
    partOfSpeech: '',
    example: [''],
    synonyms: [''],
  }])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchWord = async (word: string) => {
      const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_WORDS_API_KEY as string,
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
      };
  
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);

        setResults(data.results.map((data: any) => ({
          definition: data.definition,
          partOfSpeech: data.partOfSpeech,
          example: data.examples,
          synonyms: data.synonyms,
        })))

        setError(false)
      } catch (error) {
        console.error(error);
        setError(true)
      }
    }

    fetchWord(query)
  }, [query])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setInput('')
    setQuery(input)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="py-0.5 px-5 rounded max-w-sm my-6 mx-auto flex justify-between outline-none">
        <Input className="mx-2" onChange={handleChange} />
        <Button type="submit"><FiSearch /></Button>
      </form>

      {error ? (
        <div>Not Found</div>
      ) : (
        <div className="w-1/2 my-0 mx-auto space-y-6 text-left">
          {results.map((result:any, index: any) => (
            <WordCard
              definition={result.definition}
              partOfSpeech={result.partOfSpeech}
              example={result.example}
              synonyms={result.synonyms}
              key={index} query={query}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Home