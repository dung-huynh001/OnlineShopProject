const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="./assets/image/dark-logo.png" alt="" class="brand-logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="./assets/image/user.png" alt=""></a>
            <a href="#"><img src="./assets/image/cart.png" alt=""></a>                
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="" class="link">home</a></li>
        <li class="link-item"><a href="" class="link">women</a></li>
        <li class="link-item"><a href="" class="link">man</a></li>
        <li class="link-item"><a href="" class="link">kids</a></li>
        <li class="link-item"><a href="" class="link">accessories</a></li>
    </ul>
    `;
}

createNav();