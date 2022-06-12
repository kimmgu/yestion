<template>
  <div>
    <h1>Workspace</h1>
    <button @click="workspaceStore.createWorkspace">
      Create
    </button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore)
  }
}
</script>

<style lang="scss" scoped>
</style>
