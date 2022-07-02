<script setup lang="ts">
  import { computed, PropType } from 'vue';
  import { valueToPoint } from '../services/utils';

  import { Point } from './interfaces';

  //   interface Point {
  //     label: string;
  //     value: number;
  //   }

  const props = defineProps({
    stat: { type: Object as PropType<Point>, required: true },
    index: { type: Number, required: true },
    total: { type: Number, required: true },
  });

  const point = computed(() =>
    valueToPoint(+props.stat.value + 10, props.index, props.total),
  );
</script>

<template>
  <text :x="point.x" :y="point.y">{{ stat.label }}</text>
</template>
