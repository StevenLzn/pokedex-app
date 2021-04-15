import { GENERATIONS, LIMIT } from "../config/config";

export const checkLimitData  = (offset, gen) => {
    let limit = LIMIT;
    if(offset + limit > GENERATIONS[gen-1].endOffset){
        limit = GENERATIONS[gen-1].endOffset - offset;
    }

    return limit;
}