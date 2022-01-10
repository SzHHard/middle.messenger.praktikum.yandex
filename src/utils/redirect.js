export const RedirectPathnameHOF = (pathname) => {
    return () => {
        return window.location.pathname = pathname;
    }
}