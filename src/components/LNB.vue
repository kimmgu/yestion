<template>
  <div>
    <ul class="my-5">
      <li v-for="workspace in workspaceStore.workspaces" :key="workspace.id">
        <RouterLink :to="`/workspaces/${workspace.id}`">
          {{ workspace.title }}
        </RouterLink>
        <button @click="workspaceStore.deleteWorkspace(workspace.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  created() {
    this.workspaceStore.readWorkspaces()
  }
}
</script>
