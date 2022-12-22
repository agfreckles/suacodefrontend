export const truncate = (str) => {
    return str.length > 80 ? str.substring(0, 150) + "   ..  . . ." : str;
}
export const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };