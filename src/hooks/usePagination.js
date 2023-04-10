import {useMemo} from "react";

export const usePagination = (total) => {
    return useMemo(() => {
        return Array.from({length: total}, (_, i) => i + 1)
    }, [total])
}