type ColorScheme = "dark" | "light"

export function OSColorScheme(): ColorScheme {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"
  } else return "light"
}
