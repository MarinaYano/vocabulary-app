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

const WordCard = ({ definition, partOfSpeech, example, synonyms, query }: any) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{query}</CardTitle>
          <p>{partOfSpeech}</p>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline"><CiBookmark /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Save this word to your wordbook</AlertDialogTitle>
                <Input className="mx-2" />
                <AlertDialogDescription>
                  You can save this word with your note.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Save</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </CardHeader>
        <CardContent>
          <p>{definition}</p>
          {example ? <p>ex. {example}</p> : ''}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="text-md font-semibold mb-1.5">Synonyms</h3>
          <div className="flex gap-2">
          {synonyms 
          ? (synonyms.map((synonym: string, index: number) => <Badge variant="secondary" key={index}>{synonym}</Badge>)) 
          : (<Badge variant="secondary">Not Found</Badge>
          )}
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default WordCard