import { useMutation } from "react-query";
import FadeIn from "./vend/FadeIn";
import { toast } from "sonner";
import { useApi } from "@mood/api";

const MOODS = [
  "Ecstatic",
  "Joyful",
  "Happy",
  "Amazed",
  "Gleeful",
  "Grateful",
  "Proud",
  "Confident",
  "Excited",
  "Amused",
  "Passionate",
  "Hopeful",
  "Content",
  "Relieved",
  "Peaceful",
  "Calm",
  "Satisfied",
  "Giddy",
  "Indifferent",
  "Anxious",
  "Worried",
  "Disappointed",
  "Frustrated",
  "Annoyed",
  "Embarrassed",
  "Ashamed",
  "Jealous",
  "Irritated",
  "Sad",
  "Lonely",
  "Guilty",
  "Scared",
  "Overwhelmed",
  "Angry",
  "Stressed",
  "Discouraged",
  "Disgusted",
  "Hopeless",
  "Drained",
  "Rageful",
] as const;

export function MoodGrid() {
  return (
    <FadeIn
      className="grid aspect-auto grid-cols-2 gap-4 md:grid-cols-4"
      delay={25}
      transitionDuration={1500}
    >
      {MOODS.map((mood) => (
        <MoodCard
          key={mood}
          mood={mood}
          image={`/mood/${mood.toLowerCase()}.webp`}
        />
      ))}
    </FadeIn>
  );
}

function MoodCard(props: { mood: string; image: string }) {
  const { logMood } = useApi().mutations;
  const { mutate } = useMutation({
    mutationFn: logMood,
    onError: (error) => {
      toast.error((error as Error).message);
    },
    onSuccess: () => {
      toast("Logged mood!");
    },
  });

  return (
    <div
      onClick={() => {
        mutate(props.mood);
      }}
      className="group relative max-w-[1024px] cursor-pointer overflow-hidden rounded-xl shadow-xl transition-transform duration-500 ease-in-out hover:translate-x-1 hover:translate-y-2 hover:shadow-xl"
    >
      <div className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-2 group-hover:scale-110">
        <img
          className="max-h-64 w-full grow object-cover"
          alt={props.mood}
          src={props.image}
          height="100%"
          width="100%"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-transparent to-30% opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-0" />
      <div className="absolute inset-0 flex items-end justify-start p-4">
        <h3 className="sm:text-md font-bold text-slate-100 transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-2 group-hover:text-transparent">
          {props.mood}
        </h3>
      </div>
    </div>
  );
}
