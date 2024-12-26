let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function mainMenu() {
    const choice = prompt("1-Blog Ekleme\n2-Blog Listeleme");
    if (choice == 1) {
        return addBlog();
    } else if (choice == 2) {
        return listBlog();
    }
}
mainMenu()

function addBlog() {
    const name = prompt("İsminizi giriniz.");
    const surname = prompt("Soyisminizi giriniz.");
    const blogTitle = prompt("Blog başlığını giriniz.");
    const blogPost = prompt("Blog yazısını giriniz.");
    blogs.push(
        {
            name,
            surname,
            blogTitle,
            blogPost
        }
    )
    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Blog başarıyla eklendi");
    return mainMenu();
}

function listBlog() {

    const titleView = blogs.map((blog, index) => `${index + 1} Blog Başlığı: ${blog.blogTitle}`).join("\n");

    const blogView = prompt(`Görmek istediğiniz bloğun başlığını giriniz.\n ${titleView}`).toLocaleLowerCase("tr");

    const findBlog = blogs.findIndex(blog => blog.blogTitle.toLocaleLowerCase("tr") === blogView);

    if (findBlog === -1) {
        alert("Böyle bir blog bulunamadı.");
    } else {
        const selectedBlog = blogs[findBlog];
        alert(`Blog Başlığı: ${selectedBlog.blogTitle}\nYazar: ${selectedBlog.name} ${selectedBlog.surname}\nBlog Yazısı: ${selectedBlog.blogPost}`);
    }
    return mainMenu();
}            