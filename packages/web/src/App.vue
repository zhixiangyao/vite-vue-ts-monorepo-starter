<script lang="tsx">
import { add } from 'utils'
import { defineComponent } from 'vue'
import img from './assets/logo.png'
import HelloWorld from './components/HelloWorld.vue'

function App() {
  return () => (
    <>
      <img alt="Vue logo" src={img} />

      <p>{add(900, 96)}</p>

      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite">
        <div>default slot</div>
      </HelloWorld>
    </>
  )
}

export default defineComponent(App)
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
