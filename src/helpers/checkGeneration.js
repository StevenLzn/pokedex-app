import { GENERATIONS } from "../config/config";

export const checkGeneration = (offset, gen) => {
    let checkGen = false;
    if(offset == GENERATIONS[gen-1].endOffset){
        checkGen = true;
    }
    return checkGen;
}