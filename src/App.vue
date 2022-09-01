<template>
  <div class="app">
    <p class="title">restful</p>
    <div class="method-wrap">
      <button class="method-wrap__btn" @click="handleLocalGet">Get</button>
      <button class="method-wrap__btn" @click="handleLocalPost">Post</button>
      <button class="method-wrap__btn" @click="handleLocalPut">Put</button>
      <button class="method-wrap__btn" @click="handleLocalPatch">Patch</button>
      <button class="method-wrap__btn" @click="handleLocalDelete">
        Delete
      </button>
      <button class="method-wrap__btn" @click="handleLocalGetError">
        Error
      </button>
    </div>

    <!-- <p class="title">graphql</p>
    <div class="method-wrap">
      <button class="method-wrap__btn" @click="handleGraphqlGetThemeList">Graphql</button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  localGetAPI,
  localPostAPI,
  localPutAPI,
  localPatchAPI,
  localDeleteAPI,
  localGetErrorAPI,
} from "@/api/local.js";

// import {
//   getThemeListAPI,
// } from "@/api/graphql.js";

export default defineComponent({
  name: "App",
  setup() {
    const handleLocalGet: () => Promise<void> = async () => {
      const res = await localGetAPI();
      console.log("get res...", res);
    };

    const handleLocalPost: () => Promise<void> = async () => {
      const res = await localPostAPI();
      console.log("post res...", res);
    };

    const handleLocalPut: () => Promise<void> = async () => {
      const res = await localPutAPI();
      console.log("put res...", res);
    };

    const handleLocalPatch: () => Promise<void> = async () => {
      const res = await localPatchAPI();
      console.log("patch res...", res);
    };

    const handleLocalDelete: () => Promise<void> = async () => {
      const res = await localDeleteAPI();
      console.log("delete res...", res);
    };

    const handleLocalGetError: () => Promise<void> = async () => {
      const res = await localGetErrorAPI();
      console.log("error res...", res);
      console.log("err", res.to());
    };

    // const handleGraphqlGetThemeList: () => Promise<void> = async () => {
    //   const res = await getThemeListAPI();
    //   console.log("get theme list res...", res);
    // };

    return {
      handleLocalGet,
      handleLocalPost,
      handleLocalPut,
      handleLocalPatch,
      handleLocalDelete,
      handleLocalGetError,
      // handleGraphqlGetThemeList
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
}
.method-wrap {
  @include flex();

  & + & {
    margin-top: 10px;
  }

  &__btn {
    & + & {
      margin-left: 10px;
    }
  }
}
</style>
