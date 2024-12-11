declare module "vue_remote/Counter" {
  import { DefineComponent } from "vue";

  const Counter: DefineComponent<{}, {}, any>;

  export default Counter;
}

declare module "vue_remote/vue" {
  export { createApp } from "vue";
}
