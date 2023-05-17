export default defineNuxtPlugin(() => ({
    provide:{
        greet(name:string) {
            return () => alert(`Hello ${name}`);
        }
    }
}));