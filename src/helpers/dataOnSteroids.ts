import { __prod__ } from "../constants";
import { delay } from "./delay";

export function dataOnSteroids(data: any) {
  if (__prod__) {
    return data;
  } else {
    const delayedData = delay(150, data);
    return delayedData;
  }
}