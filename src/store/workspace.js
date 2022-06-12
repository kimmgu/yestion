import { defineStore } from 'pinia'

export const useWorkspaceStore = defineStore('workspace', {
  state() {
    return {

    }
  },
  getters: {

  },
  actions: {
    // CRUD
    async createWorkspace() {
      // fetch('url', options)
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KimMingu'
        },
        body: JSON.stringify({
          // parentId: '',
          title: 'yestion',
          content: 'notion clone coding',
          // poster: ''
        })
      })
      const workspace = await res.json()
      console.log(workspace)
    }
  }
})
