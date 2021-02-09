const fs = require('fs')

function importDataBase (){
    const brokenDataBase = require('./broken-database.json')
    return brokenDataBase
} 

function exportDataBase(dataBase) { 
    const jsonDataBase = JSON.stringify(dataBase)

    fs.writeFile('saida.json', jsonDataBase, function(err) {
        if (err){
            console.log(err)
        }
    })
}

function fixId (id){
    if (Number(id) < 0 && Number(id) > Infinity) {
        console.log('error')
    }
    return id
}

function fixName (name){
    const newName = name.replace(/\æ/g, 'a')
    .replace(/\¢/g, 'c')
    .replace(/\ø/g, 'o')
    .replace(/\ß/g, 'b')
    return newName
}

function fixPrice (price){
    const newPrice = Number(price)

    if (isNaN(newPrice)) {
        return 0
    }
    return newPrice
}

function fixQuantity (quantity){
    if (quantity != null && quantity != undefined){
        return quantity
    }
    const newQuantity = 0
    return newQuantity
}

function fixCategory (category){
    if (category != null && category != undefined && category.length > 0){
        return category
    }
    const newCategory = "default"
    return newCategory
}

function sortDataBase (dataBase) {
    dataBase.sort(sortDataBaseByCategory).sort(sortDataBaseById)
    const sortedDataBase = dataBase.map(getNames) 

    console.log(sortedDataBase)
}

function sortDataBaseByCategory(a, b) {
    if (a.id < b.id) {
        return -1 
    } 
    if (a.id > b.id){
        return 1
    } 
    return 0 
}

function sortDataBaseById(a, b) {
    if (a.category < b.category) {
        return -1 
    } 
    if (a.category > b.category){
        return 1
    } 
    return 0 
}

function getNames(product) {
    return product.name
}

function calculateAmount(dataBase) {
    const categoryAmount = {}

    for (let i = 0; i < dataBase.length; i++) {
        const product = dataBase[i]

        const amount = product.quantity * product.price
        
        if (categoryAmount[product.price]) {
            calculateAmount[product.price] += amount
        } else {
            categoryAmount[product.category] = amount
        }
    }
    console.log(categoryAmount)
}

function main(){
    const dataBase = importDataBase()

    for(let i = 0; i < dataBase.length; i++) {
        const product = dataBase[i]

        product.id = fixId(product.id)
        product.name = fixName(product.name)
        product.price = fixPrice(product.price)
        product.quantity = fixQuantity(product.quantity)
        product.category = fixCategory(product.category)
    }
    exportDataBase(dataBase)
    
    sortDataBase(dataBase)
    calculateAmount(dataBase)
}

main()