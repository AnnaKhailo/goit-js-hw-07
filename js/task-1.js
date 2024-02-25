const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const numberOfCategoryItems = item.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfCategoryItems}`);
})

