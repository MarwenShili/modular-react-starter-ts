export const adjustColor = (color: string, opacity: number): string => {
  // Remove any leading #
  const hex = color.replace('#', '')

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Return rgba value
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
