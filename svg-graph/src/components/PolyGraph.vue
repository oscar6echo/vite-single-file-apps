<script setup lang="ts">
  import AxisLabel from './AxisLabel.vue';
  import { computed, PropType } from 'vue';
  import { valueToPoint } from '../services/utils';
  import { Points } from './interfaces';

  //   interface Point {
  //     label: string;
  //     value: number;
  //   }

  //   type Points = Array<Point>;

  const props = defineProps({
    stats: { type: Array as PropType<Points>, required: true },
  });

  const points = computed(() => {
    const total = props.stats.length;
    return props.stats
      .map((stat, i) => {
        const { x, y } = valueToPoint(stat.value, i, total);
        return `${x},${y}`;
      })
      .join(' ');
  });
</script>

<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label
      v-for="(stat, index) in stats"
      :key="index"
      :stat="stat"
      :index="index"
      :total="stats.length"
    >
    </axis-label>
  </g>
</template>
