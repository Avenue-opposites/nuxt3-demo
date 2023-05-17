<template>
    <div p-16>
        <h1 text="10 primary">Document Layout</h1>
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="main" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
        <slot />
    </div>
</template>