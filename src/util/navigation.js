const redirectTo = (target, domain = 'internal') => {
    switch(domain){
        case 'internal': return window.location.pathname = target;
        case 'external': return window.location.href = target;
        default: return window.location.href = target;
    }
}

export { redirectTo };