import { classnames } from "../../utils/classnames";
import { useTime } from "./use-time";

export function TimeDisplay() {
  const t = useTime({ format: "MMM. do • HH:mm:ss" });
  const isServer = typeof window === "undefined";

  return (
    <div
      class={classnames(
        "fixed bottom-12 right-12 transition-opacity duration-200",
        isServer ? "opacity-0" : "opacity-1",
      )}
    >
      <h1 className="text-7xl text-end select-none font-black">{t.greeting}</h1>
      <h2 className="text-5xl text-end select-none mt-5 font-bold">{t.formattedTime}</h2>
    </div>
  );
}
