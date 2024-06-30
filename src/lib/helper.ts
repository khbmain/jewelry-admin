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
