<template>
  <div>
    <h1>Workspace</h1>
    <button @click="workspaceStore.createWorkspace">
      Workspace Create
    </button>

    <section :key="$route.params.id">
      <h1 ref="title" placeholder="제목 없음" contenteditable @keydown.prevent.enter="$refs.content.focus()"
        @blur="onInput">
        {{ workspaceStore.workspace.title }}
      </h1>
      <p ref="content" placeholder="내용을 입력하세요!" contenteditable @blur="onInput"
        v-html="workspaceStore.workspace.content">
      </p>
    </section>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  watch: {
    $route() {
      this.workspaceStore.readWorkspace(this.$route.params.id)
    }
  },
  created() {
    this.workspaceStore.readWorkspace(this.$route.params.id)
  },
  methods: {
    onInput() {
      // const title = event.target.value
      const title = this.$refs.title.textContent
      const content = this.$refs.content.innerHTML

      if (!title.trim()) {
        this.$refs.title.innerHTML = ''
      }
      if (!this.$refs.content.textContent.trim()) {
        this.$refs.content.innerHTML = ''
      }

      this.workspaceStore.updateWorkspace({
        id: this.$route.params.id,
        title,
        content
      })
    }
  }
}
</script>

<style scoped lang="scss">
[contenteditable] {
  &:empty::before {
    content: attr(placeholder);
    color: aquamarine;
  }
}
</style>
