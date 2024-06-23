import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

function StoryWriter() {
  return (
    <div className="flex flex-col container">
      <section className="flex-1 flex flex-col space-y-2 border border-purple-300 p-10 rounded-lg">
        <Textarea className="flex-1 text-black" placeholder="Write a story about a robot and a human who become friends..." />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="How many pages should the story be?" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i} value={String(i + 1)}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="w-full" size={"lg"}>Generate Story</Button>
      </section>

      <section className="flex-1 pb-5 mt-5 bg-green-100"></section>
    </div>
  );
}

export default StoryWriter;
