import Habit from "./Habit";

export default function Habits({ habits, setHabits }) {
  return (
    <>
      {habits
        ? habits.map((h) => (
            <Habit
              key={h.id}
              name={h.name}
              id={h.id}
              currentSequence={h.currentSequence}
              highestSequence={h.highestSequence}
              done={h.done}
              setHabits={setHabits}
            />
          ))
        : ""}
    </>
  );
}
