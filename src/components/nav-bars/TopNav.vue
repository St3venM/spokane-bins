<template>
    <header class="header">
        <img 
            class="logo"
            alt="Spokane Bins logo" 
            src="@\assets\images\logos\spokane-bins-official-logo.png"
        />   
        <nav>
            <ul class="nav-links">
                <li><a href="/">{{ HOMELINK }}</a></li>
                <li class="pipe-delimeter">|</li>
                <li><a href="/ContactUs">{{ CONTACTLINK }}</a></li>
                <li class="pipe-delimeter">|</li>
                <li><a href="/AboutUs">{{ ABOUTLINK }}</a></li>
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
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: var(--black);
        color: var(--white);
        max-height: 50px;

        .logo {
            object-fit: contain;
            max-width: 10%;
            max-height: 10%;
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