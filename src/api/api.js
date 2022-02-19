

export const getRequest = (url,method,body = null) =>{
    return fetch(url,{
        method:method,
        body:body
    }).then((response)=>{
        return response.json()
    }).catch((error)=>{
        console.log(error)
    })
}


// Request real Example
export const requestExample = (url, method, body = null, formData = false) => {
    const headers = {}
    if (!formData) {
        headers['Content-type'] = 'application/json; charset = utf-8';
    }
    return fetch('url ', {
        method,
        url,
        body
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            throw err
        })
}