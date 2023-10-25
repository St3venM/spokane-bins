<template class="container">
    <header class="header">
        <object 
            class="home-icon" 
            :data="require('@/assets/icons/home.svg')" 
            type="image/svg+xml"
        />
        <nav>
            <ul class="nav-links">
                <li><router-link to="/">{{ HOMELINK }}</router-link></li>
                <li class="pipe-delimeter">|</li>
                <li><router-link to="/contact-us">{{ CONTACTLINK }}</router-link></li>
                <li class="pipe-delimeter">|</li>
                <li><router-link to="/about-us">{{ ABOUTLINK }}</router-link></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>

export default {
    name: 'TopNav',
    components: {},
    data () {
        return {
            HOMELINK: 'SPOKANE BINS',
            CONTACTLINK: 'CONTACT US',
            ABOUTLINK: 'ABOUT',
        }
    },
}
</script>

<style scoped lang="scss">
    .header {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: var(--black);
        color: var(--white);
        max-height: 90px;
        width: 100%;
        padding: 5px;

        .home-icon {
            width: 4em;
            height: 4em;
            margin: 0.5em;
        }
        .home-icon:hover {
            cursor: pointer;
        }
        
        nav {
            padding-right: 20px;
            font-family: var(--primary-font);
            font-weight: var(--medium-font-weight);

            .nav-links {
                display: flex;
                flex-direction: row;
                list-style-type: none;

                a {
                    color: var(--white);
                    text-decoration: none;
                }
                a:hover {
                    color: var(--black-hover);
                
                }
                .pipe-delimeter {
                    padding: 0 10px;
                }
            }
        }
    }

</style>