import {useDark,useToggle } from "@vueuse/core";

export const isDark = useDark();
export const toggleMode = useToggle(isDark);