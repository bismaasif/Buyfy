export var categorizedproduct=(productarr)=>{
    //console.log(productarr);
    var categories=[];
    //loop over products
    var categoryname;
    var iscategoryexist;
    var newcategory;
    for (var product of productarr){
         categoryname=product.category;
        //loop over category array
         iscategoryexist=categories.some((categoryobj)=>categoryobj.category == categoryname)
        //check if it is present
        if(iscategoryexist){
            categories=categories.map((categoryobj)=>{
                if(categoryobj.category===categoryname){
                    categoryobj.products.push(product);
                    return categoryobj;
                }
                else{
                    return categoryobj;
                }
            })

        }
        //if category doesnt exist
        else{
             newcategory={
                category:product.category,
                products:[product]
            }
            categories.push(newcategory)
        }
    }
    //console.log(categories)
    return categories;
}
