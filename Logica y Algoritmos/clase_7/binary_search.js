const binarySearch = (arr, target, low, high) => {

    if (low > high) {
        return -1 //"No se encontro el valor"
    }

    let mid = Math.floor((low + high) / 2)

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return bynarySearch(arr, target, low, mid - 1)
    } else {
        return bynarySearch(arr, target, mid + 1, high)
    }


}

let myarr=[442,478,503,511,546,620,645,715,723]
let result=binarySearch(myarr,503,0,myarr.length-1)
console.log(result)