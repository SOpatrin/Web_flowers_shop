<header>
    <div class="container-fluid">
        <div class="row top-panel">
            <div class="col-sm-12 col-lg-6 d-none d-sm-flex align-self-center justify-content-center">
                <div class="top-panel__left d-flex">
                    <span class="top-panel__left__label text-nowrap">+7(999)123-56-78</span>
                    <span class="top-panel__left__text text-nowrap">7 дней в неделю с 9:00 до 19:00</span>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-lg-6 top-panel__right">
                <nav class="navbar navbar-expand-sm navbar-light justify-content-end">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleTopNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center align-self-start" id="collapsibleTopNavbar">
                        <ul class="top-panel__menu navbar-nav">
                            <li class="nav-item">
                                <a href="" class="nav-link text-left text-nowrap">Оплата</a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link text-left text-nowrap">Статус заказа</a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link text-left text-nowrap">О нас</a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link text-left text-nowrap">Контакты</a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/cart.php" class="nav-link text-left text-nowrap">Корзина</a>
                            </li>
                            <li id="profile" class="nav-item">
                                <!--login/profile-->
                                <?php $root = $_SERVER['DOCUMENT_ROOT']; include("$root/scripts/auth.php"); ?>  
                                <!--login modal-->
                                <div id="login" class="modal" tabindex="-1" role="dialog">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Войти</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form class="form" id="auth" action="/scripts/auth.php">
                                                    <div class="form-group">
                                                        <label for="login-email">E-mail</label>
                                                        <input class="form-control" type="email" name="email" id="login-email">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="login-password">Пароль</label>
                                                        <input class="form-control" type="password" name="password" id="login-password">
                                                        <a class="ml-autoform float-right" href="">Забыли пароль?</a>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <a id="registration-link" class="mr-auto" href="">Регистрация</a>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                                <button type="submit" class="btn btn-primary" form="auth">Войти</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--login modal-->
                                <!--registration modal-->
                                <div id="registration" class="modal" tabindex="-1" role="dialog">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Регистрация</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form class="form" id="reg" action="/scripts/reg.php">
                                                    <div class="form-group">
                                                        <label for="registration-name">Имя</label>
                                                        <input class="form-control" type="text" name="name" id="registration-name">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="registration-email">E-mail</label>
                                                        <input class="form-control" type="email" name="email" id="registration-email">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="registration-password">Пароль</label>
                                                        <input class="form-control" type="password" name="password" id="registration-password">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="registration-password-apply">Подтвердите пароль</label>
                                                        <input class="form-control" type="password" name="passwordApply" id="registration-password-apply">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="registration-phone-number">Телефон</label>
                                                        <input class="form-control bfh-phone" data-format="+7 (ddd) ddd-dddd" type="tel" name="phoneNumber" id="registration-phone-number">
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                                <button type="submit" class="btn btn-primary" form="reg">Зарегистрироваться</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--registration modal-->
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row main-panel">
            <div class="col-xl-12 main-panel__left align-self-center">
                <div class="logo-wrapper">
                    <a href="/index.php">
                        <img src="https://ld-wp.template-help.com/woocommerce_64038_v1/wp-content/themes/amaryllis/assets/images/logo.png" alt="logo">
                    </a>
                </div>
            </div>
            <div class="col-xl-6 offset-xl-3 main-panel__center align-self-center">
                <nav class="navbar navbar-expand-sm justify-content-center">
                    <ul class="main-panel__menu navbar-nav">
                        <li class="nav-item">
                            <a href="" class="nav-link text-dark">Цветы</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link text-dark">К празднику</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link text-dark">Горшечные растения</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link text-dark">Подарки</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-xl-3 main-panel__right d-flex align-self-center">
                <form action="submit">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Поиск" id="search-input">
                        <div class="input-group-append search-button">
                            <button class="btn btn-secondary" type="button"><span class="fa fa-search"></span></button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</header>
