export const importAllImages = (r) =>{
    let images = {};
    let idx = 0;
    r.keys().forEach(element=>{
        console.log(r(element))
        images[element.replace(/(\.\/)\w+(\.)(png|jpe?g)/g,idx++)] = r(element)
    });
    return images;
}