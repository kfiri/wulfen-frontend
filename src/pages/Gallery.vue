<template>
  <q-page>
    <div style="min-height: 60px" class="text-content row justify-center items-start">
      <p class="col-sm col-11 text-h5 self-center text-center">{{ galleryText }}</p>
    </div>
    <div id="gallery-row" class="row justify-center q-mx-md">
      <div
        v-for="imgItem in galleryItems"
        :key="imgItem.title"
        :class="{
          'col-6 col-sm-3 col-md-2 col-xl-1': imgItem.ratio < 1,
          'col-12 col-sm-6 col-md-4 col-xl-2': 1 <= imgItem.ratio && imgItem.ratio < 1.5,
          'col-12 col-sm-9 col-md-6 col-xl-3': 1.5 <= imgItem.ratio && imgItem.ratio < 2,
          'col-12 col-sm-12 col-md-8 col-xl-4': 2 <= imgItem.ratio,
        }"
      >
        <q-img
          class="cursor-pointer"
          :src="imgItem.src"
          :ratio="imgItem.ratio"
          @click="imageDetails = imgItem"
        />
        <p class="text-center">
          {{ imgItem.title }} / {{ titles.artist }}: {{ imgItem.artist }} / {{ titles.owner }}:
          {{ imgItem.owner }}
        </p>
      </div>
    </div>

    <image-dialog :details.sync="imageDetails"></image-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import csvParse from 'csv-parse/lib/sync';

import galleryText from 'assets/gallery.txt';
import gallery from 'assets/gallery.csv';

import ImageDialog from 'components/ImageDialog.vue';

const RATIO_RE = /(\d+)(?:\s*[/:\\,-]\s*(\d+))/;
const DEFAULT_RATIO = 4 / 3;
function parseRatio(ratioString: string) {
  const regexMatch = RATIO_RE.exec(ratioString);
  const [, width, height] = regexMatch ? regexMatch : [];
  if (width) {
    return height ? Number(width) / Number(height) : Number(width);
  }
  return DEFAULT_RATIO;
}

export default defineComponent({
  components: { ImageDialog },
  name: 'WorldPage',
  setup() {
    const [titleValues, ...items] = csvParse(gallery) as [string[], ...Array<string[]>];
    const titles = {
      title: titleValues[0],
      artist: titleValues[1],
      owner: titleValues[2],
      src: titleValues[3],
      thumb: titleValues[4],
      ratio: titleValues[5],
    };
    const galleryItems = items.map((item: string[]) => ({
      title: item[0],
      artist: item[1],
      owner: item[2],
      src: item[3],
      thumb: item[4],
      ratio: parseRatio(item[5]),
    }));
    return { galleryText, titles, galleryItems };
  },
  data() {
    return { imageDetails: null };
  },
});
</script>

<style scoped lang="scss">
.text-content {
  background-color: #00000022;
  // min-height: 200vh;
}
.inline-image {
  max-width: 150px;
  float: left;
  margin: 5px 15px 10px 5px;
}
</style>
