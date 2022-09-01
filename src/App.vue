<template>
  <div class="app">
    <div class="method-wrap">
      <button class="method-wrap__btn" @click="handleLocalGet">Get</button>
      <button class="method-wrap__btn" @click="handleLocalPost">Post</button>
      <button class="method-wrap__btn" @click="handleLocalPut">Put</button>
      <button class="method-wrap__btn" @click="handleLocalPatch">Patch</button>
      <button class="method-wrap__btn" @click="handleLocalDelete">
        Delete
      </button>
      <button class="method-wrap__btn" @click="handleLocalGetError">Error</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  localGetAPI,
  localPostAPI,
  localPutAPI,
  localPatchAPI,
  localDeleteAPI,
  localGetErrorAPI,
} from "@/api/local.js";

export default defineComponent({
  name: "App",
  setup() {
    const  handleLocalGet = async () => {
      const res = await localGetAPI();
      console.log('get res...', res)
    };

    const handleLocalPost = () => {
      localPostAPI();
    };

    const handleLocalPut = () => {
      localPutAPI();
    };

    const handleLocalPatch = () => {
      localPatchAPI();
    };

    const handleLocalDelete = () => {
      localDeleteAPI();
    };

    const handleLocalGetError = () => {
      localGetErrorAPI();
    };

    return {
      handleLocalGet,
      handleLocalPost,
      handleLocalPut,
      handleLocalPatch,
      handleLocalDelete,
      handleLocalGetError,
    };
  },
});
</script>
<style lang="scss" scoped>
.method-wrap {
  @include flex();

  &__btn {
    

    & + & {
      margin-left: 10px;
    }
  }
}
</style>
