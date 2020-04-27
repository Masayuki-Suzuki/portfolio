export default ({ route, redirect }) => {
    if (route.path !== '/' && route.path !== '/privacy-policy') {
        return redirect('/')
    }
}
