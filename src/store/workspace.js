import { defineStore } from 'pinia'

export const useWorkspaceStore = defineStore('workspace', {
  state() {
    return {
      workspace: {},
      workspaces: []
    }
  },
  getters: {

  },
  actions: {
    // C
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
      this.readWorkspaces()
    },
    // R
    async readWorkspaces() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KimMingu'
        },
      })
      const worksapces = await res.json()
      console.log(worksapces)

      this.workspaces = worksapces
    },
    async readWorkspace(id) {
      const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KimMingu'
        },
      })
      const workspace = await res.json()
      console.log(workspace)

      this.workspace = workspace
    },
    // U
    async updateWorkspace(payload) {
      const { id, title, content } = payload
      await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KimMingu'
        },
        body: JSON.stringify({
          title,
          content
        })
      })

      this.readWorkspaces()
    },
    // D
    async deleteWorkspace(id) {
      await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KimMingu'
        },
      })
      this.readWorkspaces()
    }
  }
})
