import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CiBookmark } from "react-icons/ci";
import { Badge } from "@/components/ui/badge"
import { ChangeEvent, FormEvent, useState } from "react";

const WordCard = ({ definition, partOfSpeech, example, synonyms, query }: any) => {
  const [input, setInput] = useState<string>('')
  const [note, setNote] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    setNote(input)
    setInput('')
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <h3>{query}</h3>
              <div className="flex items-center gap-x-2">
                <p className="text-base">{partOfSpeech}</p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline"><CiBookmark /></Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Save this word to your wordbook</AlertDialogTitle>
                      <Input onChange={handleChange} />
                      <AlertDialogDescription>
                        You can save this word along with your note. You can also leave this blank.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleClick}>Save</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardTitle>
          
          

        </CardHeader>
        <CardContent>
          <p>{definition}</p>
          {example ? <p>ex. {example}</p> : ''}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="text-md font-semibold mb-1.5">Synonyms</h3>
          <div className="flex gap-2">
          {synonyms? (
            synonyms.map((synonym: string, index: number) => <Badge variant="secondary" key={index}>{synonym}</Badge>)
          ) : (
            <Badge variant="secondary">Not Found</Badge>
          )}
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default WordCard