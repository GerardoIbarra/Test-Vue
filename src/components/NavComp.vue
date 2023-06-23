<template>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container justify-content-evenly">

            <RouterLink to="/TodoList" class="nav-link active" aria-current="page">
                <span class="material-icons-outlined">
                    fact_check
                </span>
            </RouterLink>

            <RouterLink to="/Timer" class="nav-link active" aria-current="page">
                <span class="material-icons-outlined">
                    timer
                </span>
            </RouterLink>

            <RouterLink to="/GitView" class="nav-link active">
                <span class="material-icons-outlined">
                    account_circle
                </span>
            </RouterLink>

        </div>
    </nav>
</template>