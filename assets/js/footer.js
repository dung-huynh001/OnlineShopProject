const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="./assets/image/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">man</li>
                    <li><a href="" class="footer-link">t-shirts</a></li>
                    <li><a href="" class="footer-link">sweatshirts</a></li>
                    <li><a href="" class="footer-link">shirts</a></li>
                    <li><a href="" class="footer-link">jean</a></li>
                    <li><a href="" class="footer-link">trousers</a></li>
                    <li><a href="" class="footer-link">shoes</a></li>
                    <li><a href="" class="footer-link">casuals</a></li>
                    <li><a href="" class="footer-link">formals</a></li>
                    <li><a href="" class="footer-link">sports</a></li>
                    <li><a href="" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="" class="footer-link">t-shirts</a></li>
                    <li><a href="" class="footer-link">sweatshirts</a></li>
                    <li><a href="" class="footer-link">shirts</a></li>
                    <li><a href="" class="footer-link">jean</a></li>
                    <li><a href="" class="footer-link">trousers</a></li>
                    <li><a href="" class="footer-link">shoes</a></li>
                    <li><a href="" class="footer-link">casuals</a></li>
                    <li><a href="" class="footer-link">formals</a></li>
                    <li><a href="" class="footer-link">sports</a></li>
                    <li><a href="" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">can tho university</p>
        <p class="info">emails - dungb1906640@gmail.com, student emails - dungB1906640@student.ctu.edu.vn</p>
        <p class="info">phone number - 076573853</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-links">terms and sevices</a>
                <a href="#" class="social-links">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-links">instagram</a>
                <a href="#" class="social-links">facebook</a>
                <a href="#" class="social-links">zalo</a>
            </div>
            <p class="footer-credit">Clothing - Best Apparels Online Store</p>
        </div>
    `;
}

createFooter();