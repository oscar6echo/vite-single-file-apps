<script setup lang="ts">
  import PolyGraph from './components/PolyGraph.vue';
  import { ref, reactive } from 'vue';

  let appInputJson = `__VIZ_INPUT_JSON__`;
  let appInput;

  const testAppInput = [
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 80 },
  ];

  if (appInputJson == '__VIZ_INPUT_JSON__') {
    appInput = testAppInput;
  } else {
    appInput = JSON.parse(appInputJson);
  }

  const newLabel = ref('');
  const stats = reactive(appInput);

  function add(e: any): void {
    e.preventDefault();
    if (!newLabel.value) return;
    stats.push({
      label: newLabel.value,
      value: 100,
    });
    newLabel.value = '';
  }

  function remove(stat: { label: string; value: number }): void {
    if (stats.length > 3) {
      stats.splice(stats.indexOf(stat), 1);
    } else {
      alert("Can't delete more!");
    }
  }
</script>

<template>
  <svg width="200" height="200">
    <PolyGraph :stats="stats"></PolyGraph>
  </svg>

  <!-- controls -->
  <div v-for="stat in stats" :key="stat.label">
    <label>{{ stat.label }}</label>
    <input v-model="stat.value" type="range" min="0" max="100" />
    <span>{{ stat.value }}</span>
    <button class="remove" @click="remove(stat)">X</button>
  </div>

  <form id="add">
    <input v-model="newLabel" name="newlabel" />
    <button @click="add">Add a Stat</button>
  </form>

  <pre id="raw">{{ stats }}</pre>
</template>

<style>
  polygon {
    fill: #42b983;
    opacity: 0.75;
  }

  circle {
    fill: transparent;
    stroke: #999;
  }

  text {
    font-size: 10px;
    fill: #666;
  }

  label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
  }

  #raw {
    position: absolute;
    top: 0;
    left: 300px;
  }
</style>
