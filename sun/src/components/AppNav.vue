<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/">
                <img src="../assets/sun.png" alt="Sun logo">
            </router-link>

        </div>

        <div class="navbar-nav">
            <router-link to="/dashboard" class="nav-link" active-class="active">
            Dashboard
            </router-link>
            
        </div>

    </nav>
</template>

<style>
    .navbar {
        padding: 40px 30px 40px 30px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        margin-bottom: 50px;
    }

    .navbar-brand{
        height: 70%;
        float: left;
    }
    .navbar-nav {
        float: right;
        margin-right: 50px;
    }

    .nav-link{
        text-decoration: none;
        color: #2c3e50;
        padding: 15px;
        text-align: center;
    }

</style>
