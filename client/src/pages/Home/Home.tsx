import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { CiBookmark } from "react-icons/ci";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchWord = async () => {
      const url = 'https://wordsapiv1.p.rapidapi.com/words/vocabulary';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_WORDS_API_KEY as string,
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWord()
  }, [])

  return (
    <>
      <form action="" className="py-0.5 px-5 rounded max-w-sm my-6 mx-auto flex justify-between outline-none">
        <Input className="mx-2" />
        <Button type="submit"><FiSearch /></Button>
      </form>

      <div className="w-1/2 my-0 mx-auto space-y-6 text-left">
        <Card>
          <CardHeader>
            <CardTitle>Vocabulary</CardTitle>
            <CiBookmark />
          </CardHeader>
          <CardContent>
            <p>the body of words used in a particular language.</p>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <h3 className="text-md font-semibold mb-1.5">Synonyms</h3>
            <div className="flex gap-2">
              <Badge variant="secondary">dictionary</Badge>
              <Badge variant="secondary">jargon</Badge>
              </div>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Home