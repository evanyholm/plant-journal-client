export const handleRouteParams = (routeParams: any, key: string): string => {
    const {match: {params}} = routeParams;
    return params[key]
}

