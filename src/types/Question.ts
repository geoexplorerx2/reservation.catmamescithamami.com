import ToggleOptionType from "./ToggleOptionsType";

export default interface Question {
    title: string,
    subtitle: string,
    options: ToggleOptionType[],
    needsExplanation?: boolean,
    id: string
  }