declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // Using unknown for compatibility and to avoid explicit 'any'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
