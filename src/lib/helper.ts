export function decodeJWT(token: string) {
  try {
    return JSON.parse(
      decodeURIComponent(
        window
          .atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(''),
      ),
    );
  } catch {
    return {};
  }
}

export function toTugrik(value: number): string {
  // Convert the integer to a string with commas as thousands separators
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Append the Tugrik symbol
  return `${formattedValue} ₮`;
}
